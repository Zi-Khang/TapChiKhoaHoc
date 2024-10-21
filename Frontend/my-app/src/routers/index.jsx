import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PageNotFound } from "../pages/PageNotFound";
import { Login } from "../pages/Login/Login";
import { BaseLayout } from "../components";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
