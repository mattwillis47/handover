import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPatientForm from "../AddPatient/AddPatient"
import BedOccupantLinking from '../BedOccupantLinking/BedOccupantLinking';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from '../Dasboard/Dashboard';
import BedIcon from '../BedIcon/BedIcon';
import BedGrid from '../BedGrid/BedGrid';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
          </header>

          <main>
          <Routes>
              <Route path='/' element={<Dashboard />}>
                <Route path='bed-occupant' element={<BedOccupantLinking />} />
                <Route path='bed-layout' element={<BedGrid />} />
              </Route>
          </Routes> 
          </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
