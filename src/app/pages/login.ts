import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

const Login = () => (
  <Layout title="Login">
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  </Layout>
);

export default Login;
