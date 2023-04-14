import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { base_url } from "../../helper/Context";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const url = useContext(base_url);
  // console.log(authState.username);
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    Swal.fire({
      icon: "warning",
      width: "400px",
      text: "Sure?",
      showCancelButton: true,
      reverseButtons: true,
    }).then(async (result) => {
      if (result) {
        await axios.post(`${url}api/auth/admin/login`, data).then((res) => {
          console.log(data.username);
          if (res.data.code !== "00") {
            toast.error(res.data.message);
          } else {
            reset();
            let authAdmin = {
              accessToken: res.data.data.accessToken,
              username: res.data.data.username,
              id: res.data.data.id,
            };
            localStorage.setItem("admin", JSON.stringify(authAdmin));
            navigate("/admin");
          }
        });
      }
    });
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:h-screen max-sm:items-center max-sm:p-10">
        <div className="max-sm:w-full max-sm:bg-blue-400 max-sm:p-2 max-sm:rounded-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-sm:text-center max-sm:flex max-sm:flex-col max-sm:justify-center"
          >
            <label>Username</label>
            <input
              type="text"
              name="username"
              autoComplete="on"
              {...register("username")}
            />
            <br></br>
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="on"
              {...register("password")}
            />
            <br></br>
            <div>
              <button
                className="max-sm:bg-white max-sm:px-2 max-sm:m-1"
                type="submit"
              >
                Login
              </button>
              <button
                className="max-sm:bg-white max-sm:px-2 max-sm:m-1"
                type="button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
