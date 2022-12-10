import React from 'react'
import {AiFillSchedule, AiFillSafetyCertificate} from "react-icons/ai";
import {HiCash} from "react-icons/hi";
import {FaFistRaised} from "react-icons/fa";

const Serv = () => {
  const services = [
    {
      id:"1",
      type:"Easy booking",
      brief:"Book a room easily on our  platform with just a few clicks",
      logo:<AiFillSchedule size={50} className="items-center flex justify-center text-blue-500"/>,

    },
    {
      id:"2",
      type:"High security",
      brief:"We provide high security to our customers on bookings",
      logo:<AiFillSafetyCertificate size={50}  className="items-center flex justify-center text-blue-500"/>,

    },
    {
      id:"3",
      type:"Affordable pricing",
      brief:"We give you the best prices of rooms on the market.",
      logo:<HiCash size={50}  className="items-center flex justify-center text-blue-500"/>,

    },
    {
      id:"4",
      type:"Reliable",
      brief:"Always assured of providing you your booked room anywhere, anytime.",
      logo:<FaFistRaised  size={50} className="items-center flex justify-center text-blue-500"/>,

    }
  ]
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Why Choose Us</h1>
        </div>
    <div class="flex flex-wrap -m-4 text-center">

      {
       services.map(({id,type,logo,brief}) => (
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-4 border-gray-800 px-4 py-6 rounded-lg hover:border-gray-500 duration-200 hover:scale-75 shadow-xl">
          <div className='flex justify-center'>
          {logo}
          </div>

          
          <p class="leading-relaxed text-white">{type}</p>
          <p>{brief}</p>
        </div>
      </div>

       ))
      }
     
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Serv