import React, { useContext } from "react";
import { authContext } from "../helper/Context";

function HeaderAdmin() {
  let { setIsExpanded } = useContext(authContext);
  return (
    <div className="max-sm:flex max-sm:w-full max-sm:bg-blue-300 max-sm:p-1">
      <button
        type="button"
        className="bg-black"
        onClick={() => setIsExpanded((e) => !e)}
      >
        Tes
      </button>
    </div>
  );
}

export default HeaderAdmin;
