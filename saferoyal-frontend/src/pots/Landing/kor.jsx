import React from 'react'
import { data } from '../../data/data';
import { useParams } from 'react-router-dom';


const Checkout = () => {
   const { id } = useParams();
   const room = data.find((room) => {
     return room.id === parseInt(id);
   });
   console.log(room);
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <form action="">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Booking Details
              </h1>
              <p class="leading-relaxed mb-4">{room.name}</p>

              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Floor type</span>
                <span class="ml-auto text-gray-900">{room.floortype}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Number in room</span>
                <span class="ml-auto text-gray-900">{room.persons}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Location</span>
                <span class="ml-auto text-gray-900">Kumasi,Ayeduase</span>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  Ghc {room.price}.00
                </span>
              </div>
            </div>

            <div class="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0   ">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Personal Details
              </h2>

              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Contact
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Pay
              </button>
              <p class="text-xs text-red-500 mt-3">
              This information will be needed at check in
              .
              </p>
            </div>

            {/* class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded */}
          </div>
        </form>
      </div>
    </section>
    // <div className="grid h-screen place-items-cente ">
    //   <div class="   flex   md:py-8   flex-col items-center justify-center  border-3 border-gray-700">
    //     <div className=" p-4 shadow-2xl">
    //       <h2 class="text-gray-800 text-lg mb-1 font-medium title-font "></h2>
    //       <p class="leading-relaxed mb-5 text-gray-700">
    //         Post-ironic portland shabby chic echo park, banjo fashion axe
    //       </p>

    //       <div class="mb-4">
    //         <label for="name" class="leading-7 text-sm text-gray-600">
    //           Full Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //       <div class="relative mb-4">
    //         <label for="email" class="leading-7 text-sm text-gray-600">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>
    //       <div class="relative mb-4">
    //         <label for="phone" class="leading-7 text-sm text-gray-600">
    //           Phone
    //         </label>
    //         <input
    //           type="phone"
    //           id="email"
    //           name="email"
    //           placeholder="Enter your contact number"
    //           class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //         />
    //       </div>

    //       <div className="text-center">
    //         <button className="text-center px-3 py-2 bg-blue-500 w-full text-white">
    //           <Link to="/payment">Proceed to payment</Link>
    //         </button>
    //       </div>
    //       <p class="text-sm text-red-500 mt-3">
    //         Please these will be required when coming for a room key
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Checkout


