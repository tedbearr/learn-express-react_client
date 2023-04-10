import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import { authContext } from "../helper/Context";

function NavbarLayoutAdmin() {
  const { authState } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    let { status } = authState;
    if (status == false) {
      navigate("/admin/login");
    }
  });
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
