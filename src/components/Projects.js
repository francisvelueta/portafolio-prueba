import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col} from 'reactstrap';

const Projects = (props) => {
  return (
    <div id="projects" className="aboutme-content">
      <h1 className="display-3">Proyectos</h1>
    <Row className="mr-0 ml-1">
    <Col sm="12" md="6"  xl="3" className="mt-2 mb-2">
    <div className="thecard">
      <Card className="thecard__side thecard__side--front shadow " style={{ Height: '320px'}} >
     <CardImg top width="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CrHaiDvhoVRpaWJu6PKHfm7fzNxMKfiXnuI7yB8r2iF9X4iG" alt="Card image cap" />
     <CardBody>
       <CardTitle className="font-weight-bold">CloseMap</CardTitle>
       <CardText className="font-s">CloseMap es una aplicación Web donde puedes encontrar restaurantes cerca de ti, filtrar restaurantes específicos con un ranking mayor a 3 puntos, los restaurantes abiertos y los más cercanos.</CardText>
     </CardBody>
   </Card>
   <div className=" thecard__side thecard__side--back">
      <Card className="shadow height-card">
      <CardBody >
      <CardTitle className="mb-4 font-weight-bold">Herramientas</CardTitle>
      <CardText ><i className="fas fa-certificate"></i> Javascript</CardText>
      <CardText ><i className="fas fa-certificate"></i> HTML5</CardText>
      <CardText ><i className="fas fa-certificate"></i> Materialize</CardText>
      <CardText ><i className="fas fa-certificate"></i> Google Api's</CardText>
      <CardText className="mb-4"><i className="fas fa-certificate"></i> Responsive Web</CardText>
      <Button className=" float-left" color="danger" size="sm">Demo</Button>{' '}
      <Button  className="float-right" size="sm">Repositorio</Button>
     </CardBody>
   </Card>
      </div>
    </div>
       </Col>

  <Col sm="12" md="6"  xl="3" className="mt-2 mb-2">
    <div className="thecard">
      <div className="thecard__side thecard__side--front">
      <Card className="thecard__side thecard__side--front shadow" >
     <CardImg top width="60%" height="60%" src="https://firebase.google.com/images/social.png" alt="Card image cap" />
     <CardBody>
       <CardTitle className="font-weight-bold">Registro de visitantes</CardTitle>
       <CardText className="font-s">Es una aplicación Web que funciona para llevar el registro de visitantes de un WeWorking, el diseño es Mobile First(Exclusivo para tablets de cualquier modelo), envia una notificación via correo al visitado.</CardText>
     </CardBody>
   </Card>
      </div>
      <div className="thecard__side thecard__side--back">
      <Card className="shadow height-card" >
      <CardBody >
        <CardTitle className="mb-4 font-weight-bold">Herramientas</CardTitle>
       <CardText><i className="fas fa-certificate"></i> Javascript</CardText>
       <CardText><i className="fas fa-certificate"></i> HTML5</CardText>
       <CardText><i className="fas fa-certificate"></i> Materialize</CardText>
       <CardText><i className="fas fa-certificate"></i> Google Api's</CardText>
       <CardText className=""><i className="fas fa-certificate"></i> Responsive Web</CardText>
         <Button className=" float-left" color="danger" size="sm">Demo</Button>{' '}
         <Button  className="float-right" size="sm">Repositorio</Button>
     </CardBody>
   </Card>
      </div>
    </div>
  </Col>
  <Col sm="12" md="6" xl="3" className="mt-2 mb-2">
    <div className="thecard">
      <div className="thecard__side thecard__side--front">
      <Card className="thecard__side thecard__side--front shadow" >
     <CardImg top width="100%" src="https://cdn-images-1.medium.com/max/2000/1*_DOHv30w-0eI-Ysz5U47Yg.png" alt="Card image cap" />
     <CardBody>
       <CardTitle className="font-weight-bold">Social Network</CardTitle>
       <CardText className="font-s">  Mexican Food Lovers es una red social donde puedes compartir tus recetas favoritas, así como aprender tus recetas mexicanas favoritas, su diseño es mobile firts.</CardText>
     </CardBody>
   </Card>
      </div>
      <div className="thecard__side thecard__side--back">
      <Card className="shadow height-card" >
      <CardBody >
        <CardTitle className="mb-3 font-weight-bold">Herramientas</CardTitle>
       <CardText><i className="fas fa-certificate"></i> React JS</CardText>
       <CardText><i className="fas fa-certificate"></i> Redux</CardText>
       <CardText><i className="fas fa-certificate"></i> Materialize</CardText>
       <CardText><i className="fas fa-certificate"></i> Firebase</CardText>
       <CardText className=""><i className="fas fa-certificate"></i> Responsive Web</CardText>
         <Button className=" float-left" color="danger" size="sm">Demo</Button>{' '}
         <Button  className="float-right" size="sm">Repositorio</Button>
     </CardBody>
   </Card>
      </div>
    </div>
  </Col>
  <Col sm="12" md="6"  xl="3" className="mt-2 mb-2">
    <div className="thecard">
      <div className="thecard__side thecard__side--front">
      <Card className="thecard__side thecard__side--front shadow">
     <CardImg top width="60%" src="https://cdn-images-1.medium.com/max/1109/1*TWVs8hNCI7B7t2Y4tA-u1A.png" alt="Card image cap" />
     <CardBody>
       <CardTitle className="font-weight-bold">Data Dashboard</CardTitle>
       <CardText className="font-s">Es una página donde se lleva el monitoreo de avances de las alumnas de Laboratoria de todas las sedes, incluye gráficas de su desempeño, esta información es tomada desde un archivo JSON.</CardText>
     </CardBody>
   </Card>
      </div>
      <div className="thecard__side thecard__side--back">
      <Card className="shadow height-card" >
      <CardBody >
      <CardTitle className="mb-3 font-weight-bold">Herramientas</CardTitle>
       <CardText><i className="fas fa-certificate"></i> Javascript</CardText>
       <CardText><i className="fas fa-certificate"></i> HTML5</CardText>
       <CardText><i className="fas fa-certificate"></i> Bootstrap</CardText>
       <CardText><i className="fas fa-certificate"></i> JSON</CardText>
       <CardText><i className="fas fa-certificate"></i> Google Charts</CardText>
         <Button className=" float-left" color="danger" size="sm">Demo</Button>{' '}
         <Button  className="float-right" size="sm">Repositorio</Button>
     </CardBody>
   </Card>
      </div>
    </div>
  </Col>
</Row>

</div>
  );
};

export default Projects;
