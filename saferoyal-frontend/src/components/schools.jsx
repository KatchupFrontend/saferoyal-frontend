import React from 'react'
import Knust from '../assets/images/rooms/room1.jpg'

const schools = () => {

    const campus = [
      {
        name: "Kwame Nkrumah UNiversity of Science and Technology",
        location: "Kumasi",
        image:Knust,
            },
      {
        name: "University of Cape Coast",
        location: "Kumasi",
        image: Knust,
      },
      {
        name: "Appiah-Akenten Menkah University of Science and Technology",
        location: "Kumasi",
        image:Knust,
               },
     
        {
        name: "University of Mines and Technology, (UMaT)",
        location: "Kumasi",
        image:Knust,
            },
    ];
  return (
    <section className="text-gray-400 body-font bg-gray-900 py-6">
      <div className="container px-5  mx-auto">
        <div className='mb-8'>
          <h1 className="text-center text-3xl font-bold text-white px-3">
            Where We Work
          </h1>
          <p className="text-lg text-center">
           We provide hostels and homestels near these top schools in Ghana.</p>
        </div>
        <div className="flex flex-wrap -m-4 ">
            {campus.map((campus) => (
          <div className="xl:w-1/4 md:w-1/2 p-3">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-2"
                src={campus.image}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                {campus.location}
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                {campus.name}
              </h2>
              
            </div>
          </div>
            ))}

        </div>
      </div>
    </section>
  );
}

export default schools