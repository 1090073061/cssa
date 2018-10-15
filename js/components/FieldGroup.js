import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input } from 'reactstrap'

const FieldGroup = ({ value, onChange }) => (
  <FormGroup>
    <Input
      type="text"
      value={value}
      onChange={onChange}
    />
  </FormGroup>
)

FieldGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FieldGroup
