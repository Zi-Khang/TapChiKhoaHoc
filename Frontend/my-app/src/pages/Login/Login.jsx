import React, { useMemo } from "react";
import { useState } from "react";
import { LoginComponent, RegisterComponent } from "../../components";
import classNames from "classnames";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserAPI,loginUserAPI } from "../../util/api"


const mockUserData = {
  username: "admin@gmail.com",
  password: "admin@123",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
};

export const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const onClickRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const loginHandler = async (values) => {
    const { email, password } = values
    const res = await loginUserAPI(email, password)
    console.log(res,res.data.EC);
    
    if (res && res.data.EC === 0) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          isLoggedIn: true,
          username: res.data.user.name,
        })
      );
      // navigate({ pathname: "/" });
    } else {
      alert(res.data.EM);
    }
  };

  const onFinish = async (values) => {
    const { email, password } = values
    const res = await createUserAPI(email, password)
    console.log('Data: ', res.data);
    console.log('Success: ', values);
  }


  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  }, []);

  if (user?.isLoggedIn) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return (
    <>
      <div className="login-wrapper">
        <div className="login-form">
          <div className="login-bar">
            <div
              className={classNames("login tab", {
                active: login === true,
              })}
              onClick={onClickLogin}
            >
              <h4 className="active">Đăng nhập</h4>
            </div>
            <div
              className={classNames("register tab", {
                active: register === true,
              })}
              onClick={onClickRegister}
            >
              <h4>Đăng ký</h4>
            </div>
          </div>

          {login && <LoginComponent onLoginBtnClick={loginHandler} />}
          {register && <RegisterComponent onRegisterBtnClick={onFinish} />}
          <Link className="home-page" to={{ pathname: "/" }}>
            <i className="fa-solid fa-house fa-2xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
