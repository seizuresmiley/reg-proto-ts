import {Tabs, Table,Row,Col} from 'antd';
import { Fragment } from 'react';
const {TabPane} = Tabs;

const GradeDescription = () =>{
    const columns =[
        {
            title : "Semester",
            dataIndex : "sem",
            key : "sem"

        },
        {
            title : "GPA",
            dataIndex : "gpa",
            key : "gpa"

        },{
            title : "GPAX",
            dataIndex : "gpax",
            key : "gpax"

        },
    ]

    const data = [
        {

             key : '1',
             sem : "Semester 1",
             gpa : "3.47",
             gpax : "3.47"

        },
        {

            key : '2',
            sem : "Semester 2",
            gpa : "0",
            gpax : "3.47"

       }
    ]
    return(
        <Fragment>
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Year 1" key="1">
                <Row>
                    <Col span={24}>
                    <Table dataSource={data} columns={columns} pagination={false} />
                    </Col>
                </Row>
                </TabPane>
            </Tabs>
        </Fragment>
 
 )
}

export default GradeDescription;