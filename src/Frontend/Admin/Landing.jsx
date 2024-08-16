import React from 'react';
import { Card, Col, Row } from 'antd';

const Landing = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="User" bordered={false}>
        Total Users:
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Spots" bordered={false}>
        Total Spots:
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Total Bookings" bordered={false}>
        Total Bookings :
      </Card>
    </Col>
  </Row>
);
export default Landing;