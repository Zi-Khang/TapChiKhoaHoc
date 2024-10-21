import React from "react";
import { Header } from "..";
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
