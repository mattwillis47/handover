import React from "react";
import Occupants from "../Occupants/Occupants";
import Beds from '../Beds/Beds';
import CardGroup from "react-bootstrap/CardGroup";
import '../../../src/Components/Card.css';
import Container from "react-bootstrap/Container";



function BedOccupantLinking() {
    return (
        <Container>
            <CardGroup>
                <Beds />
                <Occupants />
            </CardGroup>
        </Container>
    )
}

export default BedOccupantLinking;
