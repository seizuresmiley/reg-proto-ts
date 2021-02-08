import {Typography,Descriptions} from 'antd';
import { Fragment } from 'react';

const {Title} = Typography;

const EnrollmentSingle = (props: any) =>{
    return(
        <Fragment>
        <Title level={3}>Semester {props.semester}</Title>
            <Descriptions title="ENL-111">
            <Descriptions.Item label="Subject Name">English for Communication</Descriptions.Item>
            <Descriptions.Item label="Net Point">2 (2-0-4)  Sect.1</Descriptions.Item>
            <Descriptions.Item label="Grade">A</Descriptions.Item>
            <Descriptions.Item label="Time Table">Mon.15:30-17:30 , Mon.14:20-15:20</Descriptions.Item>
            <Descriptions.Item label="Instructors">
            อาจารย์บุญชัย คงศักดิ์ตระกูล <br></br>อาจารย์Justin Robert Hampshire
            </Descriptions.Item>
            </Descriptions>
        </Fragment>
    )
}

export default EnrollmentSingle