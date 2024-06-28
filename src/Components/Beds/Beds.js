import React, { useContext, useEffect } from "react";
import { BedsContext } from "../App/App";
import Bed from "../Bed/Bed";
import useAPI from "../useAPI/useAPI";


function Beds() {
    const {state, dispatch} = useContext(BedsContext)

    const endpoint = "http:localhost:3000/bedsStMarys";

    const savedBeds = useAPI(endpoint);

    useEffect(() => {
        dispatch({type: "get", payload: savedBeds})
    }, [savedBeds]);

    const bedComps = savedBeds.map((bed) => 
        <Bed key={bed.bedNumber} data={bed} />    
    );

    return (
        <div>
            {bedComps}
        </div>
    );
}

export default Beds;