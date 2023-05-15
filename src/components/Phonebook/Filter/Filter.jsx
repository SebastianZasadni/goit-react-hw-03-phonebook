import PropTypes from 'prop-types';

export const Filter = ({ addFilter }) => {
  return <input type="text" name="filter" onChange={addFilter}></input>;
};

Filter.propTypes = {
  addFilter: PropTypes.func,
}