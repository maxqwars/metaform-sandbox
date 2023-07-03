/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function ApiSelector({ methods, onSelect }) {
  return (
    <Form.Select onChange={(event) => onSelect(event)}>
      <option value={null}>Select API method here</option>
      {methods.map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </Form.Select>
  );
}

export default ApiSelector;
