import {Layout, Menu} from 'antd'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const { Sider } = Layout;


const Sidebar = () =>{
    let location = useLocation();
    //just to have the sidebar over the content. why.
    //why is this not built into antd is beyond me
    const [siderStyle, setSider] = useState({});

    return(
        <Sider width={200} breakpoint="lg" className="site-layout-background" collapsedWidth = "0" style={siderStyle}
        onCollapse={(collapsed, type) => {
          if(!collapsed && type === "clickTrigger"){
            setSider({position:"fixed",zIndex:100,});
          }
          if(!collapsed && type === "responsive"){
            setSider({position:"relative"});
          }
        }}
        >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100vh', borderRight: "0px"}}
          selectedKeys = {[location.pathname]}
>
  
            <Menu.Item key="/"><a href="/" className="nav-text">หน้าเเรก</a></Menu.Item>
            <Menu.Item key="/login"><a href="/login" className="nav-text">เข้าสู่ระบบ</a></Menu.Item>
            <Menu.Item key="/ebook"><a href="https://www.tni.ac.th/student_doc_ebook/" className="nav-text">คู่มือนักศึกษา</a></Menu.Item>
            <Menu.Item key="4" disabled ={true}>หลักสูตรที่เปิดสอน</Menu.Item>
  
  
            <Menu.Item key="5" disabled ={true}>ค้นหารายวิชา</Menu.Item>
            <Menu.Item key="6" disabled ={true}>ปฏิทินการศึกษา</Menu.Item>
            <Menu.Item key="7" disabled ={true}>คำถามที่พบบ่อย</Menu.Item>
            <Menu.Item key="8" disabled ={true}>ฟอร์มเเละประกาศ</Menu.Item>
  
  
            <Menu.Item key="9" disabled ={true}>ขอ Transcript/ใบรับรอง</Menu.Item>
            <Menu.Item key="10" disabled ={true}>เเนะนำฝ่ายวิชาการ</Menu.Item>
            <Menu.Item key="11" disabled ={true}>ตรวจสอบราบชื่อบันฑิต</Menu.Item>
  
  
        </Menu>
      </Sider>
    )
}

export default Sidebar