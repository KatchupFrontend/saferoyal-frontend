import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Properties = () => {
   const [room, setRooms] = useState([])
    const {id} = useParams();
    

     useEffect(() => {
       fetch("http://localhost:8000/api/rooms/?category="+id)
          .then((res) => {
            return res.json();
         })
        .then((data) => {
           setRooms(data);
           console.log(data)
         });
     }, []);

  return (
    <div>
      {/* {room.map((room) => (
        <div>
          <h1>{room.apartmentName}</h1>
          <h1>{room.roomlocation}</h1>
          <h1>{room.roomprice}</h1>
          <h1>{room.roomdescription}</h1>
          <h1>{room.roomimage}</h1>
        </div>
          ))}
    </p> */}

      {/* <div className="max-w- m-auto px-4 py-12">
        <h1 className="">Our Availble Rooms</h1>

        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold">Filter Type</p>
            <div className="flex  flex-wrap">
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => setRooms(data)}
              >
                All
              </button>
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2 hover:bg-gray-600 hover:text-white"
                onClick={() => filterType("Hostel")}
              >
                Hostels
              </button>
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterType("Homestel")}
              >
                Homestels
              </button>
            </div>
          </div>

          <div>
            <form action="">
              <p className="font-bold ">Search</p>
              <input
                type="text"
                className="border-gray-600  border-2 flex items-center m-1 p-2 rounded-xl form-control"
                onChange={filterSearch}
                placeholder="type"
              />
            </form>
          </div>

          <div>
            <p className="font-bold ">Filter Persons</p>
            <div className="flex justify-between max-w-[300px]">
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("2 in 1")}
              >
                2 in 1
              </button>
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("3 in 1")}
              >
                3 in 1
              </button>
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("4 in 1")}
              >
                4 in 1
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold">Filter Type</p>
            <div className="flex  flex-wrap">
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => setRooms(data)}
              >
                All
              </button>
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2 hover:bg-gray-600 hover:text-white"
                onClick={() => filterType("Hostel")}
              >
                Hostels
              </button>
              <button
                className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterType("Homestel")}
              >
                Homestels
              </button>
            </div>
          </div>

          <div>
            <form action="">
              <p className="font-bold ">Search</p>
              <input
                type="text"
                className="border-gray-600  border-2 flex items-center m-1 p-2 rounded-xl form-control"
                onChange={filterSearch}
                placeholder="type"
              />
            </form>
          </div>

          <div>
            <p className="font-bold ">Filter Persons</p>
            <div className="flex justify-between max-w-[300px]">
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("2 in 1")}
              >
                2 in 1
              </button>
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("3 in 1")}
              >
                3 in 1
              </button>
              <button
                className="px-4 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                onClick={() => filterPerson("4 in 1")}
              >
                4 in 1
              </button>
            </div>
          </div>
        </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 pt-4 ">
        {
          // data.filter((item) => {
          //     return search.toLowerCase() === ''? item
          //     :item.name.toLowerCase().includes(search);

          // })
          room.map((room) => (
            <Link to={`/details/${room.id}`}>
              <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-700 duration-300">
                <img
                  key={id}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={room.apartmentImage}
                  alt="Room"
                />
                <div className="p-2">
                  <h2 className="tracking-widest text-sm title-font font-bold text-gray-400 mb-1">
                    {room.apartmentName}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 m">
                    Ghc {room.apartmentPrice}
                  </h1>
                  <div className="flex justify-between">
                    <p className="leading-relaxed mb-1">price</p>
                    <p className="leading-relaxed mb-1">Location</p>
                  </div>

                  {/* <div className="flex items-center flex-wrap ">
  </div> */}
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};


export default Properties