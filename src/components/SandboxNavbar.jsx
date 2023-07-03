import { Navbar, Container } from "react-bootstrap";

function SandboxNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="dark" className="border-bottom">
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
