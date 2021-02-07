import {Row, Col,Card,Alert,Layout} from 'antd';
import Sidebar from "../components/Sidebar";
import { Fragment } from "react";
const { Content } = Layout;


const MainPage = () =>{
    return(

          <Fragment>
            <Sidebar/>
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
          <Col span = {24}><Alert message="สำนักงารการทะเบียน เปิดทำการตามปกติ ตั้งเเต่วันที่ 1 ก.พ. 2564 เป็นต้นไป" type="success" /></Col>
        </Row>
        <Row gutter={[24,24]}>
          <Col xl={12} xs={24}><Card title="Card title">
          Card content
          </Card>
          </Col>
          <Col xl={12} xs={24}><Card title="Card title">
          Card content
          </Card>
          </Col>
        </Row>
        </Content>
        </Layout>
        </Fragment>
    )
}

export default MainPage