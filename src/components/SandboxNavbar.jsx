import { Navbar, Container } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function SandboxNavbar({ darkTheme = false }) {
  const theme = darkTheme ? "dark" : "light";

  return (
    <Navbar
      bg={theme}
      className="border-bottom"
      data-bs-theme={theme}
      variant={theme}
    >
      <Container>
        <Navbar.Brand href="#home">Metaform | Sandbox</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            View Source:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/maxqwars/metaform-sandbox"
            >
              GitHub
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SandboxNavbar;
