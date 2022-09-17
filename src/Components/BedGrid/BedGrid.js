import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BedIcon from '../BedIcon/BedIcon';
import "bootstrap/dist/css/bootstrap.min.css";
import "./BedGrid.css"

function BedGrid() {
    return (
  <>
      <Row>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
          <Col>
            <BedIcon className='to-be-edited'/>
          </Col>
      </Row>
      <Row>
      <Col>
        <BedIcon className='to-be-edited'/>
        </Col>
        <Col>
          <div>No Bed</div> 
        </Col>
        <Col>
          <BedIcon className='to-be-edited'/>
        </Col>
        <Col>
          <BedIcon className='to-be-edited'/>
        </Col>
        <Col>
          <BedIcon className='to-be-edited'/>
        </Col>
        <Col>
          <BedIcon className='to-be-edited'/>
        </Col>
      </Row>
    </>
  );
}

export default BedGrid;
