import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Col, Row,Avatar,theme } from 'antd';
import { Container, hexToRgbaString, useConfigContext } from 'warden-layout';
const { Meta } = Card;
const {useToken} = theme;

const actions: React.ReactNode[] = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
  ];

  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };



const App: React.FC = () => {
    const {config} = useConfigContext()
    const {token} = useToken()
    const bgColor = config.headTransparent || config.leftTransparent ? hexToRgbaString(token.colorBgContainer,0.6) : token.colorBgContainer
    const cardCls = config.backgroundBlur ? "warden-layout-blur" : "" 
    return(
    <Container mode="box" style={{padding:"0px"}}>
        <Row gutter={[16,24]} className={cardCls} >
            <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}>
                <Card style={{background:bgColor}} title="Card title - 1" bordered={false}>
                    No border with shadow effect<br />
                    Card content...
                </Card>
            </Col>
            <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}>
                <Card style={{background:bgColor}} title="Card title - 2" bordered={false}>
                    No border with shadow effect<br />
                    Card content...
                </Card>
            </Col>
            <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}>
                <Card style={{background:bgColor}}  title="Card title - 3" bordered={false}>
                    No border with shadow effect<br />
                    Card content...
                </Card>
            </Col>
            <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}>
                <Card style={{background:bgColor}}
                    cover={
                    <img
                        alt="example"
                        src="/images/ad_1.jpg"
                    />
                    }
                    actions={actions}
                >
                    <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}>
                <Card style={{background:bgColor}} actions={actions}>
                    <Card.Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                    title="Card title"
                    description={
                        <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                        <p>This is the description</p>
                        </>
                    }
                    />
                </Card>
            </Col>
            <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}>
                <Card style={{background:bgColor}} actions={actions}>
                    <Card.Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                    title="Card title"
                    description={
                        <>
                        <p>This is the description</p>
                        <p>This is the description</p>
                        <p>This is the description</p>
                        </>
                    }
                    />
                </Card>
            </Col>
            <Col
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}>
                <Card style={{background:bgColor}}
                    hoverable
                    cover={<img alt="example" src="/images/ad_2.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={24}>
            <Card style={{background:bgColor}} title="Card Title">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            </Col>
        </Row>
  </Container>)
}

export default App;