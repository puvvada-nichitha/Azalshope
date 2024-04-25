import React from "react";
import { BsJustify } from "react-icons/bs";

const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
    </header>
  )
}

export default Header