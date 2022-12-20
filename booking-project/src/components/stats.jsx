import React from 'react'
import pic5 from '../assets/images/rooms/pic04.jpg'


const stats = () => {
  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-white">The most secured properties coming your way</h1>
        <div class="leading-relaxed">With over 500 appartments on our platform, we help our customers find a sound sleep. .</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">20+</h2>
        <p class="leading-relaxed">Hostels</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">10+</h2>
        <p class="leading-relaxed">Homestels</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">50+</h2>
        <p class="leading-relaxed">Rooms</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-white">2</h2>
        <p class="leading-relaxed">Schools</p>
      </div>
      </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src={pic5} alt="stats"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default stats