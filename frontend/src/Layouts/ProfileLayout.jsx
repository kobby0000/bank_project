import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "../components/Index";

function ProfileLayout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default ProfileLayout