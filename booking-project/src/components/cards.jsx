import React from 'react'
import pic1 from '../assets/knust.png'
import pic2 from "../assets/amm.jpeg";
import pic3 from "../assets/Energy.jpg";



const cards = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 title-font py-8">
        <h1 className="text-center text-3xl font-bold text-white px-3">
          Explore these places with Us
        </h1>
        <p className="text-center text-md px-5">
          Lets help you book a room from these top places very easy and fast.
        </p>
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4">
            <Link to={"/Login"}>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src={pic1}
                    alt="place"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 ">
                      Kwame Nkrumah University of Science and Technology- Kumasi
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <div class="p-4 md:w-1/3">
              <Link to={"/Login"}>
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src={pic2}
                    alt="place"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                      Akenten Appiah-Menka University College-Kumasi
                    </h2>
                  </div>
                </div>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link to={"/Login"}>
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src={pic3}
                    alt="place"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-sm title-font font-medium text-gray-300 mb-1">
                      University Of Energy and Renewal Resources-Sunyani
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default cards