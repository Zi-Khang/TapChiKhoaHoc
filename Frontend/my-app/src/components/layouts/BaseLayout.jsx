import React from "react";
import Header from '../layouts/Header'
import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
