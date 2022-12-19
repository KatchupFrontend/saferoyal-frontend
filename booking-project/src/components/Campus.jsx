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
              We provide you availables hostels and homestels based on school
              selection.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {campus &&
              campus.map((campus) => (
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <Link to={`/Properties/${campus.campusname}/${campus.id}`}>
                    <div class="h-full border border-gray-300 rounded-lg overflow-hidden">
                      <img
                        class="lg:h-64 md:h-36 w-full object-cover object-center"
                        src={campus.campuslogo}
                        alt="place"
                      />
                      <div class="p-6">
                        <h2 class="tracking-widest text-sm title-font font-medium text-black ">
                          {campus.campusname}-
                          {campus.campuslocation}
                        </h2>
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
