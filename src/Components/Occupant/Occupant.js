import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '../Rating/Rating';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from "react-bootstrap/Badge"
import calculateDays from '../../Functions/DateFunctions';




const Occupant = (props) => {

    const  [rating, setRating] = useState(0);

    return (
        <>
            <Card className='card'>
                <Card.Header>
                    Patient ID: {props.data.id} Specialty: {props.data.specialty}
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle>Overview</Card.Subtitle>
                    <ListGroup>
                        <ListGroup.Item><Card.Text>Admission Date: {props.data.admissionDate.toDateString()}</Card.Text></ListGroup.Item>
                        <ListGroup.Item>Suitable for Critical Care Discharge:
                            {props.data.isReadyForStepDown ? (
                                <>
                                    <Badge pill bg='success'> Yes </Badge>
                                    <Card.Text>Declared for discharge: {props.data.dateReadyForStepDown.toDateString()} ({calculateDays(props.data.dateReadyForStepDown)} days)</Card.Text>
                                </>
                            ) : (
                                <>
                                    <Badge pill bg='danger'> No </Badge><Card.Text>Duration of Admission: {calculateDays(props.data.admissionDate)} days</Card.Text>
                                </>
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>Anticoagulants:
                            {props.data.anticoagulants['isOnAnticoag'] ? (
                                <>
                                    <Badge pill bg='danger'>{props.data.anticoagulants['anticoagType']}</Badge>
                                    
                                </>
                            ) : (
                                <Badge pill bg='success'>None</Badge>
                            )}
                        </ListGroup.Item>    
                        <ListGroup.Item>
                            <Rating />
                        </ListGroup.Item>


                        
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
        

    );

}


export default Occupant;
