export const ContactsList = ({ contacts }) => {
  return (
    <div className="section-contacts">
      <h3>Contacts</h3>
      <ul className="contacts-list">{contacts}</ul>
    </div>
  );
};
