import { PropTypes } from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className={css.input}
    />
  );
};

export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
