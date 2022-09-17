import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BedIcon from '../BedIcon/BedIcon';
import "bootstrap/dist/css/bootstrap.min.css";
import "./BedGrid.css"

function BedGrid() {
    return (

    <Row>
      {Array.from({ length: 16 }).map((_, idx) => (
        <Col>
          <BedIcon className='to-be-edited'/>
        </Col>
      ))}
    </Row>
  );
}

export default BedGrid;
