// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/shared/leftNav/LeftNav";
import RightNav from "../pages/shared/rightNav/RightNav";
import { Outlet} from "react-router-dom";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        
        <Row>
          <Col lg = {3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg = {6}>
          <Outlet />
          </Col>
          <Col lg = {3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
