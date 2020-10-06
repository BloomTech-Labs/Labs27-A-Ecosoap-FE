import React from 'react';
import { Typography } from 'antd';

function RenderHomePage(props) {
  // const { userInfo, authService } = props;
  const { userInfo } = props;
  const { Title } = Typography;

  return (
    <div>
      <h1>Hi {userInfo.name},</h1>
      <Title>Welcome to Eco Soap Bank</Title>

      {/*
      <div>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </div>
      */}
    </div>
  );
}
export default RenderHomePage;
