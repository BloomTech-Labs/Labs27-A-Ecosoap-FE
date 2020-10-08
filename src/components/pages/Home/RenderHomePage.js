import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function RenderHomePage(props) {
  const { userInfo } = props;

  return (
    <div>
      <h1>Hi {userInfo.name},</h1>
      <Title>Welcome to Eco Soap Bank</Title>
    </div>
  );
}
export default RenderHomePage;
