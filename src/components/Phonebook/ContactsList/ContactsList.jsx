import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export const ContactsList = ({ contacts }) => {
  return (
    <div className={css.sectioncontacts}>
      <h3>Contacts</h3>
      <ul className={css.contactslist}>{contacts}</ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
