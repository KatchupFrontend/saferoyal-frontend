import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Carous from "../components/carous";
import Iframe from 'react-iframe'
const Detailpage = () => {
  const [property, setProperty] = useState("");
  const { id } = useParams();

  const getSingleProperty = async () => {
    let reqOptions = {
      url: `http://localhost:8000/api/room/${id}/`,
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
    setProperty(response.data);
  };

  useEffect(() => {
    getSingleProperty();
  }, []);

  

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={property.apartmentImage}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {property.address}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {property.apartmentName}
              </h1>
              <h2 class="text-lg font-bold title-font text-blue-500 tracking-widest">
                {property.floortype} floor
              </h2>
              <h2 class="text-lg font-bold title-font text-blue-500 tracking-widest">
                {property.persons}
              </h2>
              <h2 class="text-lg font-bold  text-gray-900 tracking-widest">
                {property.apartmentLocation}
              </h2>
              <p>{property.description}</p>

              {/* <div class="flex mb-4">
    //           <span class="flex items-center">
    //             <svg
    //               fill="currentColor"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 text-indigo-500"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    //             </svg>
    //             <svg
    //               fill="currentColor"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 text-indigo-500"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    //             </svg>
    //             <svg
    //               fill="currentColor"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 text-indigo-500"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    //             </svg>
    //             <svg
    //               fill="currentColor"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 text-indigo-500"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    //             </svg>
    //             <svg
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               class="w-4 h-4 text-indigo-500"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    //             </svg>
    //             <span class="text-gray-600 ml-3">4 Reviews</span>
    //           </span>
    //           <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
    //             <a class="text-gray-500">
    //               <svg
    //                 fill="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 class="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //               </svg>
    //             </a>
    //             <a class="text-gray-500">
    //               <svg
    //                 fill="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 class="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //               </svg>
    //             </a>
    //             <a class="text-gray-500">
    //               <svg
    //                 fill="currentColor"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 class="w-5 h-5"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //               </svg>
    //             </a>
    //           </span>
    //         </div> */}
              <p class="leading-relaxed"></p>

              <div class="flex justify-between">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Ghc {property.apartmentPrice}
                </span>

                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  <Link to={`/checkout/${property.id}`}>Book room</Link>
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <Carous />
        <div className="flex justify-center items-center mx-5">
          <Iframe

            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63404.10035228852!2d-1.587294406995448!3d6.677089314065932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb948a094adce1%3A0x8f7f629ac972b054!2sAyeduase%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1670058363541!5m2!1sen!2sgh"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            height="320px"
            width="600px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </section>
    </div>
  );

};

export default Detailpage;
