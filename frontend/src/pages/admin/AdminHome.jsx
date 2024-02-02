import React from "react";
import Logo from '../../Assets/logo.png';
import Admin from './AdminPannel';
import { Outlet } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <div className="h-16 border flex flex-row justify-between items-center">
        <div className="w-full flex flex-row justify-center">
          <img src={Logo} alt="logo" className="w-48" />
        </div>
        <h1 className="text-xs">Welcome Admin</h1>
      </div>
        <div className="flex flex-row">
            <Admin/>
            <Outlet/>
        </div>
    </div>
  );
};

export default AdminHome;
