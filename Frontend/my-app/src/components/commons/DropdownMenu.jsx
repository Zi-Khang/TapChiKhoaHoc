import React, { useMemo } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Navigate, useNavigate } from "react-router-dom";

export const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Khai báo useNavigate ở đây

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    handleClose(); // Đóng dropdown trước khi điều hướng
    window.location.reload();
  };
  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="user-avt"
        aria-controls={open ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        <img src={user.avatar} alt="avatar" />
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
