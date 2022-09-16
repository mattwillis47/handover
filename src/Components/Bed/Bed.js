import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import React from 'react';
import '../../../src/Components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';

function Bed(props) {

    const checkBedOccupancy = (status) => {
        if (status) {
            return <Card.Title>Status: <span className='occ'>Occupied</span></Card.Title>;
        }
        return <Card.Title>Status: <span className='available'>Available</span></Card.Title>;
    } 

    const checkBedSideroom = (status) => {
        if (status) {
            return <Card.Text>Sideroom: <Badge pill bg='success'>Yes</Badge></Card.Text>
        }
        return <Card.Text>Sideroom: <Badge pill bg='danger'>No</Badge></Card.Text>
    }

    const checkNegativePressure = (status) => {
        if (status) {
            return <Card.Text>Negative Pressure: <Badge pill bg='success'>Yes</Badge></Card.Text>
        }
        return <Card.Text>Negative Pressure: <Badge pill bg='danger'>No</Badge></Card.Text>
    }

    const checkPositivePressure = (status) => {
        if (status) {
            return <Card.Text>Positive Pressure: <Badge pill bg='success'>Yes</Badge></Card.Text>
        }
        return <Card.Text>Positive Pressure: <Badge pill bg='danger'>No</Badge></Card.Text>
    }
    
    
    return (

        <Card className='card'>
            <Card.Header>
                Bed Number: {props.data.bedNumber}
            </Card.Header>
            <Card.Body>
                <Card.Subtitle>Bed Information</Card.Subtitle>
                <ListGroup>
                    <ListGroup.Item>{checkBedOccupancy(props.data.isOccupied)}</ListGroup.Item>
                    <ListGroup.Item>{checkBedSideroom(props.data.isSideroom)}</ListGroup.Item>
                    <ListGroup.Item>{checkNegativePressure(props.data.isNegativePressure)}</ListGroup.Item>
                    <ListGroup.Item>{checkPositivePressure(props.data.isPositivePressure)}</ListGroup.Item>
                </ListGroup>
            </Card.Body>

        </Card>
    )
}

export default Bed;