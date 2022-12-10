import React from 'react'

const HomeHero = () => {
  return (
    <div className="text-white md:text-left  md:pl-4 text-center flex-col justify-center absolute  top-1/2 ">
      <h1 className="text-4xl font-bold  px-2">
        Book affordable rooms with
        <span className="hover:text-blue-500"> SafeRoyal</span>
      </h1>
      <p className="text-xl px-4">
        Find the best rooms at the best prices with our help.
      </p>
      <button className="m-2 bg-blue-500 rounded-lg px-10 py-2 hover:bg-blue-600">
        Find a room
      </button>
    </div>
  );
}

export default HomeHero