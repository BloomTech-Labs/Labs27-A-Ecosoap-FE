import React from 'react';
import { Typography, Button } from 'antd';

const { Title } = Typography;

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  return (
    <div>
      <h1>Hi {userInfo.name},</h1>
      <Title>Welcome to Eco Soap Bank</Title>
      <Button onClick={() => authService.logout()}>Logout</Button>
    </div>
  );
}
export default RenderHomePage;
