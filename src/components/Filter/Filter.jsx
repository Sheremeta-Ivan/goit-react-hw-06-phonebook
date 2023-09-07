import React from 'react';
import propTypes from 'prop-types';
import { Div, Label, Input } from './Filter.styled';

// component filter contact
function Filter({ value, onChangeFilter }) {
  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};

export default Filter;
