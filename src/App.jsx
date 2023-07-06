import SandboxNavbar from "./components/SandboxNavbar";
import ApiSelector from "./components/ApiSelector";
import ErrorsAccordion from "./components/ErrorsAccordion";
import {
  Form,
  Stack,
  Container,
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { RefreshCw, Sun, Moon } from "react-feather";
import { useState, useEffect } from "react";
import { SandboxCore } from "./models/SandboxCore";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import prefersColorSchemeIsDark from "./functions/prefersColorSchemeIsDark";
import useBodyTheme from "./hooks/useBodyTheme";

const core = new SandboxCore();

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [methodKey, setMethodKey] = useState(null);
  const [requestParams, setRequestParams] = useState(null);
  const [darkTheme, setDarkTheme] = useState(prefersColorSchemeIsDark());
  const [jsonInputTheme, setJsonInputTheme] = useState(
    "light_mitsuketa_tribute"
  );

  useBodyTheme(darkTheme);

  console.log(`Enable dark theme: ${darkTheme}`);
  console.log(`JSONInput theme: ${jsonInputTheme}`);

  const onThemeChange = () => {
    setDarkTheme(!darkTheme);
    setResponse(response);
    setRequestParams(requestParams);
    setJsonInputTheme(
      darkTheme ? "dark_vscode_tribute" : "light_mitsuketa_tribute"
    );
    return;
  };

  const onRequestParamsEditorBlur = (data) => {
    const { jsObject } = data;
    setRequestParams(jsObject);
    setResponse(null);
    setLoading(true);
  };

  const onSelect = (event) => {
    setMethodKey(event.target.value);
    setJsonInputTheme(
      darkTheme ? "dark_vscode_tribute" : "light_mitsuketa_tribute"
    );
    setResponse(null);
    setLoading(true);
    setRequestParams(null);
  };

  const onRefresh = () => {
    console.log("on refresh");
  };

  useEffect(() => {
    if (!methodKey) {
      setMethodKey(methodKey);
      setLoading(true);
      return;
    }

    const { func, pre_defined_params } = core.get(methodKey);

    if (!requestParams) {
      setRequestParams(pre_defined_params);
      setLoading(true);
      return;
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
      <SandboxNavbar darkTheme={darkTheme} />

      {/* API selector */}
      <div className="my-2">
        <Container>
          <Form>
            <Stack direction="horizontal" gap={1}>
              <ApiSelector
                methods={core.apiMethodsKeys}
                onSelect={onSelect}
                darkTheme={darkTheme}
              />
              <Button onClick={onRefresh}>
                <RefreshCw />
              </Button>
              <Button
                variant={darkTheme ? "dark" : "light"}
                onClick={onThemeChange}
              >
                {darkTheme ? <Sun /> : <Moon />}
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
                  {loading ? (
                    <Loader />
                  ) : (
                    <JSONInput
                      id="request-editor"
                      placeholder={requestParams ? requestParams : {}}
                      locale={locale}
                      height="200px"
                      width="100%"
                      onBlur={onRequestParamsEditorBlur}
                      theme={jsonInputTheme}
                    />
                  )}
                </div>

                <div className="mt-2">
                  <h4>Response viewer</h4>
                  {loading ? (
                    <Loader />
                  ) : (
                    <JSONInput
                      id="response-viewer"
                      placeholder={response ? response : {}}
                      locale={locale}
                      height="270px"
                      width="100%"
                      onBlur={onRequestParamsEditorBlur}
                      theme={jsonInputTheme}
                    />
                  )}
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
