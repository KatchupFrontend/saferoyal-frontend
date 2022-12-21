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
                class="lg:w-1/2 w-full lg:h-[400px] h-64 object-cover object-center rounded"
                src={property.room1} 
                height={300}
                width={300}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {property.address}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {property.roomType}
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
                  totalSlides={7}
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
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                
                                <div className="flex h-full items-end pb-6">
                                  
                                </div>
                              </div>
                            </div>
                          </Slide>

                          <Slide index={1}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room2}
                                alt="black chair and white table"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                
                                <div className="flex h-full items-end pb-6">
                                  
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

                                <div className="flex h-full items-end pb-6">
                                  
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

                                <div className="flex h-full items-end pb-6">
                                  
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

                                <div className="flex h-full items-end pb-6">
                                  
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

                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                  totalSlides={7}
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
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                  totalSlides={7}
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
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                src={property.room3}
                                alt="sitting area"
                                className="object-cover object-center w-full"
                              />
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
                                
                                <div className="flex h-full items-end pb-6">
                                  
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
