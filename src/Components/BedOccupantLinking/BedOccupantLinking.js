import React from "react";
import Occupant from "../Occupant/Occupant";
import Occupants from "../Occupants/Occupants";
import Beds from '../Beds/Beds';
import CardGroup from "react-bootstrap/CardGroup";
import { BEDDATA } from '../../Data/BedData';



function BedOccupantLinking() {
    return (

        <CardGroup>
            <Beds />
            <Occupants />
        </CardGroup>
    )
}

export default BedOccupantLinking;
