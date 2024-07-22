import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Popover } from "antd";

import {
  CarOutlined,
  ContainerOutlined,
  DownOutlined,
  HomeOutlined,
  IdcardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  SolutionOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SideBarNavigation = ({ sidebarCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCarIcon, setActiveCarIcon] = useState(false);


  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isAgreementsActive = location.pathname === "/agreements";
  const isAddVehicleActive = location.pathname === "/add-vehicle";
  const aboutVehiclesSection = sidebarCollapsed ? null : (
    <div onClick={toggleDropdown}>
      <Link>
        <CarOutlined style={{ marginRight: "6%" }} />
        <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
          About Vehicles
        </span>
        {isDropdownOpen ? (
          <UpOutlined
            className={`link-text ${sidebarCollapsed ? "visible" : ""}`}
            style={{ marginLeft: "3px", fontSize: "15px" }}
          />
        ) : (
          <DownOutlined
            className={`link-text ${sidebarCollapsed ? "visible" : ""}`}
            style={{ marginLeft: "3px", fontSize: "15px" }}
          />
        )}
      </Link>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <Link
            to="/book-vehicle"
            className={`nav-link ${
              location.pathname === "/book-vehicle" ? "active" : ""
            }`}
          >
            Book a Vehicle
          </Link>
          <Link
            to="/view-agreements"
            className={`nav-link ${
              location.pathname === "/view-agreements" ? "active" : ""
            }`}
          >
            Available Vehicle
          </Link>
          <Link
            to="/add-vehicle"
            className={`nav-link ${isAddVehicleActive ? "active" : ""}`}
          >
            <span
              className={`link-text ${sidebarCollapsed ? "visible" : ""}`}
            >
              Add Vehicle
            </span>
          </Link>
        </div>
      )}
    </div>
  );
  const handleLinkClick = () => {
    setActiveCarIcon(true);
  };
  const handlePopoverVisibleChange = (visible) => {
    if (!visible) {
      setActiveCarIcon(true);
    }
  };
  useEffect(() => {
    if (
      location.pathname === "/book-vehicle" ||
      location.pathname === "/view-agreements" ||
      location.pathname === "/add-vehicle"
    ) {
      setActiveCarIcon(true);
    } else {
      setActiveCarIcon(false);
    }
  }, [location.pathname]);

  
  const content = (
  <div className="dropdown-content-popover">
    <Link
      to="/book-vehicle"
      className={`nav-link ${
        location.pathname === "/book-vehicle" ? "active" : ""
      }`}
      onClick={handleLinkClick} 
    >
      Book a Vehicle
    </Link>
    <Link
      to="/view-agreements"
      className={`nav-link ${
        location.pathname === "/view-agreements" ? "active" : ""
      }`}
      onClick={handleLinkClick} // Activate the car icon
              >
      Available Vehicle
    </Link>
    <Link
      to="/add-vehicle"
      className={`nav-link ${isAddVehicleActive ? "active" : ""}`}
      onClick={handleLinkClick} // Activate the car icon
      >
      <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
        Add Vehicle
      </span>
    </Link>
  </div>
);
const hoverMeButton = sidebarCollapsed ? (
  <Popover
    content={content}
    placement="right"
    trigger="click"
    onOpenChange={handlePopoverVisibleChange}
  >
    <Link
      className={`nav-link ${activeCarIcon ? "active" : ""}`}
      style={{ cursor: "pointer" }}
    >
      <CarOutlined style={{ marginRight: "6%" }} />
    </Link>
  </Popover>
) : null;
  return (
    <div
      className={`sidebarnavigation-main ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div
        className={`list-style-btn ${sidebarCollapsed ? "collapsed" : ""}`}
        onClick={toggleSidebar}
      >
        {sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="side-bar-navigate">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          <HomeOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Dashboard
          </span>
        </Link>
        <Link
          to="/booking"
          className={`nav-link ${
            location.pathname === "/booking" ? "active" : ""
          }`}
        >
          <ReadOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Bookings
          </span>
        </Link>
        <Link
          to="/cars"
          className={`nav-link ${
            location.pathname === "/cars" ? "active" : ""
          }`}
        >
          <CarOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Cars
          </span>
        </Link>
        <Link
          to="/users"
          className={`nav-link ${
            location.pathname === "/users" ? "active" : ""
          }`}
        >
          <UserOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Users
          </span>
        </Link>
        <Link
          to="/Roles"
          className={`nav-link ${
            location.pathname === "/Roles" ? "active" : ""
          }`}
        >
          <ContainerOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Roles
          </span>
        </Link>
        <Link
          to="/invoices"
          className={`nav-link ${
            location.pathname === "/invoices" ? "active" : ""
          }`}
        >
          <IdcardOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Invoices
          </span>
        </Link>
        <Link
          to="/agreements"
          className={`nav-link ${isAgreementsActive ? "active" : ""}`}
        >
          <SolutionOutlined style={{ marginRight: "6%" }} />
          <span className={`link-text ${sidebarCollapsed ? "visible" : ""}`}>
            Agreements
          </span>
        </Link>
        {aboutVehiclesSection}
        {hoverMeButton}
    </div>
  
      </div>
  );
};

export default SideBarNavigation;
