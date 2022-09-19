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
                isOccupied: false,
            },
            {
                bedNumber: 3,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 4,
                isSideroom: false,
                isNegativePressure: false,
                isPostivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 5,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 6,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 7,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 8,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 9,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 10,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 11,
                isSideroom: true,
                isNegativePressure: true,
                isPostivePressure: true,
                bedDescription: 'Single side room',
                isOccupied: false,
            },
            {
                bedNumber: 12,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 13,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 14,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 15,
                isSideroom: false,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Bay bed - 1 of 4',
                isOccupied: false,
            },
            {
                bedNumber: 16,
                isSideroom: true,
                isNegativePressure: false,
                isPositivePressure: false,
                bedDescription: 'Single sideroom',
                isOccupied: false,
            },
            
        ];
    };

    const beds = getBeds();

    const bedOverview = beds.map((bed) =>
        <Bed key={bed.bedNumber} data={bed} />
    );

    return (
        <>
            {bedOverview}
        </>
    );
}

export default Beds;