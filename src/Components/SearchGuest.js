import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'carbon-components-react';
import { Search } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './SearchGuest.css';

class SearchGuest extends Component {
  render = () =>
    <div className="search-guest">
      <Form className="search-guest__form" onSubmit={e => this.props.handleGuestSearch(e)}>
        <div className="search-guest__instructions">
          <p>To RSVP, please enter your last name followed by your zip code:</p>
        </div>
        <Search
          id="search-guest-code"
          labelText="Search"
          onChange={this.props.handleCode}
          value={this.props.code}
          placeHolderText="e.g. mena85295"
          className="search-guest__code"
          ref={ref => {
            this.searchRef = ref;
          }}
        />
        <Button type="submit" className="search-guest__submit">
          Search
        </Button>
        <div className="search-guest__message">
          {this.props.showNotFoundMessage ?
            <p><strong>Guest not found:</strong> Please verify that your last name and zipcode are correct.</p>  
          : ''}
        </div>
      </Form>
    </div>
}

SearchGuest.propTypes = {
  code: PropTypes.string.isRequired,
  showNotFoundMessage: PropTypes.bool.isRequired,
  handleCode: PropTypes.func.isRequired,
  handleGuestSearch: PropTypes.func.isRequired,
}

export default SearchGuest;
