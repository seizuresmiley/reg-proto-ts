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
            setSider({position:"fixed",zIndex:3});
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
            <Menu.Item key="/changePassword"><a href="/changePassword" className="nav-text">เปลี่ยนรหัสผ่าน</a></Menu.Item>
            <Menu.Item key="/adddrop"><a href="/adddrop" className="nav-text">ติดตามขอเพิ่มลด</a></Menu.Item>
            <Menu.Item key="/enroll_result">ผลการลงทะเบียน</Menu.Item>
  
  
            <Menu.Item key="/table">ค้นหารายวิชา</Menu.Item>
            <Menu.Item key="/debt">ปฏิทินการศึกษา</Menu.Item>
            <Menu.Item key="/grade">คำถามที่พบบ่อย</Menu.Item>
            <Menu.Item key="/graduate">ฟอร์มเเละประกาศ</Menu.Item>
  
        </Menu>
      </Sider>
    );
}

export default StudentSidebar;