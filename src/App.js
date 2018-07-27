import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import firebase from './firebase.js';
import Guest from './Components/Guest';
import './App.css';
import SearchGuest from './Components/SearchGuest.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searched: false,
      found: false,
      showThankYou: false,
      lastName: '',
      zipCode: '',
      rsvp: false,
      guest: {},
    }
  }

  componentDidMount() {
  }

  handleLastName = (lastName) => {
    this.setState({
      lastName: lastName,
      searched: false,
      found: false
    });
  }
  
  handleGuestSearch = (e) => {
    e.preventDefault();

    // Abort if no name is supplied
    if (!this.state.lastName) {
      return false;
    }

    let _this = this;
    firebase.database().ref('guests')
      .orderByChild('name')
      .equalTo(this.state.lastName)
      .limitToFirst(1).once('value', data => {
        data.forEach(item => {
          let guest = item.val();
          if (guest) {
            console.log("Success");
            _this.setState({
              guest: {
                ...guest,
              },
              found: true,
            })
          }
        });
        this.setState({
          searched: true,
          showThankYou: false
        });
      });
  }

  handleGuestRsvp = (checked) => {
    this.setState({
      rsvp: checked
    });
  }

  handleUpdateGuest = (e) => {
    e.preventDefault();

    // Abort if no guest is found.
    if (!this.state.guest) {
      return false;
    }

    // Update guest on firebase.
    firebase.database().ref(`/guests/${this.state.guest.id}`).set({
      ...this.state.guest,
      isConfirmed: this.state.rsvp
    });

    this.setState({
      guest:{},
      searched: false,
      found: false,
      rsvp: false,
      showThankYou: true
    });

    return true;
  }

  render() {
    return (
      <div className="app">
        <Tile>
          <SearchGuest
            lastName={this.state.lastName}
            showNotFoundMessage={this.state.searched && !this.state.found}
            handleLastName={e => this.handleLastName(e.target.value)}
            handleGuestSearch={e => this.handleGuestSearch(e)}
          />
        </Tile>
        <div className="app__message">
          {/* {this.state.showThankYou ?
          : ""} */}
        </div>
        {this.state.found ?
          <Guest
            guest={this.state.guest}
            handleGuestRsvp={checked => this.handleGuestRsvp(checked)}
            handleUpdateGuest={e => this.handleUpdateGuest(e)}
          />
        : ''
        }
      </div>
    );
  }
}

export default App;
