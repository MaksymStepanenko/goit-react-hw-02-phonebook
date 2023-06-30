import React from 'react';
import { nanoid } from 'nanoid';

export const ListContacts = ({ state }) => {
  return (
    <ul>
      {state.map(({ name, number }) => {
        return (
          <li key={nanoid()}>
            <p>
              {name} : {number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
