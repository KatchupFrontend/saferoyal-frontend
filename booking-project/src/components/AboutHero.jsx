import React from 'react'
import aboutpic from '../assets/images/rooms/pic06.jpg'
const AboutHero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="her"
              src={aboutpic}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Story
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              With only a few clicks, Safe Royal connects you to your ideal
              hostel/homestel. Every time you visit our website, Safe Royal offers you
              the information you need to search through hundreds of booking
              possibilities and discover the hostel or homestel of your dreams. We are
              revolutionizing hostel and homestel booking in Ghana by eliminating friction,
              connecting students with possible hostels, a variety of
              transportation alternatives, and information on amazing places to
              stay while attending school. Over 100 students across top universities have received
              the ideal apartment from us since our launch in December 2022, all
              without the hassle of dealing with a middleman and at very
              reasonable pricing. Our goal is to link students with the ideal
              hostels and homestels in an efficient, quick, and affordable manner.
            </p>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero