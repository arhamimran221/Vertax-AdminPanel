import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons'; // Import your desired icons

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((path) => path);

  return (
    <div className="breadcrumbs">
      <Link to="/" className='home-breadcrumb'>
      DASHBOARD
      </Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={routeTo}>
            <RightOutlined style={{ margin: '0 5px' ,fontSize:'14.4px'}} />
            {path.toUpperCase()}
          </span>
        ) : (
          <React.Fragment key={routeTo}>
            <RightOutlined style={{ margin: '0 5px' ,fontSize:'14.4px'}} />
            <Link to={routeTo}>{path.toUpperCase()}</Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
