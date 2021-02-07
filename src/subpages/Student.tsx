
import {Row, Col,Layout,Typography} from 'antd';
import StudentSidebar from "../components/StudentSidebar";
import React, { Fragment } from "react";
import StudentDescriptions from "../components/StudentDescription";
import GradeDescription from "../components/GradeDescription";
const {Content } = Layout;
const {Title} = Typography;

const Student = () =>{
    
    return(
        <Fragment>
            <StudentSidebar/>
          <Layout style={{ padding: '24px 24px 24px 24px' }}>
          <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 1080,
        }}
      >
        <Row gutter={[24,24]}>
        <Col span = {24}>
        <StudentDescriptions/>
        </Col>
        </Row>
        <Row>
          <Title level={2}>Grades</Title>
        </Row>
        <Row gutter={[24,24]}>
        <Col span = {24}>
        <GradeDescription/>
        </Col>
        </Row>
        </Content>
        </Layout>
        </Fragment>
    );
}

export default Student;