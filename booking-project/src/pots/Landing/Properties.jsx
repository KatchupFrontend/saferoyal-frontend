import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Properties = () => {
  const [rooms, setRooms] = useState(data);
  const [search, setSearch] = useState("");

  const filterType = (category) => {
    setRooms(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPerson = (persons) => {
    setRooms(
      data.filter((item) => {
        return item.persons === persons;
      })
    );
  };

  const filterSearch = (e) => {
    setSearch(e.target.value);
    setRooms(
      data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <div className="max-w- m-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center">Our Availble Rooms</h1>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 pt-4 ">
        {
          // data.filter((item) => {
          //     return search.toLowerCase() === ''? item
          //     :item.name.toLowerCase().includes(search);

          // })
          rooms.map((item, id) => (
            <Link to={"/details/" + item.id}>
              <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-700 duration-300">
                <img
                  key={id}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.image}
                  alt="Room"
                />
                <div className="p-2">
                  <h2 className="tracking-widest text-sm title-font font-bold text-gray-400 mb-1">
                    {item.name}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 m">
                    Ghc {item.price}
                  </h1>
                  <div className="flex justify-between">
                    <p className="leading-relaxed mb-1">{item.persons}</p>
                    <p className="leading-relaxed mb-1">{item.location}</p>
                  </div>
                  <p className="leading-relaxed mb-1">{item.category}</p>

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

export default Properties;
