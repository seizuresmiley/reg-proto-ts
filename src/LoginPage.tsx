import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import Login from './subpages/Login';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;

const routeList = [

  {
      path: "/",
      exact: true,
      component: "MainPage"
  },
  {
      path: "/login",
      exact : false,
      component: "Login"
  }

];

const LoginPage = () => {
    return(
      <Router>
  <Layout>
  <Header >
  <h1 className="HeaderText">ระบบบริการการศึกษา</h1>
  </Header>
  <Layout>
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
      <Switch>
        <Route exact path ="/login" component={Login}/>
      </Switch>
      </Content>
    </Layout>
  </Layout>
</Layout>
</Router>
    )}
    

export default LoginPage;