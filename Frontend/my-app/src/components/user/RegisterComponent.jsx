import { React, useState } from "react";

export const RegisterComponent = ({ onRegisterBtnClick = () => {} }) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <form action="login">
      <h1 className="login-title">Đăng ký</h1>
      <div className="login-inp">
        <input id="login-email" 
        type="email" 
        placeholder="Email"
        name="email"
        values={email}
        onChange={(e) => {
          setUsername(e.target.value);
        }} 
        />
        <i className="fa-solid fa-envelope fa-xl"></i>
      </div>
      <div className="login-inp">
        <input id="login-password" 
        type="password" 
        name="password"
        placeholder="Mật khẩu"
        values={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
        <i className="fa-solid fa-lock fa-xl"></i>
      </div>
      
    

      <div className="login-btn">
        <button className="button-34 new-value-btn" type="button">
          Tạo mới
        </button>
        <button className="button-34 login-submit-btn" ype="submit" 
        onClick={(e) => {
            e.preventDefault();
            onRegisterBtnClick({
              email,
              password,
            });
          }}>
          Đăng Ký
        </button>
      </div>
    </form>
  );
};
