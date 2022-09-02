import './index.scss'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Anuka Zan | Copyright © {year}  </h3>
        </Col>
        <Col md="4" className="footer-body">
        <div className='footer-icons'>
            <div className='social-icons'>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/anuka-zan/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </div>
            <div className='social-icons'>
                <a target="_blank" rel="noreferrer" href='https://github.com/AnukaZan'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;