import React, { useContext } from "react";
import { authContext } from "../helper/Context";
import { useNavigate } from "react-router-dom";

function SidebarAdmin() {
  const { expanded } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          expanded
            ? "max-sm:flex max-sm:flex-col max-sm:h-screen max-sm:bg-blue-500"
            : "max-sm:hidden"
        }
      >
        <div
          onClick={() => navigate("/admin")}
          className="fa fa-envelope max-sm:items-center max-sm:w-full max-sm:bg-white max-sm:flex max-sm:justify-center max-sm:p-2"
        ></div>
        <div className="max-sm:mt-2 max-sm:w-full">
          <ol className="max-sm:flex max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:p-2">
            <li
              className="fa fa-pencil max-sm:bg-white max-sm:w-full"
              onClick={() => navigate("/admin/product")}
            ></li>
            <br></br>
            <li className="fa fa-pencil max-sm:bg-white max-sm:w-full"></li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default SidebarAdmin;
