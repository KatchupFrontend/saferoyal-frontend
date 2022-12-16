import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pic6 from "../assets/images/rooms/pic01.jpg";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const router = useNavigate();

  const requestLogin = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let bodyContent = new FormData();
    bodyContent.append("email", emailValue);
    bodyContent.append("password", passwordValue);

    let response = await fetch(
      "https://web-production-bbf6.up.railway.app/api/auth/login/",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    const data = await response.json();
    // Error
    if (response.status === 401) {
      setIsError(true);
      setErrorText(data["message"]);
    } else {
      // Success
      setIsError(false);
      localStorage.setItem("refresh", data["refresh"]);
      localStorage.setItem("access", data["access"]);
      // Navigate to different page
      router("/campus");
    }

    console.log(document.cookie);
  };
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={pic6} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">SafeRoyal.</h2>
            {isError && (
              <p className="w-full bg-red-200 mb-3 p-3 rounded">{errorText}</p>
            )}
            <div>
              <label htmlFor="">Email</label>
              <input
                ref={email}
                className="border p-2 mr-2 mb-5"
                type="text"
                placeholder="Please enter your email"
              />
              <label htmlFor="" className="">
                Password
              </label>
              <input
                ref={password}
                className="border p-2 "
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              onClick={requestLogin}
              className="w-full py-2 my-4 text-white bg-blue-600 hover:bg-blue-500"
            >
              Sign In
            </button>

            <p className="text-center">Forgot Username or Password?</p>
          </form>
          <div className="flex items-center ml-4">
            <p>
              <Link to={"/Landing"}>Already have an account?</Link>
            </p>
            <Link to="/SignUp">
              <p className=" text-blue-500 hover:text-blue-600 p-2">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
