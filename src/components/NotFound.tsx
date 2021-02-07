import './NotFound.css';
import {Layout,Row,Col,Typography} from 'antd';
import React, { Fragment } from 'react';
const {Content} = Layout;
const {Title} = Typography;


const NotFound = () => {
    return(
        <Fragment>
        <Content className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 1080,
        }}>
        <Row justify="center">
            <Col span={24}>
                <Title>Content not found.</Title>
                <a href="/">Go back to home</a>
            </Col>
        </Row>
        </Content>
        </Fragment>
    )
}


export default NotFound;