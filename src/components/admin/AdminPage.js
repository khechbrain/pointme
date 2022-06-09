import React from 'react';
import SideBarWeb from '../sidebar/SideBarWeb';
import SideBarMob from '../sidebar/SideBarMob';
import { SideBarDataAdmin } from '../../data/SideBarDataAdmin';
import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from './DashboardAdmin';
import ListRetards from './ListRetards';
import ListAbsences from './ListAbsences';

const AdminPage = () => {
    return (
        <div>
        <h1 className='bg-light shadow'>Navbar</h1>
            <div className="row p-0 m-0">
                <div className="col-2 m-0 p-0">
                    <SideBarWeb sideBarData={SideBarDataAdmin}/>
                    <SideBarMob sideBarData={SideBarDataAdmin}/>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path='/' element={<DashboardAdmin/>} />
                        <Route path='/retards' element={<ListRetards/>} />
                        <Route path='/absences' element={<ListAbsences/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;