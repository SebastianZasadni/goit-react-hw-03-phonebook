import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './Phonebook.css';
import { ContactsForm } from './contactsform/ContactsForm';
import { ContactsList } from './contactslist/ContactsList';
import { Filter } from './filter/Filter';
export class Phonebook extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: null,
    filter: '',
  };

  state = {
    contacts: this.props.contacts,
    name: this.props.name,
    number: this.props.number,
    filter: this.props.filter,
  };

  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const checkNewContactExist = this.state.contacts.find(
      c => c.name === contact.name
    );

    if (checkNewContactExist === undefined) {
      this.setState({
        contacts: [...this.state.contacts, contact],
        name: form.elements.name.value,
        number: form.elements.number.value,
      });
    } else {
      alert(`${contact.name} is already in contacts.`);
    }

    form.reset();
  };

  addFilter = evt => {
    const filter = evt.currentTarget.value;
    this.setState({
      filter: filter,
    });
  };

  deleteContact = id => {
    const listWithoutDeletedContact = this.state.contacts.filter(
      c => c.id !== id
    );
    this.setState({
      contacts: listWithoutDeletedContact,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(c =>
      c.name.toLowerCase().startsWith(this.state.filter.toLowerCase())
    );
    const contacts = filteredContacts.map(c => (
      <li key={c.id}>
        {c.name}: {c.number}
        <button type="submit" onClick={() => this.deleteContact(c.id)}>
          Delete
        </button>
      </li>
    ));

    return (
      <div className="section-phonebook">
        <h1>Phonebook</h1>
        <ContactsForm handleSubmit={this.addContact} />
        <Filter filtr={this.addFilter} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
