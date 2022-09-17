import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Outlet} from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <NavBar />
            <section>
                <Outlet />

            </section>
            
        </>
        

    )
}

export default Dashboard;