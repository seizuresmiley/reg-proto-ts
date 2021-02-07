import {Descriptions} from 'antd';
import { Fragment } from 'react';


const StudentDescriptions = () =>{
    return(
        <Fragment>
        <Descriptions title="Student Information">
        <Descriptions.Item label="Name">John Appleseed</Descriptions.Item>
        <Descriptions.Item label="Student ID">2112345678</Descriptions.Item>
        <Descriptions.Item label="Year">1</Descriptions.Item>
        <Descriptions.Item label="Course">Information Technology</Descriptions.Item>
        <Descriptions.Item label="Course Year">2563</Descriptions.Item>
        <Descriptions.Item label="Status">Normal</Descriptions.Item>
        <Descriptions.Item label="Phone No.">8075555555</Descriptions.Item>
        <Descriptions.Item label="e-mail:">aj.john_st@tni.ac.th</Descriptions.Item>
        <Descriptions.Item label="Advisor">Jane Appleseed</Descriptions.Item>
        <Descriptions.Item label="Registered Credits">34</Descriptions.Item>
        <Descriptions.Item label="Earned Credits">17</Descriptions.Item>
        </Descriptions>
        </Fragment>
    )
}

export default StudentDescriptions;