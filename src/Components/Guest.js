import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { Select} from 'carbon-components-react';
import { SelectItem } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './Guest.css';

const Guest = props => (
  <div className="guest">
    <Tile>
      <div className="guest__name">
        {props.guest.firstName + " " + props.guest.lastName}
      </div>
      <div className="guest__additional-guests">
        <strong>Additional Guests:</strong> {props.guest.guests}
      </div>
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
        <Button type="submit" classcode="edit-guest__submit">
          Save
        </Button>
      </Form>
    </Tile>
  </div>
);

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired,
}

export default Guest;
