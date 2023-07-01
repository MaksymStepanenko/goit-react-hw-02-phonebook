import React from 'react';
import PropTypes from 'prop-types';

export const ListContacts = ({ state, deleteContact }) => {
  return (
    <ul>
      {state.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  deleteContact: PropTypes.func,
  state: PropTypes.array,
  number: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
