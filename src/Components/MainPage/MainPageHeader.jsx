import React, { useState } from "react";
import dblogo from "../../Assets/logo.png";
import {
  MenuOutlined,
  UserOutlined,
  PoweroffOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./MainpageLayout.css";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const MainPageHeader =({ sidebarCollapsed, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`db-header-main ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className={`db-logo ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <img src={dblogo} alt="" onClick={() => navigate("/")} />
      </div>
      <div className="db-popup-menu">
        <div className="list-style-view">
          {/* <button className="list-style-btn">
            <MenuOutlined />
          </button> */}
          <button className={`list-site-btn ${sidebarCollapsed ? 'collapsed' : ''}`}>View Site</button>
        </div>
        <div className="pop-up-menu">
          <button onClick={showModal} className="list-setting-btn">
            <SettingOutlined />
          </button>
          <Modal
            mask={false}
            maskstyle={{ backgroundcolor: "red" }}
            style={{ top: 80, left: 710}}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            closable={false}
          >
            <div className="modal-btns">
              <div className="Welcome-btn">
                <button>Welcome</button>
              </div>
              <div className="Password-btn">
                <button>
                  <UserOutlined />
                  Change Password
                </button>
              </div>
            <div className="Logout-btn">
            <button >
                <PoweroffOutlined />
                Logout
              </button>
            </div>
              
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MainPageHeader;
