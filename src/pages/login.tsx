import React from "react";
import { useRouter } from "next/router";
import LoginForm from "../../components/login/LoginForm";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 29.03.23
 Project: volleyballtournament
 **/

type LoginProperties = {};
const Login = (props: LoginProperties) => {


  return (
    <div>
      <LoginForm/>
    </div>
  );
};

export default Login;
