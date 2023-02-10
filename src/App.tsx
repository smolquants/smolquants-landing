import React from "react";
import {
  Image,
  Navbar,
  Button,
  Card,
  Container,
  Col,
  Row,
  Stack,
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
        <Card style={{ border: "none", margin: "16px 0" }}>
          <Card.Title style={{ width: "24rem" }}>
            Economic Risk Audits for DeFi Protocols
          </Card.Title>
          <Card.Text style={{ width: "40rem" }}>
            SmolQuants is a collective of DeFi Risk experts. We provide economic
            risk consulting & auditing services to various DeFi protocols.
            Beyond audit and advisory services, we also build open-source
            research tools that will support builders in making DeFi safer for
            all participants.
          </Card.Text>
          <div>
            <Button size="lg">Schedule Audit</Button>
          </div>
        </Card>
      </Container>
      <Container>
        <Row>
          <Col xs={6}>
            <Card.Title>Links</Card.Title>
            <Stack>
              <Card.Link href="https://app.gitbook.com/o/pjyIvdmFsgl3q0dQOa9T/s/jMHEocVZwQUdszK9KkFQ/">
                Documentation
              </Card.Link>
              <Card.Link href="https://github.com/smolquant">Github</Card.Link>
            </Stack>
          </Col>
          <Col>
            <Card.Title>Past Work</Card.Title>
            <Stack>
              <Card.Link href="https://github.com/smolquants/y2k-audit-2022/blob/main/audit/audit.pdf">
                Y2K
              </Card.Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
