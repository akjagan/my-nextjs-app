import React from "react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";

const SignIn = () => (
  <Layout title="Sign In">
    <div className="flex justify-center items-center h-screen">
      <SignInForm />
    </div>
  </Layout>
);

export default SignIn;
