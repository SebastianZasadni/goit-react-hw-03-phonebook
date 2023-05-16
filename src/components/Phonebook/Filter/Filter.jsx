import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return <input type="text" name="filter" onChange={onFilter}></input>;
};

Filter.propTypes = {
  onFilter: PropTypes.func,
}