import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Dashdata = () => {
  const navigate = useNavigate();
  const admin = useSelector(state => state.users)
  useEffect(()=>{
    if(admin.username !== 'admin'){
      navigate("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>Dashdata</div>
  )
}

export default Dashdata