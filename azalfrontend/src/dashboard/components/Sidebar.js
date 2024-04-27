import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiChatsFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import '../../App.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../redux/userslice/userslice";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(logoutRedux())
  }

  const user = useSelector(state => state.users)
  return (
    <aside
    id="sidebar"
    className={openSidebarToggle ? "sidebar-responsive" : ""}
    style={{width:'fit-content'}}
  >
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <FaUserAlt className="icon_header" />
        <span>{user.username}</span>
        <h6>{user.email}</h6>
      </div>
      <span className="icon close_icon" onClick={OpenSidebar}>
        X
      </span>
    </div>

    <ul className="sidebar-list">
      <li className="sidebar-list-item">

        <Link to="/dashboard">
          <BsGrid1X2Fill className="icon" /> Dashboard
        </Link>

      </li>
      <li className="sidebar-list-item">
        <Link to="/users">
          <CiUser className="icon" /> User
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="#">
          <BsCart4 className="icon" /> Order
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/products">
          <FaRegListAlt className="icon" /> Products
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="#">
          <BsGraphUpArrow className="icon" /> Sales Report
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="#">
          <PiChatsFill className="icon" /> Messages
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="#">
          <IoIosSettings className="icon" /> Setting
        </Link>
      </li>
      <li className="sidebar-list-item">
        <Link to="/login" onClick={logout}>
          <PiSignOutBold className="icon" /> Log Out
        </Link>
      </li>
    </ul>
  </aside>
  )
}

export default Sidebar