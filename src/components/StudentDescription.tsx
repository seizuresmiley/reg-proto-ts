import {Descriptions} from 'antd';
import { Fragment } from 'react';
import {useDocument} from 'react-firebase-hooks/firestore';
import firebase from '../services/FirestoreService'
const StudentDescriptions = () =>{
    const [value,loading,error] = useDocument(
        firebase.collection("test-user").doc("data"),{
        snapshotListenOptions: { includeMetadataChanges: true }
        }
    )
    if(!loading){
        var data = value.data();
        return(
            <Fragment>
            <Descriptions title="Student Information">
            <Descriptions.Item label="Name">{data['name']}</Descriptions.Item>
            <Descriptions.Item label="Student ID">{data['id']}</Descriptions.Item>
            <Descriptions.Item label="Year">{data['year']}</Descriptions.Item>
            <Descriptions.Item label="Course">{data['course']}</Descriptions.Item>
            <Descriptions.Item label="Course Year">{data['course_year']}</Descriptions.Item>
            <Descriptions.Item label="Status">{data['status']}</Descriptions.Item>
            <Descriptions.Item label="Phone No.">{data['phone']}</Descriptions.Item>
            <Descriptions.Item label="e-mail:">{data['mail']}</Descriptions.Item>
            <Descriptions.Item label="Advisor">{data['advisor']}</Descriptions.Item>
            <Descriptions.Item label="Registered Credits">{data['registered_credits']}</Descriptions.Item>
            <Descriptions.Item label="Earned Credits">{data['earned_credits']}</Descriptions.Item>
            </Descriptions>
            </Fragment>
        )
    }else if(error){
        return(<Fragment>Error loading student data.</Fragment>)
    }else{
        return(<Fragment>Loading...</Fragment>)
    }

}

export default StudentDescriptions;