import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { FilterWrapper, Input } from './Filter.styled';
import { FaTimes } from 'react-icons/fa';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name:</label>
      <FilterWrapper>
        <Input type="text" name="filter" value={value} onChange={onChange} />
        {value && (
          <IconButton
            color="blue"
            type="button"
            aria-label="Clear filter"
            onClick={onClick}
          >
            <FaTimes />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
