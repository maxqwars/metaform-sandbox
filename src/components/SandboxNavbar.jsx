import { Navbar, Container } from "react-bootstrap";

function SandboxNavbar({ bsColorScheme = "light" }) {
  return (
    <Navbar
      bg={bsColorScheme}
      className="border-bottom"
      data-bs-theme={bsColorScheme}
      variant={bsColorScheme}
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
