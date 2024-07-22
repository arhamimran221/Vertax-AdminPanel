import React from 'react';
// import SideBarNavigation from './SideBarNavigation';
import SideBarNavigation from '../MainPage/SideBarNavigation';
import "../MainPage/MainpageLayout.css"
import MainPageHeader from '../MainPage/MainPageHeader';
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MainPageHeader/>
      <SideBarNavigation />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
