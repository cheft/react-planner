import React, {PropTypes} from 'react';
import FormLabel from '../../components/style/form-label'
import FormColorInput from '../../components/style/form-color-input';

let firstTdStyle = {
  width: '6em'
};

export default function PropertyColor({value, onUpdate, configs}) {
  return (
    <table className="PropertyColor" style={{ width: "100%", borderSpacing: "2px 0", marginBottom: "2px" }}>
      <tbody>
        <tr>
          <td style={firstTdStyle}>
            <FormLabel>{configs.label}</FormLabel>
          </td>
          <td>
            <FormColorInput value={value} onChange={event => onUpdate(event.target.value)}/>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

PropertyColor.propTypes = {
  value: PropTypes.any.isRequired,
  onUpdate: PropTypes.func.isRequired,
  configs: PropTypes.object.isRequired,
};
