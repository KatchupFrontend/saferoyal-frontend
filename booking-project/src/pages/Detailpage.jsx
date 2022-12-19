import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
//import Carous from "../components/carous";
import Iframe from "react-iframe";
import Layout from "../components/Layout";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */





const Detailpage = () => {
  const [property, setProperty] = useState("");
  const { id } = useParams();

  const getSingleProperty = async () => {
    let reqOptions = {
      url: `https://saferoyalhostel.pythonanywhere.com/api/room/${id}/`,
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
      <Layout>
        <section class="text-gray-600 body-font overflow-hidden bg-gray-100">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={property.room1}
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

                <div class="flex justify-between my-4">
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

            <div className="container mx-auto">
              <div className="flex items-center justify-center w-full h-full py-14 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider
                  className="lg:block hidden"
                  naturalSlideWidth={100}
                  isIntrinsicHeight={true}
                  totalSlides={12}
                  visibleSlides={2}
                  step={1}
                  infinite={true}
                >
                  <div className="w-full relative flex items-center justify-center">
                    <ButtonBack
                      role="button"
                      aria-label="slide backward"
                      className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                      id="prev"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1L1 7L7 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                      <Slider>
                        <div
                          id="slider"
                          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                        >
                          <Slide index={0}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={1}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.romm2}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 1
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>

                          <Slide index={2}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={3}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={4}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={5}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={6}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={7}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={8}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={9}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                        </div>
                      </Slider>
                    </div>
                    <ButtonNext
                      role="button"
                      aria-label="slide forward"
                      className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      id="next"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonNext>
                  </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider
                  className="lg:hidden md:block hidden"
                  naturalSlideWidth={100}
                  isIntrinsicHeight={true}
                  totalSlides={12}
                  visibleSlides={2}
                  step={1}
                  infinite={true}
                >
                  <div className="w-full relative flex items-center justify-center">
                    <ButtonBack
                      role="button"
                      aria-label="slide backward"
                      className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                      id="prev"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1L1 7L7 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                      <Slider>
                        <div
                          id="slider"
                          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                        >
                          <Slide index={0}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 1
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={1}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={2}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={3}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={4}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={5}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={6}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={7}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={8}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={9}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={10}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={11}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                        </div>
                      </Slider>
                    </div>
                    <ButtonNext
                      role="button"
                      aria-label="slide forward"
                      className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      id="next"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonNext>
                  </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider
                  className="block md:hidden "
                  naturalSlideWidth={100}
                  isIntrinsicHeight={true}
                  totalSlides={12}
                  visibleSlides={1}
                  step={1}
                  infinite={true}
                >
                  <div className="w-full relative flex items-center justify-center">
                    <ButtonBack
                      role="button"
                      aria-label="slide backward"
                      className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                      id="prev"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1L1 7L7 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                      <Slider>
                        <div
                          id="slider"
                          className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                        >
                          <Slide index={0}>
                            <div className="flex h-64 flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 1
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={1}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={2}>
                            <div className="flex  flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={3}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={4}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={5}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room1}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                          <Slide index={6}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                  Catalog 2
                                </h2>
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    Minimal Interior
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Slide>
                        </div>
                      </Slider>
                    </div>
                    <ButtonNext
                      role="button"
                      aria-label="slide forward"
                      className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      id="next"
                    >
                      <svg
                        width={8}
                        height={14}
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Detailpage;
