import React from "react";
import Occupant from "../Occupant/Occupant";

function Occupants() {

    const getOccupants = () => {
        return [
            {
                id: 1,
                sex: 'male',
                admissionDate: new Date(2022, 8, 14),
                isReadyForStepDown: false,
                needsIsolation: true,
                needsIsolationOnDischarge: true,
                specialty: 'vascular',
                dateReadyForStepDown: null,
                airway: {
                    hold: 'registrar',
                    VLview: 'POGO 10%',
                    DLview: 'grade 4',
                    type: 'ETT'
                },
                anticoagulants: {
                    isOnAnticoag: true,
                    anticoagType: 'heparin infusion'
                },
                delerium: {
                    hasDelerium: true,
                    needsOneToOne: false,
                },
                mentalHealth: {
                    hasMentalHealthConcerns: false,
                    needsRMN: false,
                },
                acuityRating: 2,


            },
        
            {
                id: 2,
                sex: 'female',
                admissionDate: new Date(2022, 8, 1),
                isReadyForStepDown: true,
                needsIsolation: false,
                needsIsolationOnDischarge: false,
                specialty: 'trauma',
                dateReadyForStepDown: new Date(2022, 8, 13),
                airway: {
                    hold: null,
                    VLview: 'POGO 100%',
                    DLview: 'grade 1',
                    type: 'own'
                    },
                anticoagulants: {
                    isOnAnticoag: false,
                    anticoagType: null
                    },
                delerium: {
                    hasDelerium: false,
                    needsOneToOne: false,
                    },
                mentalHealth: {
                    hasMentalHealthConcerns: false,
                    needsRMN: false,
                    },
                acuityRating: 2,

            }
        ];
    };

    const occupants = getOccupants();

    const listOverview = occupants.map((occupant) => 
        <Occupant key={occupant.id} data={occupant} />
    );

    

    return (
        <div>
            {listOverview}
        </div>

    );

}

export default Occupants;