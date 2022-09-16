import React from "react";
import Bed from "../Bed/Bed";

function Beds() {
    const getBeds = () => {
        return [
            {
                bedNumber: 1,
                isSideroom: true,
                isNegativePressure: true,
                isPositivePressure: true,
                bedDescription: 'Isolated Single Side Room',
                isOccupied: false,
            },
            
            {
                bedNumber: 2,
                isSideroom: false,
                isNegativePressure: false,
                isPostivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: true,
            }
        ];
    };

    const beds = getBeds();

    const bedOverview = beds.map((bed) =>
        <Bed key={bed.bedNumber} data={bed} />
    );

    return (
        <div>
            {bedOverview}
        </div>
    );
}

export default Beds;