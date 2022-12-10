import React from 'react'
import pic1 from '../assets/images/rooms/pic02.jpg'
import pic2 from "../assets/images/rooms/pic04.jpg";
import pic3 from "../assets/images/rooms/pic03.jpg";



const cards = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font py-3">
        <h1 className="text-center text-3xl font-bold text-white px-3">
          Explore these places with Us
        </h1>
        <p className="text-center text-md px-5">
          Lets help you book a room from these top places very easy and fast.
        </p>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-64 md:h-36 w-full object-cover object-center"
                  src={pic1}
                  alt="place"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 ">
                    Golden Tulip Hotel- Kumasi
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-64 md:h-36 w-full object-cover object-center"
                  src={pic3}
                  alt="place"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                    Evandy Hostel-Kumasi
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-64 md:h-36 w-full object-cover object-center"
                  src={pic2}
                  alt="place"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                    Fosuah Homestel-Kumasi
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default cards