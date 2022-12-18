import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Campus = () => {
  const [campus, setCampus] = useState();


  
  


  useEffect(() => {
    fetch("https://saferoyalhostel.pythonanywhere.com/api/categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCampus(data);
      });
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Please Select Your School
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              We proovide you availables hostels and homestels based on school
              selection.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {campus &&
              campus.map((campus) => (
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <Link to={`/Properties/${campus.campusname}/${campus.id}`}>
                    <div class="flex relative ">
                      <img
                        alt="gallery"
                        class="absolute inset-0 w-full h-full object-cover object-center"
                        src={campus.campuslogo}
                      />
                      <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                          {campus.campuslocation} Campus
                        </h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          {campus.campusname}
                        </h1>
                        <p>
                          Find hostel and homestel rooms near{""}{" "}
                          {campus.campusname}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
