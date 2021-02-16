import { Layout } from 'antd';
import './App.css';
import SurveyIntro from './subpages/SurveyIntro'
import Login from './subpages/Login'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from './subpages/Student';
import GradePage from './subpages/GradePage';

const { Header } = Layout;



const App = () => {
    return(
      <Router>
  <Layout>
  <Header>
  <h1 className="HeaderText">ระบบบริการการศึกษา</h1>
  </Header>
  <Layout>
      <Switch>
      <Route exact path="/" component={SurveyIntro}/>
      <Route exact path="/grades" component={GradePage}/>
      <Route exact path="/student" component={Student}/>
      <Route component={NotFound}/>
      </Switch>

  </Layout>
</Layout>
</Router>
    )}
    

export default App;