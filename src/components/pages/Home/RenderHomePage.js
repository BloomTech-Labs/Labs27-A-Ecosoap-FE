import React from 'react';
import { Typography } from 'antd';

function RenderHomePage(props) {
  const { userInfo } = props;
  const { Title } = Typography;

  return (
    <div>
      <h1>Hi {userInfo.name},</h1>
      <Title>Welcome to Eco Soap Bank</Title>
    </div>
  );
}
export default RenderHomePage;
