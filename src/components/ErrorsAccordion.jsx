import { Accordion } from "react-bootstrap";

function ErrorsAccordion({ bsColorScheme = "light" }) {
  return (
    <Accordion variant={bsColorScheme}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>TIMEOUT_ERR</Accordion.Header>
        <Accordion.Body>
          Occurs if the server does not respond within a certain timeout
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WRONG_PARAM_SET</Accordion.Header>
        <Accordion.Body>
          Appears in the case of incorrectly specified query parameters, such as
          combining id and code from different releases
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>REQ_PARAM_IS_MISSING</Accordion.Header>
        <Accordion.Body>
          Appears if at least one of the required parameters, such as id and
          code in getTitle and getTitlesList methods is not specified
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>UNKNOWN_ERR</Accordion.Header>
        <Accordion.Body>
          Default error or we did not write a handler for the error
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>DEPTH_ZERO_SELF_SIGNED_CERT</Accordion.Header>
        <Accordion.Body>
          Appears mainly if the API host you specified is blocked by
          Roskomnadzor
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>INVALID_USR</Accordion.Header>
        <Accordion.Body>Incorrect user email or login</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>WRONG_PASSWORD</Accordion.Header>
        <Accordion.Body>Incorrect user password</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ErrorsAccordion;
