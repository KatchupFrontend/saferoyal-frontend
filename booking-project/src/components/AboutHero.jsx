import React from 'react'
import aboutpic from '../assets/images/rooms/pic06.jpg'
const AboutHero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="her" src={aboutpic}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Story
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">Opion is a technology-solutions company that is committed to leveraging cutting-edge technology to offer wide-ranging products and services that are tailored to the unique needs of clients. Established in 2022, we aspire to be an active player in the ever-evo as societies have evol, so have clients' needs.</p>
      <div class="flex justify-center">
       
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutHero