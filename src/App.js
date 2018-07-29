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
      code: '',
      zipCode: '',
      rsvp: '',
      guest: {},
    }
  }

  componentDidMount() {
  }

  handleCode = (code) => {
    this.setState({
      code: code,
      searched: false,
      found: false
    });
  }
  
  handleGuestSearch = (e) => {
    e.preventDefault();

    // Abort if no name is supplied
    if (!this.state.code) {
      return false;
    }

    let _this = this;
    firebase.database().ref('guests')
      .orderByChild('code')
      .equalTo(this.state.code)
      .limitToFirst(1).once('value', data => {
        data.forEach(item => {
          let guest = item.val();
          if (guest) {
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

  handleGuestRsvp = (rsvp) => {
    this.setState({
      rsvp: rsvp
    });
  }

  handleUpdateGuest = (e) => {
    e.preventDefault();

    // Abort if no guest is found.
    if (!this.state.guest) {
      return false;
    }

    console.log(this.state.guest);

    // Update guest on firebase.
    firebase.database().ref(`/guests/${this.state.guest.id}`).set({
      ...this.state.guest,
      rsvp: this.state.rsvp
    });

    this.setState({
      guest:{},
      searched: false,
      found: false,
      rsvp: '',
      showThankYou: true
    });

    return true;
  }

  render() {
    return (
      <div className="app">
        <Tile>
          <SearchGuest
            code={this.state.code}
            showNotFoundMessage={this.state.searched && !this.state.found}
            handleCode={e => this.handleCode(e.target.value)}
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
            handleGuestRsvp={e => this.handleGuestRsvp(e.target.value)}
            handleUpdateGuest={e => this.handleUpdateGuest(e)}
          />
        : ''
        }
      </div>
    );
  }
}

export default App;
