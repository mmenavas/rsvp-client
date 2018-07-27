import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { FormGroup } from 'carbon-components-react';
import { Toggle } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import './Guest.css';

const Guest = props => (
  <div className="guest">
    <Tile>
      <h3 className="guest__name">{props.guest.name}
        <span className="guest__guests">+{props.guest.guests}</span>
      </h3>
      <Form className="edit-guest" onSubmit={e => props.handleUpdateGuest(e)}>
        <FormGroup className="edit-guest__rsvp-wrapper" legendText="RSVP">
          <Toggle
            className="edit-guest__rsvp"
            id={"guest-" + props.guest.id + "-rsvp"}
            labelA="No"
            labelB="Yes"
            onToggle={props.handleGuestRsvp}
            defaultToggled={props.guest.isConfirmed}
          />
        </FormGroup>
        <Button type="submit" className="edit-guest__submit">
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
