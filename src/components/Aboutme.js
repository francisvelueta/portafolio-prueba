import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';
import perfil from "./../assets/perfil.jpeg";

const Aboutme = (props) => {
  return (
    <div id="aboutme">
      <Jumbotron className="aboutme-content">
        <h1 className="display-3">¡Hola soy Francis!</h1>
        <Row>
        <Col xs={{ size: '4',  }}><img className="mt-4 img-avatar" width="30%" src= {perfil} alt="foto perfil" /></Col>
        <Col xs={{ size: '6', }}><p className="mt-4 lead display-5">Soy Frontend Developer, Geek, apasionada por la tecnología, videojuegos, series y películas. Cada día me gusta aprender algo nuevo, soy curiosa y aspiro ser una Full Stack</p>
        <hr className="my-2" />
        <p>Tengo conocimientos técnicos en React JS, Node JS, Javascript, Firebase, MongoDB, CSS, HTML 5 y Swift 4, mis habilidades suaves son Metodología agíl, trabajo en equipo y empatía. Tambíen ocupo herramientas como Git, Github, Trello, Bootstrap, Material-UI, Materialize y por supuesto Linux.</p>
      </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Aboutme;