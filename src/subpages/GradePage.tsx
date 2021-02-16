
import {Row, Col,Layout,Typography, Tabs} from 'antd';
import StudentSidebar from "../components/StudentSidebar";
import React, { Fragment } from "react";
import StudentDescriptions from "../components/StudentDescription";
import Schedule from '../components/Schedule';
import GradeTable from '../components/GradeTable';
const {Content } = Layout;
const {TabPane} = Tabs;

const sem1Grade = [
    {
        sub : "ENL-111",
        name : "English for Communication",
        credit : "2",
        grade : "B"
    },{
        sub : "INT-101",
        name : "Internet Technology",
        credit : "3",
        grade : "C"
    },{
        sub : "INT-107",
        name : "Introduction to Computer Programming",
        credit : "3",
        grade : "D"
    },{
        sub : "JPN-101",
        name : "Business Japanese 1",
        credit : "3",
        grade : "C+"
    },{
        sub : "MSC-126",
        name : "Mathematics for Information Technology",
        credit : "3",
        grade : "C+"
    },{
        sub : "SOC-137",
        name : "Startup Studies",
        credit : "3",
        grade : "B+"
    }
  ];

const sem2Grade = [
    {
        sub : "ENL-112",
        name : "English Language Skill Development",
        credit : "2",
        grade : "N/A"
    },{
        sub : "HUM-125",
        name : "Arts of Life",
        credit : "3",
        grade : "N/A"
    },{
        sub : "INT-108",
        name : "Introduction to Object-Oriented Programming",
        credit : "3",
        grade : "N/A"
    },{
        sub : "JPN-102",
        name : "Business Japanese 2",
        credit : "3",
        grade : "N/A"
    },{
        sub : "MSC-112",
        name : "Science and Technology",
        credit : "3",
        grade : "N/A"
    },{
        sub : "MSC-201",
        name : "Computer Mathematics",
        credit : "3",
        grade : "N/A"
    }
  ];


const accData = {
    sem1 : {
        sem : [{
            registered : "17",
            earned : "17",
            ca : "17",
            gp : "17",
            gpa : "2.38"
  
        }],
        acc : [{
            c_registered : "17",
            c_earned : "17",
            c_ca : "17",
            c_gp : "17",
            gpax : "2.38"
    
        }]
    },

    sem2 : {
        sem :[{
            registered : "17",
            earned : "0",
            ca : "0",
            gp : "0",
            gpa : "0.00"
        }],

        acc :[{
            c_registered : "17",
            c_earned : "17",
            c_ca : "17",
            c_gp : "40.5",
            gpax : "2.38"
    
        }]
    }
}

const GradePage = () =>{
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
          <Col span={24}>
            <Tabs defaultActiveKey="1" centered>
        <TabPane tab="1/2563" key="1">
        <GradeTable grade={sem1Grade} acc = {accData["sem1"]}/>
        </TabPane>
        <TabPane tab="2/2563" key="2">
        <GradeTable grade={sem2Grade} acc={accData["sem2"]} gradeState = {"na"}/>
        </TabPane>
        </Tabs>
          </Col>
        </Row>
        </Content>
        </Layout>
        </Fragment>
    );
}

export default GradePage