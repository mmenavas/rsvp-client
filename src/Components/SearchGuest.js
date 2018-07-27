import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'carbon-components-react';
import { Search } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './SearchGuest.css';

const SearchGuest = props => (
  <div className="search-guest">
    <Form className="search-guest__form" onSubmit={e => props.handleGuestSearch(e)}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-9 ">
            <Search
              id="search-guest-name"
              labelText="Search"
              onChange={props.handleLastName}
              value={props.lastName}
              placeholder="Enter guest name"
              className="search-guest__name"
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
              {props.showNotFoundMessage ?
                <p>Guest was not found.</p>  
              : ''}
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
);

SearchGuest.propTypes = {
  lastName: PropTypes.string.isRequired,
  showNotFoundMessage: PropTypes.string.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleGuestSearch: PropTypes.func.isRequired,
}

export default SearchGuest;
