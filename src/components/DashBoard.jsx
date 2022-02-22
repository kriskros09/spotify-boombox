import React from 'react';


import { getUser, removeUserSession } from '../Utils/Common';

import YoutubeSearch from './YoutubeSearch';

// import MenuAppBar from './MenuAppBar';

const Dashboard = (props) => {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  };

  return (
    <div className="dashboard-container">
      Welcome User!
      <input type="button" value="Logout" onClick={handleLogout} />
      <YoutubeSearch />
    </div>
  );
};

export default Dashboard;
