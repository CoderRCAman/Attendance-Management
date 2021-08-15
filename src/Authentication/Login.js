import Spinner from "react-spinkit";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { signin, authenticate, isAuthenticated } from "./helper/AuthApiCalls";

import { Redirect } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [redirect, setRedirect] = useState({
    admin : false ,
    notadmin:false
  });
  const buttonRef = useRef(null);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const removeError = async () => {
    await sleep(1000);
    seterror(false);
  };
  const onSubmit = (data) => {
    buttonRef.current.classList.add("hidden");
    setisLoading(true);
    // call api to log in
    signin(data)
      .then(async (user) => {
        await sleep(500);
        authenticate(user.data);
        user.data.role===1 ?  setRedirect({admin:true,notadmin:false}): setRedirect({admin:false,notadmin:true});
      })
      .catch(async (Error) => {
        console.log(Error);
        await sleep(500);
        buttonRef.current.classList.remove("hidden");
        setisLoading(false);
        seterror(true);
      });
  };
  const getRole = async () => {
    return await isAuthenticated().role;
  };
  const performRedirect = () => {
    if (redirect.admin) return  <Redirect to="/admin" />;
    if(redirect.notadmin) return <Redirect to="/user" />;
  };

  const loginForm = () => {
    return (
      <div className="grid h-screen place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex bg-white flex-col mt-44 m-4 md:w-2/5 md:ml-96 p-5 space-y-3 rounded-md shadow-2xl"
        >
          <h1 className="self-center text-black text-2xl font-semibold mb-2">
            Login
          </h1>
          {error && (
            <h1 className="text-red-600 bg-red-200 p-2 ">
              Incorrect Email or Password
            </h1>
          )}
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            className="p-3 text-black bg-[#EEEEEE] focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-600 bg-red-200 p-2 w-4/5 md:w-1/2">
              Email is required
            </span>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            className="p-3 text-black bg-[#EEEEEE] focus:outline-none"
          />
          {errors.password && (
            <span className="text-red-600 bg-red-200 p-2 w-4/5 md:w-1/2">
              Password is required
            </span>
          )}
          <button
            ref={buttonRef}
            className="p-3 bg-[#32BD69] focus:outline-none text-white"
          >
            Login
          </button>
          {isLoading && (
            <Spinner
              fadeIn="none"
              name="cube-grid"
              color="orange"
              className="self-center h-3"
            />
          )}
        </form>
      </div>
    );
  };
  return (
    <>
      {loginForm()}
      {performRedirect()}
    </>
  );
}

export default Login;
