import React from "react";
import NavApp from "../nav-app/NavApp";
import Footer from "../footer/Footer";
import BackToTop from "../Back-to-top/BackTop";
import "./Events.css";
import { Container, Row, Col } from "react-bootstrap";
import PageviewIcon from "@material-ui/icons/Pageview";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "./Card";
const Evenements = (props) => {
  return (
    <div style={{ backgroundColor: "rgb(241, 240, 240)", marginTop: -19 }}>
      <NavApp navEvent={props.location.pathname} />

      <Container fluid={true} className="containerSerch">
        <input type="text" id="search-input" placeholder="Search..." />

        <PageviewIcon
          className="search-icon"
          onClick={() => console.log("object")}
        />
      </Container>
      <Container className="myCont" fluid={true}>
        <Row>
          <Col xs={2}>
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical contained primary button group"
              variant="contained"
              className="containerBts"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Col>
          <Col className="Cardscss">
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Evenements;
