import { useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import Template from "./Template";
import moment from "moment";

import "./styles.css";

export default function App() {
  const localDateTime = moment().format("MM/DD - hh:mm");
  const UTCDateTime = moment().utc().format("MM/DD - hh:mm");

  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [consoleLogError, setConsoleLogError] = useState("");
  const [stackTrace, setStackTrace] = useState("");
  const [site, setSite] = useState("");
  const [customer, setCustomer] = useState("");
  const [database, setDatabase] = useState("");
  const [device, setDevice] = useState("");
  const [os, setOs] = useState("");
  const [browsers, setBrowsers] = useState("");
  const [userType, setUserType] = useState("");
  const [userID, setUserID] = useState("");
  const [preconditions, setPreconditions] = useState("");
  const [stepsToReproduce, setStepsToReproduce] = useState("");
  const [currentBehavior, setCurrentBehavior] = useState("");
  const [expectedBehavior, setExpectedBehavior] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col>
                <h1>VV Bug Template Generator</h1>
              </Col>
            </Row>
            <Form>
              {/* General details --> */}
              <Row>
                <Col>
                  <h3>General details</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- General details */}

              {/* Error details --> */}
              <Row>
                <Col>
                  <h3>Error details</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="errorMessage" className="mb-3">
                    <Form.Label>Error Message</Form.Label>
                    <Form.Control
                      type="text"
                      name="errorMessage"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={errorMessage}
                      onChange={(e) => {
                        setErrorMessage(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="message" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      name="message"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="consoleLogError" className="mb-3">
                    <Form.Label>Console Log Error</Form.Label>
                    <Form.Control
                      type="text"
                      name="consoleLogError"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={consoleLogError}
                      onChange={(e) => {
                        setConsoleLogError(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="stackTrace" className="mb-3">
                    <Form.Label>Stack Trace</Form.Label>
                    <Form.Control
                      type="text"
                      name="stackTrace"
                      value={stackTrace}
                      onChange={(e) => {
                        setStackTrace(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Error details */}

              {/* Environment details --> */}
              <Row>
                <h3>Environment Details</h3>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="site" className="mb-3">
                    <Form.Label>Site</Form.Label>
                    <Form.Control
                      type="text"
                      name="site"
                      value={site}
                      onChange={(e) => {
                        setSite(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="customer" className="mb-3">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control
                      type="text"
                      name="customer"
                      value={customer}
                      onChange={(e) => {
                        setCustomer(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="database" className="mb-3">
                    <Form.Label>Database</Form.Label>
                    <Form.Control
                      type="text"
                      name="database"
                      value={database}
                      onChange={(e) => {
                        setDatabase(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="device" className="mb-3">
                    <Form.Label>Device</Form.Label>
                    <Form.Control
                      type="text"
                      name="device"
                      value={device}
                      onChange={(e) => {
                        setDevice(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="os" className="mb-3">
                    <Form.Label>Operative System</Form.Label>
                    <Form.Control
                      type="text"
                      name="os"
                      value={os}
                      onChange={(e) => {
                        setOs(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="browsers" className="mb-3">
                    <Form.Label>Browsers</Form.Label>
                    <Form.Control
                      type="text"
                      name="browsers"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={browsers}
                      onChange={(e) => {
                        setBrowsers(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="userType" className="mb-3">
                    <Form.Label>User Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="userType"
                      value={userType}
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="userID" className="mb-3">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="userID"
                      value={userID}
                      onChange={(e) => {
                        setUserID(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Environment details */}

              {/* Preconditions --> */}
              <Row>
                <Col>
                  <h3>Preconditions</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="preconditions" className="mb-3">
                    <Form.Control
                      type="text"
                      name="preconditions"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={preconditions}
                      onChange={(e) => {
                        setPreconditions(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Preconditions */}

              {/* Steps to reproduce --> */}
              <Row>
                <Col>
                  <h3>Steps to reproduce</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="stepsToReproduce" className="mb-3">
                    <Form.Control
                      type="text"
                      name="stepsToReproduce"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={stepsToReproduce}
                      onChange={(e) => {
                        setStepsToReproduce(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Steps to reproduce */}

              {/* Current behavior --> */}
              <Row>
                <Col>
                  <h3>Current behavior</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="currentBehavior" className="mb-3">
                    <Form.Control
                      type="text"
                      name="currentBehavior"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={currentBehavior}
                      onChange={(e) => {
                        setCurrentBehavior(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Current behavior */}

              {/* Expected behavior --> */}
              <Row>
                <Col>
                  <h3>Expected behavior</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="expectedBehavior" className="mb-3">
                    <Form.Control
                      type="text"
                      name="expectedBehavior"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={expectedBehavior}
                      onChange={(e) => {
                        setExpectedBehavior(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* <-- Expected behavior */}
            </Form>
          </Container>
        </Col>
        <Col>
          <Template
            title={title}
            errorMessage={errorMessage}
            message={message}
            consoleLogError={consoleLogError}
            stackTrace={stackTrace}
            site={site}
            customer={customer}
            database={database}
            device={device}
            os={os}
            browsers={browsers}
            userType={userType}
            userID={userID}
            preconditions={preconditions}
            stepsToReproduce={stepsToReproduce}
            currentBehavior={currentBehavior}
            expectedBehavior={expectedBehavior}
            localDateTime={localDateTime}
            UTCDateTime={UTCDateTime}
          />
        </Col>
      </Row>
    </Container>
  );
}
