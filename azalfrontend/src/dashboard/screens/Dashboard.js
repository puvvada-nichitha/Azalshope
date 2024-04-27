import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  
  const navigate = useNavigate();
  const admin = useSelector(state => state.users)
  useEffect(()=>{
    if(admin.username !== 'admin'){
      navigate("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="grid-container">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Header OpenSidebar={OpenSidebar} />
    </div>
  )
}

export default Dashboard