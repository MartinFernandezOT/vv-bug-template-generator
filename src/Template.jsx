import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Toast,
  ToastContainer
} from "react-bootstrap";
import templateGenerator from "./template.js";

export default function Template(props) {
  const [show, setShow] = useState(false);

  function copyToClipboard() {
    const generatedTemplate = templateGenerator(props);
    navigator.clipboard.writeText(generatedTemplate);
    setShow(true);
  }

  return (
    <>
      <ToastContainer className="p-3" position="bottom-end">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          bg="info"
          autohide
        >
          <Toast.Body>Template copied to clipboard.</Toast.Body>
        </Toast>
      </ToastContainer>
      <Container>
        <Row>
          <Col>
            <Button variant="primary" onClick={copyToClipboard}>
              Copy to clipboard
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p>
              <strong>Title:</strong> {props.title || "N/A"}
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>{props.errorMessage}</Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Error Details</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <strong>Local Date Time:</strong> {props.localDateTime}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>UTC Date Time:</strong> {props.UTCDateTime}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Message:</strong> {props.message || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Console Log Error:</strong>{" "}
                {props.consoleLogError || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Stack Trace:</strong> {props.stackTrace || "N/A"}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Environment Details</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <strong>Site:</strong> {props.site || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Customer:</strong> {props.customer || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Database:</strong> {props.database || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>Device:</strong> {props.device || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <p>
                  <strong>Browsers:</strong>
                </p>
                <ListGroup as="ul">
                  {props.browsers?.split("\n").map((browser, i) => (
                    <ListGroup.Item as="li" key={i}>
                      {browser}
                    </ListGroup.Item>
                  )) || "N/A"}
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>User type:</strong> {props.userType || "N/A"}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <strong>User ID:</strong> {props.userID || "N/A"}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Preconditions</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.preconditions || "N/A"}</p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Steps to reproduce:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup.Item as="li">
              <ListGroup as="ol" numbered>
                {props.stepsToReproduce?.split("\n").map((step, i) => (
                  <ListGroup.Item as="li" key={i}>
                    {step}
                  </ListGroup.Item>
                )) || "N/A"}
              </ListGroup>
            </ListGroup.Item>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Current behavior</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.currentBehavior || "N/A"}</p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h4>Expected behavior</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.expectedBehavior || "N/A"}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
