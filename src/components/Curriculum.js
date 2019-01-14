import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import CurriculumV from './../assets/CVFrancis.pdf' ;

const  Curriculum = (props) => {
  return (
    <div id="curriculum" className="aboutme-content">
    <h1 className="display-3">Curriculum</h1>

    <Row className="mr-0">
    <Col  xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} xl={{ size: 3, offset: 4 }} className="font-nice margin-lef">
    <Button download="CVFrancis2019.pdf" href={ CurriculumV } color="danger" size="lg" block> Descargar  PDF</Button>
    </Col>
    </Row>
    </div>
  );
};

export default Curriculum;
