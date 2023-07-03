import "bootstrap/dist/css/bootstrap.min.css";
import SandboxNavbar from "./components/SandboxNavbar";
import ApiSelector from "./components/ApiSelector";
import ErrorsAccordion from "./components/ErrorsAccordion";
import { Form, Stack, Container, Button, Row, Col } from "react-bootstrap";
import { RefreshCw } from "react-feather";
import { useState, useEffect } from "react";
import { SandboxCore } from "./models/SandboxCore";
import { JsonViewer } from "@textea/json-viewer";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const core = new SandboxCore();

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [methodKey, setMethodKey] = useState(null);
  const [requestParams, setRequestParams] = useState(null);

  console.log(loading)

  const onRequestParamsEditorBlur = (data) => {
    const { jsObject } = data;
    setRequestParams(jsObject);
    setResponse(null);
    setLoading(true);
  };

  const onSelect = (event) => {
    setMethodKey(event.target.value);
    setResponse(null);
    setLoading(true);
    setRequestParams(null);
  };

  const onRefresh = () => {
    console.log("on refresh");
  };

  useEffect(() => {
    if (!methodKey) {
      setMethodKey(methodKey)
      return
    }

    const { func, pre_defined_params } = core.get(methodKey);

    if (!requestParams) {
      setRequestParams(pre_defined_params)
      return
    }

    if (!response) {
            func(requestParams).then((data) => {
        setResponse(data);
        setLoading(false);
      });
      return;
    }
  }, [methodKey, requestParams, response]);

  return (
    <>
      {/* Navabar */}
      <SandboxNavbar />

      {/* API selector */}
      <div className="my-2">
        <Container>
          <Form>
            <Stack direction="horizontal" gap={1}>
              <ApiSelector methods={core.apiMethodsKeys} onSelect={onSelect} />
              <Button onClick={onRefresh}>
                <RefreshCw />
              </Button>
            </Stack>
          </Form>
        </Container>
      </div>

      <div className="my-3">
        <Container>
          <Row>
            {/* API Reference information */}
            <Col md={3}>
              <Stack direction="vertical" gap={1}>
                <h4>Reference</h4>
                <p>API Method description</p>
                <ErrorsAccordion />
              </Stack>
            </Col>
            {/* Workspace */}
            <Col md={9}>
              <Stack direction="vertical" gap={1}>
                <div className="mx-1">
                  <h4>Request editor</h4>
                  <JSONInput
                    id="a_unique_id"
                    placeholder={requestParams ? requestParams : {}}
                    locale={locale}
                    height="270px"
                    width="100%"
                    onBlur={onRequestParamsEditorBlur}
                  />
                </div>

                <div className="mt-2">
                  <h4>Response viewer</h4>
                  <JsonViewer value={response ? response : {}} />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
