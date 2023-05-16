import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

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

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    form.reset();
    this.handleAddContact(contact);
  };

  handleFilter = evt => {
    const filter = evt.currentTarget.value;
    this.setState({
      filter: filter,
    });
  };

  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    const isContactExist = () =>
      contacts.find(c => c.name.toLowerCase() === name.toLowerCase());

    isContactExist()
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = id => {
    const listWithoutDeletedContact = this.state.contacts.filter(
      c => c.id !== id
    );
    this.setState({
      contacts: listWithoutDeletedContact,
    });
  };

  filtrContacts = () => {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(c =>
      c.name.toLowerCase().startsWith(filter.toLowerCase())
    );
    return filtredContacts.map(c => (
      <li key={c.id}>
        {c.name}: {c.number}
        <button type="submit" onClick={() => this.deleteContact(c.id)}>
          Delete
        </button>
      </li>
    ));
  };
  componentDidMount() {
    localStorage.friends
      ? this.setState({ contacts: JSON.parse(localStorage.friends) })
      : this.setState({ contacts: [] });
  }
  componentDidUpdate() {
    localStorage.friends = JSON.stringify(this.state.contacts);
  }
  render() {
    return (
      <div className={css.sectionphonebook}>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.handleSubmit} />
        <Filter onFilter={this.handleFilter} />
        <ContactsList contacts={this.filtrContacts()} />
      </div>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
};
