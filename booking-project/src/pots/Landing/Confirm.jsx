import React from 'react'

const Confirm = () => {
  return (
    <div>
      <div className="grid h-screen place-items-center">
        <div class="   flex   md:py-8   flex-col items-center justify-center  border-3 border-gray-700">
          <div className=" md:p-10 border p-4 border-gray-400">
            <h2 class="text-gray-800 text-lg mb-1 font-medium title-font ">
              Order Summary
            </h2>
            <p class="leading-relaxed mb-5 text-blue-700">
              Evandy Hostel(Kumasi,Ayeduase)
            </p>
            <p class="leading-relaxed mb-5 text-gray-700">4 in 1</p>
            <p class="leading-relaxed mb-5 text-gray-700">First floor</p>
            <div>
              <p class="leading-relaxed mb-5 text-gray-700">
                Price: Ghc 3,984.00
              </p>
            </div>
    
            <div class="relative mb-4">
                {/* {
                    bank ? (
                        <div>
                             <label for="phone" class="leading-7 text-sm text-gray-600">
                Account number
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Enter your Account number"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              /> </div> ) :(
                        <div>
                                <label for="phone" class="leading-7 text-sm text-gray-600">
                Phone
                </label>
                <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Enter your contact number"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                        </div>
              )
                } */}
              <label for="phone" class="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                type="phone"
                id="email"
                name="email"
                placeholder="Enter your MoMo number"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <button className="text-center px-3 py-2 bg-blue-500 w-full text-white">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm