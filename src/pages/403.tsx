import React from 'react';
import { Button, Result } from 'antd';

const NotAccessPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button onClick={()=>{history.back()}} type="primary">Back Home</Button>}
  />
);

export default NotAccessPage;