import React, { useRef } from "react";
import { Link } from "react-router-dom";
import pic7 from "../assets/images/rooms/pic02.jpg";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';


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

      let response = await fetch(
        "http://saferoyalhostel.pythonanywhere.com/api/auth/register/",
        {
          method: "POST",
          body: bodyContent,
        }
      );

      if (response.status === 201) {
        //display success message
        let data = await response.json();
        notify();//notify takes you to login page when closed
        
       
      }
    
      
    }
  };

   
  

  //toast function
   const notify = () =>
     toast.custom(
       toast.custom((t) => (
         <div
          className={`${
             t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
         >
           <div className="flex-1 w-0 p-4">
             <p className="text-green-500">Account successfully created!</p>
           </div>
           <div className="flex border-l border-gray-200">
             <button
               onClick={() => 
                {toast.dismiss(t.id);
                router("/login")
                }}
               className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             >
               Close
             </button>
           </div>
         </div>
       ))
     );

  return (
    <div className="w-full h-screen flex">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={pic7} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">SafeRoyal</h2>
            {/**Succesfully signed in */}
            {
              //   <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              //   <strong className="font-bold">Success!</strong>
              //   <span className="block sm:inline">Your account has been created successfully.</span>
              //   <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              //     <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              //   </span>
              // </div>

            }
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
