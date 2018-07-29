import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'carbon-components-react';
import { Select} from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './Guest.css';

const Guest = props => (
  <div className="bx--grid">
    <div className="bx--row">
      <div className="bx--col-xs-12 ">
        <div className="guest">
          <h2 className="guest__name">
            {props.guest.firstName + " " + props.guest.lastName} <span className="guest__additional-guests"> +{props.guest.guests} </span>
          </h2>
          <Form className="edit-guest" onSubmit={e => props.handleUpdateGuest(e)}>
            <Select
              onChange={props.handleGuestRsvp}
              className="edit-guest__rsvp"
              id={"guest-" + props.guest.id + "-rsvp"}
              defaultValue={props.guest.rsvp}
              labelText="RSVP"
            >
              <SelectItem
                disabled
                value=""
                text="Choose an option"
              />
              <SelectItem value="yes" text="Yes" />
              <SelectItem value="no" text="No" />
            </Select>
            <Button type="submit" className="edit-guest__submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
);

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired,
}

export default Guest;
