import React from "react";
import Admin from './AdminPannel';
import { Outlet } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <div className="h-16 border flex flex-row justify-between items-center">
        <div className="w-full flex flex-row justify-center">
          <h1 style={{fontFamily:"impact",fontSize:50,color:"#FF6200"}}>JUNGLE</h1>
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
