import {Tabs,Row,Col,Typography, Card, Descriptions} from 'antd';
import React, {Fragment} from 'react';
import firebase from "../services/FirestoreService";
import {useDocument} from 'react-firebase-hooks/firestore'
const {TabPane} = Tabs;
const {Title} = Typography;


const EnrollmentTable = (props : any) =>{
    const [value,loading,error] = useDocument(
        firebase.collection("test-user").doc("enrollment"),{
        snapshotListenOptions: { includeMetadataChanges: true }
        }
    )
    if(!loading){
    let data = value.data();
    console.log()
    return(

        <Fragment>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab={data['data'][0]['year']} key="">
                        <Row><Title level={3}>Semester 1</Title></Row>
                        <Row gutter={[24,24]}>
                        {Object.keys(data['data'][0]['enrolled'][0]).map(item =>{
                            return(
                                <Col span={24}>
                                <Card title={item +" : "+ data['data'][0]['enrolled'][0][item]['desc']}>
                                <Descriptions>
                                <Descriptions.Item label="Grade">{data['data'][0]['enrolled'][0][item]['grade']}</Descriptions.Item>
                                <Descriptions.Item label="Instructors">{data['data'][0]['enrolled'][0][item]['instructors'].map((e : string)=>{
                                    return(e + " ")
                                })}
                                </Descriptions.Item>
                                </Descriptions>
                                </Card>
                                </Col>
                            )
                        })

                        }
                        </Row>
                        <Row><Title level={3}>Semester 2</Title></Row>
                        <Row gutter={[24,24]}>
                        {Object.keys(data['data'][0]['enrolled'][1]).map(item =>{
                            return(
                                <Col span={24}>
                                <Card title={item +" : "+ data['data'][0]['enrolled'][1][item]['desc']}>
                                <Descriptions>
                                <Descriptions.Item label="Grade">{data['data'][0]['enrolled'][1][item]['grade']}</Descriptions.Item>
                                <Descriptions.Item label="Instructors">{data['data'][0]['enrolled'][1][item]['instructors'].map((e : string)=>{
                                    return(e + " ")
                                })}
                                </Descriptions.Item>
                                </Descriptions>
                                </Card>
                                </Col>
                            )
                        })

                        }
                        </Row>
                </TabPane>
            </Tabs>
        </Fragment>

    )
    }else if(loading){
        return (<Fragment>Loading...</Fragment>)
    }else{
        return (<Fragment>Error loading enrollment information</Fragment>)
    }

}

export default EnrollmentTable;