import React from 'react';

export const Filter = ({ state, updateFilter }) => {
  return (
    <label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => {
          updateFilter(e.currentTarget.value.trim());
        }}
        value={state.filter}
      />
    </label>
  );
};
