import React, { useReducer } from 'react';
import './App.css';
import AddPatientForm from "../AddPatient/AddPatient"
import BedOccupantLinking from '../BedOccupantLinking/BedOccupantLinking';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from '../Dasboard/Dashboard';
import BedIcon from '../BedIcon/BedIcon';
import BedGrid from '../BedGrid/BedGrid';
import Beds
 from '../Beds/Beds';

const bedsInitialState = {
  beds:[]
};

export const BedsContext = React.createContext();

function App() {

  const [state, dispatch] = useReducer(bedsReducer, bedsInitialState);



  return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
          </header>

          <main>
          <Routes>
              <Route path='/' element={<Dashboard />}>
                <Route path='bed-occupant' element={<BedOccupantLinking />} />
                <BedsContext.Provider value={{state, dispatch}}>
                  <Route path='bed-layout' element={<Beds />} />
                </BedsContext.Provider>
                
              </Route>
          </Routes> 
          </main>
      </div>
    </BrowserRouter>

  );
}

function bedsReducer(state, action) {
  return bedsInitialState;

}



export default App;
