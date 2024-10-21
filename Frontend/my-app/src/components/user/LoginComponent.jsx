import React, { useState } from "react";

export const LoginComponent = ({ onLoginBtnClick = () => {} }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="login">
      <h1 className="login-title">Đăng nhập</h1>
      <div className="login-inp">
        <input
          id="login-email"
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <i className="fa-solid fa-envelope fa-xl"></i>
      </div>
      <div className="login-inp">
        <input
          id="login-password"
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <i className="fa-solid fa-lock fa-xl"></i>
      </div>

      <div className="login-btn">
        <button className="button-34 new-value-btn">Tạo mới</button>
        <button
          className="button-34 login-submit-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onLoginBtnClick({
              username,
              password,
            });
          }}
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
};
