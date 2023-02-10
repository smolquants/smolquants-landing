import { Image, Button, Card, Container, Col, Stack } from "react-bootstrap";
import SmolQuants_Logo from "./assets/images/smolquants-logo.jpg";
import "./App.css";

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
      <Stack gap={5}>
        <Container fluid="md" style={{ maxWidth: "40rem" }}>
          <Stack direction="horizontal" gap={3}>
            <Image src={SmolQuants_Logo} height={60}></Image>
            <Card.Header style={{ fontSize: "32px" }}>SmolQuants</Card.Header>
          </Stack>
        </Container>

        <Container fluid="md" style={{ maxWidth: "40rem" }}>
          <Card style={{ border: "none", maxWidth: "40rem" }}>
            <h5>
              <b>Economic Risk Audits for DeFi Protocols</b>
            </h5>
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

        <Container fluid="md" style={{ maxWidth: "40rem" }}>
          <div className="row g-5">
            <Col md={6}>
              <Stack gap={2}>
                <h6>Links</h6>
                <a
                  href="https://smolquants.gitbook.io/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Us
                </a>
                <a
                  href="https://github.com/smolquants"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </Stack>
            </Col>
            <Col md={6}>
              <Stack gap={2}>
                <h6>Our Work</h6>
                {smolQuantsWork.map((asset, index) => (
                  <a href={asset.link} target="_blank" rel="noreferrer">
                    {asset.description}
                  </a>
                ))}
              </Stack>
            </Col>
          </div>
        </Container>
      </Stack>
    </div>
  );
}

export default App;
