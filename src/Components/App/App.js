import React, { useState } from 'react';
import './App.css';
import Bed from '../Bed/Bed';
import { BEDDATA } from '../../Data/BedData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Occupants from '../Occupants/Occupants';
import AddPatientForm from "../AddPatient/AddPatient"
import BedOccupantLinking from '../BedOccupantLinking/BedOccupantLinking';



function App() {

  const [bedData, setBedData] = useState(BEDDATA);

  return (

    <div className="App">
        <header className="App-header">
        </header>

        <main>
            <BedOccupantLinking />
            <AddPatientForm />
        </main>
    </div>


  );
}

export default App;
