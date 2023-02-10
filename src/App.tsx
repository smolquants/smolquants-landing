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
import styled from "styled-components";
import SmolQuants_Logo from "./assets/images/smolquants-logo.jpg";
import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface SmolQuantsWorkAsset {
  description: string;
  link: string;
}

const smolQuantsWork: Array<SmolQuantsWorkAsset> = [
  {
    description: "ETH Merge Data Challenge",
    link: "https://hackmd.io/@fmrmf/HyFXVQdVo",
  },
  {
    description: "Generalizable DeFi Backtester",
    link: "https://github.com/smolquants/backtest-ape",
  },
  {
    description: "DeFi Risk Analysis Tool",
    link: "https://github.com/smolquants/ape-risk",
  },
  {
    description: "Y2K",
    link: "https://github.com/smolquants/y2k-audit-2022/blob/main/audit/audit.pdf",
  },
];

function App() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <Stack gap={3}>
        <Container
          fluid="md"
          style={{ marginBottom: "1.5rem", maxWidth: "40rem" }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image src={SmolQuants_Logo} height={60}></Image>
            <Card.Header style={{ fontSize: "32px" }}>SmolQuants</Card.Header>
          </Stack>
        </Container>

        <Container
          fluid="md"
          style={{ marginBottom: "2rem", maxWidth: "40rem" }}
        >
          <Card style={{ border: "none", margin: "16px 0", maxWidth: "40rem" }}>
            <Card.Title>
              <b>Economic Risk Audits for DeFi Protocols</b>
            </Card.Title>
            <Card.Text>
              SmolQuants is a collective of DeFi Risk researchers. We provide
              economic risk consulting & auditing services to various DeFi
              protocols. Beyond audit and advisory services, we also build
              open-source research tools that will support builders in making
              DeFi safer for all participants.
            </Card.Text>
            <Button
              href="https://airtable.com/shrqhCDLlaL784GGa"
              target="_blank"
              size="lg"
              style={{ maxWidth: "20rem" }}
            >
              Contact Us
            </Button>
          </Card>
        </Container>

        <Container
          fluid="md"
          style={{ marginBottom: "2rem", maxWidth: "40rem" }}
        >
          <Row>
            <Col xs={6}>
              <Stack gap={2}>
                <Card.Header>Links</Card.Header>
                <Card.Link
                  href="https://smolquants.gitbook.io/about-us/"
                  target="_blank"
                >
                  About Us
                </Card.Link>
                <Card.Link href="https://github.com/smolquants" target="_blank">
                  Github
                </Card.Link>
              </Stack>
            </Col>
            <Col>
              <Stack gap={2}>
                <Card.Header>Our Work</Card.Header>
                {smolQuantsWork.map((asset, index) => (
                  <Card.Link href={asset.link} target="_blank">
                    {asset.description}
                  </Card.Link>
                ))}
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
    </div>
  );
}

export default App;
