import React from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";

function NavbarLayoutAdmin() {
  return (
    <>
      <SidebarAdmin />
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </>
  );
}

export default NavbarLayoutAdmin;
