import React, { useContext } from "react";
import { authContext } from "../helper/Context";

function SidebarAdmin() {
  const { expanded } = useContext(authContext);
  return (
    <>
      <div
        className={
          expanded
            ? "max-sm:flex max-sm:flex-col max-sm:h-screen max-sm:bg-blue-500"
            : "max-sm:hidden"
        }
      >
        <div className="fa fa-envelope max-sm:items-center max-sm:w-full max-sm:bg-white max-sm:flex max-sm:justify-center max-sm:p-2"></div>
        <div>
          <ol>
            <li className="fa fa-pencil"></li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default SidebarAdmin;
