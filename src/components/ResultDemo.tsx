import React from 'react';
import { Button, Result } from 'antd';

const ResultDemo: React.FC = () => (
  <Result
    status="404"
    title="This is just a demonstration"
    subTitle="I really don't have time to schedule, I'll just do it casually!"
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default ResultDemo;