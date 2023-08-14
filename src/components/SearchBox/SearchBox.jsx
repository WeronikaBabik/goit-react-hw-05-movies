import { PropTypes } from 'prop-types';

const SearchBox = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  );
};

export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
