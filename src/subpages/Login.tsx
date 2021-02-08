import { Form, Input, Button, Checkbox ,Row,Col,Layout,Typography } from 'antd';
import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
const { Content } = Layout;
const {Title} = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
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
  <Row justify="center" align = "middle">
    <Title>Login</Title>
  </Row>
  <Row justify="center" align="middle">
    <Col span={10}>
  <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        initialValue = {123456789}
      >
        <Input disabled/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        initialValue ="fakePassword"
      >
        <Input.Password disabled />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" href="/student">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
  </Row>
</Content>
</Layout>
</Fragment>

  );
};

export default Login;