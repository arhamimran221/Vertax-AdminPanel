import React,{useState} from 'react';
import "./MainpageLayout.css";
import MainPageHeader from "./MainPageHeader";
import SideBarNavigation from "./SideBarNavigation";
import Breadcrumbs from '../Breadcrumbs';
import { Link } from 'react-router-dom';

const MainpageLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  return (
    <div className={`db-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="db-header">
        <MainPageHeader sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar}/>
      </div>
      <div className="db-content-body">
      <div className="db-bread-crumbs"> <Breadcrumbs/></div>

        <div className="db-navigation">
          <SideBarNavigation sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        </div>
        <div className={`db-navigation-body ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="db-body-main">
            <div className="db-content">{children}</div>
          </div>
        </div>
        <div className="db-copyright-navigation">
          <div className="copyright-sec">© 2019. All rights reserved. Made with love by <span><Link to={"/"}>DrCodeX Technologies</Link></span> </div>
        </div>
      </div>
    </div>
  );
};

export default MainpageLayout;
