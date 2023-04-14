import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import axios from "axios";
import { base_url } from "../helper/Context";

function NavbarLayoutAdmin() {
  const navigate = useNavigate();
  let getLocalStorage = JSON.parse(localStorage.getItem("admin"));
  console.log(getLocalStorage);

  let url = useContext(base_url);

  const authToken = async () => {
    let token = getLocalStorage.accessToken;
    await axios
      .get(`${url}api/auth/authtoken`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(async (res) => {
        if (res.data.code !== "00") {
          navigate("/admin/login");
        }
      });
  };

  useEffect(() => {
    if (getLocalStorage == null) {
      navigate("/admin/login");
    }
    authToken();
  });

  return (
    <>
      <div className="max-sm:w-full max-sm:flex">
        <SidebarAdmin />
        <div className="max-sm:w-full max-sm:flex max-sm:flex-col">
          <HeaderAdmin />
          <div className="max-sm:w-full max-sm:flex max-sm:p-5">
            <Outlet />
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default NavbarLayoutAdmin;
