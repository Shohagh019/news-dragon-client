import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF />
            Facebook
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
      <div>
        <QZone></QZone>
      </div>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
