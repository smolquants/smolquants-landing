import React from "react";
import {
  Image,
  Navbar,
  Button,
  Card,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import SmolQuants_Logo from "./assets/images/smolquants-logo.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Image src={SmolQuants_Logo} height={50}></Image>
        <Navbar.Text>SmolQuants</Navbar.Text>
      </Container>
      <Container>
        <Card>
          <Card.Title>Economic Risk Audits for DeFi Protocols</Card.Title>
          <Card.Text>
            Quickly and easily get started with Bootstrap's compiled,
            production-ready files with this barebones example featuring some
            basic HTML and helpful links. Download all our examples to get
            started.
          </Card.Text>
          <Button>Schedule Audit</Button>
        </Card>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card.Title>Start Projects</Card.Title>
            <Card.Text>
              Ready to beyond the starter template? Check out these open source
              projects that you can quickly duplicate to a new GitHub
              repository.
            </Card.Text>
            <Card.Link>Bootstrap npm starter</Card.Link>
            <Card.Link>Bootstrap Parcel starter (coming soon!)</Card.Link>
          </Col>
          <Col>
            <Card.Title>Guides</Card.Title>
            <Card.Text>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </Card.Text>
            <Card.Link>Bootstrap quick start guide</Card.Link>
            <Card.Link>Bootstrap Webpack guide</Card.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
