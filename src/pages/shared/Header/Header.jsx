/* eslint-disable no-unused-vars */

import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { AuthContext } from "../../../providers/Authprovider";


const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
          <p>{moment().format("dddd MMM D, YYYY ")}</p>
        </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

     
    </Container>
  );
};

export default Header;
