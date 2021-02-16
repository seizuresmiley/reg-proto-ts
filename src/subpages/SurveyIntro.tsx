
import {Row, Col,Layout,Typography,Button, Card, Space} from 'antd';
import React, { Fragment } from "react";
const {Content } = Layout;
const {Title} = Typography;

const SurveyIntro = () =>{
    
    return(
        <Fragment>
          <Layout style={{ padding: '24px 24px 24px 24px' }}>
          <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 1080,
        }}
      >
        <Row justify="center">
        <Space size="large" direction="vertical">
        <Row justify="center" style={{textAlign : "center"}}>
          <Title>เเบบสอบถามการออกเเบบ</Title>
        </Row>
        <Row justify="center" style={{textAlign : "center"}}>
            <Title>ระบบบริการการศึกษาของสถาบัน</Title>
        </Row>
        <Row justify="center">
            <p>เข้าดูตัวอย่าง Concept ข้างล่าง</p>
        </Row>
        <Row justify="center">
          <Col span = {24} style={{textAlign:"center"}} ><Button type="primary" href="/student">ตารางเรียน</Button></Col>

        
        </Row>
        <Row justify="center">

          <Col span = {24} style={{textAlign:"center"}}><Button type="primary" href="/grades">ผลการเรียน</Button></Col>
        
        </Row>
        <Row justify="center">
            <p>เเล้วทำเบบสอบถามด้านล่างผ่าน Google Forms (ต้องใช้ Login ของวิทยาลัย)</p>
        </Row>
        <Row justify="center">
        <Col span = {24} style={{textAlign:"center"}}><Button type="primary">เเบบสอบถาม</Button></Col>
        </Row>
        </Space>
        </Row>
        </Content>
        </Layout>
        </Fragment>
    );
}

export default SurveyIntro;