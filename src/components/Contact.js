import React from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
const  Contact = (props) => {
  return (
    <div id="contact"className="bg-danger clearfix">
    <Fade left>
    <h1 className="display-3 text-white">Contacto</h1>
    </Fade>
    <Row className="mr-0">
    <Col  xs={{ size: 11, offset: 1 }} md="6" xl={{ size: 3, offset: 1 }} className="mt-4">
    <h5 className="font-nice text-white">Sígueme</h5>
    <hr className="my-2" />
    <p><a className="text-white" href="https://www.linkedin.com/in/francisvelueta/"><i className="fab fa-linkedin"></i> LinkedIn</a></p>
    <p><a className="text-white" href="https://github.com/francisvelueta"><i className="fab fa-github"></i> Github</a></p>
    <p><a className="text-white" href="https://twitter.com/Alterna87"><i className="fab fa-twitter"></i> Twitter</a></p>
    </Col>
    <Col xs={{ size: 11, offset: 1 }} md="4" xl="3" className="mt-4">
    <h5 className="font-nice text-white">Contactame</h5>
    <hr className="my-2" />
    <p className="text-white"><i className="fas fa-mobile-alt"></i> +55 76032024</p>
    <p><a className="text-white" href="mailto: fvelueta@outlook.com"><i className="fas fa-envelope"></i> fvelueta@outlook.com</a></p>
    </Col>
    <Col xs={{ size: 11, offset: 1 }} md="6" xl="3" className="mt-4">
    <h5 className="font-nice text-white">Ubicación</h5>
    <hr className="my-2" />
    <p className="text-white"><i className="fas fa-map-marker-alt"></i> Azcapotzalco, CDMX, México</p>
    </Col>
    </Row>
    <Row className="mr-0">
    <Col  xs={{size: 7, offset: 3}} md={{size: 6, offset: 5}} xl={{size: 6, offset: 5}}>
      <small className="text-white"><i className="fas fa-copyright"></i> Derechos Reservados 2019</small>
      </Col>
    </Row>
    </div>
  );
};

export default Contact;
