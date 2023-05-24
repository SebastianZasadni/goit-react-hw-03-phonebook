import PropTypes from 'prop-types';
import css from '../Phonebook/Phonebook.module.css';

export const ContactsForm = ({ onSubmit }) => {
  return (
    <div className={css.sectionAddContacts}>
      <form className={css.contactsForm} onSubmit={onSubmit}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Phone number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}