import {Layout, Menu} from 'antd'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const { Sider } = Layout;


const StudentSidebar = () =>{
    let location = useLocation();
    const [siderStyle, setSider] = useState({});
    return(
        <Sider width={200} breakpoint="lg" className="site-layout-background" collapsedWidth = "0"
        style={siderStyle}
        onCollapse={(collapsed, type) => {
          if(!collapsed && type === "clickTrigger"){
            setSider({position:"fixed",zIndex:4});
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
          style={{ height: '100vh', borderRight: 0}}
          selectedKeys = {[location.pathname]}
          
>
  
            <Menu.Item key="/"><a href="/" className="nav-text">ออกจากระบบ</a></Menu.Item>
            <Menu.Item key="/changePassword" disabled ={true}><a href="/changePassword" className="nav-text">เปลี่ยนรหัสผ่าน</a></Menu.Item>
            <Menu.Item key="/adddrop" disabled ={true}><a href="/adddrop" className="nav-text">ติดตามขอเพิ่มลด</a></Menu.Item>
            <Menu.Item key="/enroll_result" disabled ={true}>ผลการลงทะเบียน</Menu.Item>
  
  
            <Menu.Item key="/table" disabled ={true}>ค้นหารายวิชา</Menu.Item>
            <Menu.Item key="/debt" disabled ={true}>ปฏิทินการศึกษา</Menu.Item>
            <Menu.Item key="/grade" disabled ={true}>คำถามที่พบบ่อย</Menu.Item>
            <Menu.Item key="/graduate"disabled ={true}>ฟอร์มเเละประกาศ</Menu.Item>
  
        </Menu>
      </Sider>
    );
}

export default StudentSidebar;