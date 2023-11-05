/* eslint-disable no-unused-vars */
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h3>Login with</h3>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle />
        Login With Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>

      <div>
        <h4>Find us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
