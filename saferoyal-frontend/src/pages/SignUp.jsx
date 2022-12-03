import React, { useRef } from "react";
import { Link } from "react-router-dom";
import pic7 from "../assets/images/rooms/pic02.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const password = useRef();

  const router = useNavigate();

  const registerUser = async () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const phoneNumberValue = phoneNumber.current.value;
    const passwordValue = password.current.value;

    if (nameValue && emailValue && phoneNumberValue && passwordValue) {
      let bodyContent = new FormData();
      bodyContent.append("fullname", nameValue);
      bodyContent.append("email", emailValue);
      bodyContent.append("password", passwordValue);
      bodyContent.append("phone_number", phoneNumberValue);

      let response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        body: bodyContent,
      });

      if (response.status === 201) {
        let data = await response.json();
        router("/"); // Go to home
      }
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={pic7} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">SafeRoyal</h2>
            <div>
              <div className="mt-5">
                <label htmlFor="">Name</label>
                <input
                  ref={name}
                  className="border p-2 mr-2 mb-4"
                  type="text"
                />

                <label htmlFor="">Phone Number</label>
                <input
                  ref={phoneNumber}
                  className="border p-2 mr-2 mb-4"
                  type="text"
                />

                <label htmlFor="">Email</label>
                <input
                  ref={email}
                  className="border p-2 mr-2 mb-4"
                  type="email"
                />

                <label htmlFor="">Password</label>
                <input ref={password} className="border p-2 " type="password" />
              </div>
            </div>
            <button
              type="button"
              onClick={() => registerUser()}
              className="w-full py-2 my-4 text-white bg-blue-600 hover:bg-blue-500"
            >
              Sign Up
            </button>
            {/* <p className="text-center">Forgot Username or Password?</p> */}
          </form>
          <div className="flex items-center ml-4 mt-4">
            <p>Already have an account?</p>
            <Link to="/Login">
              <p className=" text-blue-500 hover:text-blue-600 p-2">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
