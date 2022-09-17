import React from 'react';
import { Card } from 'react-bootstrap';

function BedIcon() {
    return (
        <Card>
            <Card.Header>Bed #</Card.Header>
            <Card.Body>
                <Card.Title>This is a bed</Card.Title>
                <Card.Text>Blah blah blah something about the bed and details...</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BedIcon;