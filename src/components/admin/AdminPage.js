import React from 'react';
import SideBarWeb from '../sidebar/SideBarWeb';
import SideBarMob from '../sidebar/SideBarMob';
import { SideBarDataAdmin } from '../../data/SideBarDataAdmin';
import { Route, Routes } from 'react-router-dom';
import DashboardAdmin from './DashboardAdmin';
import ListRetards from './ListRetards';
import ListAbsences from './ListAbsences';
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
import userStatus from "../../assets/images/Ellipse_mercedes.png";
import "./adminPage.css";

const AdminPage = () => {
    return (
        <div>
        <h1 className='shadow d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
            <div className="logo align-self-center ms-md-5">
                <img src={logo} alt="Point me Logo" />
            </div>
            <div className="flag d-none d-md-block">
                <img src={flag} alt="Point me flag" />
            </div>
            <div className="userStatus d-none d-md-flex me-md-5">
                <div className="ellipse-mercedes-img">
                    <img src={userStatus} alt="Point me user status" />
                </div>
                <div className="status">
                    <p>Ndiaga SALL</p>
                    <p>Admin</p>
                </div>
            </div>
        </h1>
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