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
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12 ">
              <p>
                To RSVP, please enter your last name followed by your zip code, with no space in between (e.g. mena85295).
              </p>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-9 ">
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
            </div>
            <div className="bx--col-xs-3">
              <Button type="submit" className="search-guest__submit">
                Search
              </Button>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-12">
              <div className="search-guest__message">
                {this.props.showNotFoundMessage ?
                  <p>Guest was not found.</p>  
                : ''}
              </div>
            </div>
          </div>
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
