import React, { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filters: '',
  };

  onAddContact = data => {
    if (this.state.contacts.some(el => el.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          { name: data.name, number: data.number, id: nanoid() },
          ...prevState.contacts,
        ],
      }));
    }
  };

  filterByName = () => {
    const { contacts, filters } = this.state;
    const arr = contacts.filter(el => el.name.includes(filters));
    return arr;
  };

  updateFilter = data => {
    this.setState({ filters: data });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <FormContact onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter state={this.state.filters} updateFilter={this.updateFilter} />
        {this.state.filters === '' ? (
          <ListContacts state={this.state.contacts} />
        ) : (
          <ListContacts state={this.filterByName()} />
        )}
      </div>
    );
  }
}

export default App;
