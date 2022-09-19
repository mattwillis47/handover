import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import "./BedGrid.css"
import Bed from '../Bed/Bed';
import Beds from '../Beds/Beds';


function BedGrid() {

  const beds = Beds();

  


  return (
  <>
      <Row>
          <Col sm={2}>
            <Bed key='1' />
          </Col>
          <Col sm={2}>
            
          </Col>
          <Col sm={2}>

          </Col>
          <Col sm={2}>
       
          </Col>
          <Col sm={2}>

          </Col>
          <Col sm={2}>

          </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={8}>
        </Col>
        <Col sm={2}>

        </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={8}>
        </Col>
        <Col sm={2}>

        </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={8}>
        </Col>
        <Col sm={2}>

        </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={8}>
        </Col>
        <Col sm={2}>

        </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={8}>
        </Col>
        <Col sm={2}>

        </Col>
      </Row>
      <Row>
        <Col sm={2}>

        </Col>
        <Col sm={2}>

        </Col>
        <Col sm={4}>

        </Col>
        <Col sm={2}>

        </Col>
        <Col sm={2}>

        </Col>
      </Row>

    </>
  );
}

export default BedGrid;
