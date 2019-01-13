import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import CurriculumV from './../assets/CVFrancis.pdf' ;

const  Curriculum = (props) => {
  return (
    <div id="curriculum" className="aboutme-content">
    <h1 className="display-3">Curriculum</h1>
    
    <Row className="mr-0">
    <Col  sm="12" md={{ size: 6, offset: 3 }} xl={{ size: 5, offset: 5 }} className="margin-lef">
    <Button download="CVFrancis2019.pdf" href={ CurriculumV } color="danger">Descargar CV</Button>
    </Col>
    </Row>
    </div>
  );
};

export default Curriculum;
