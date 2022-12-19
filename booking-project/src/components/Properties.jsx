import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingHero from "./LandingHero";
import Layout from "./Layout";
import NavLanding from './NavLanding'

const Properties = () => {
  const [room, setRooms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://saferoyalhostel.pythonanywhere.com/api/rooms/?category=" + id
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRooms(data);
        console.log(data);
      });
  }, []);

  const filterType = (type) => {
    const filteredData = room.filter((item) => item.roomType === type);
    setRooms(filteredData);
    console.log(filteredData);
  };

  const filterSearch = (e) => {
    const searchWord = e.target.value;
    const filteredData = room.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    setRooms(filteredData);
  };

  const filterPerson = (person) => {
    const filteredData = room.filter((item) => item.persons === person);
    setRooms(filteredData);
    console.log(filteredData);
  };

  return (
    <div>
      <Layout>
        <LandingHero />
        <div>
          <div className="max-w- m-auto px-4 py-12">
            <h1 className="text-center font-bold text-3xl ">
              Our Availble Rooms
            </h1>

            {/**jjjnj */}

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
                    onClick={() => filterType("HOSTEL")}
                  >
                    Hostels
                  </button>
                  <button
                    className="px-4 m-1 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                    onClick={() => filterType("HOMESTEL")}
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
                    className="border-gray-600  border flex items-center m-1 p-2 rounded-md form-control  w-full"
                    onChange={filterSearch}
                    placeholder="type apartment name"
                  />
                </form>
              </div>

              <div>
                <p className="font-bold ">Filter Persons</p>
                <div className="flex justify-between max-w-[300px]">
                  <button
                    className="px-2 m-2 rounded-lg border-2 border-gray-400 py-1  text-gray-600 hover:bg-gray-600 hover:text-white"
                    onClick={() => filterPerson("1 in 1")}
                  >
                    1 in 1
                  </button>
                  <button
                    className="px-2 m-2 rounded-lg border-2 border-gray-400 py-1  text-gray-600 hover:bg-gray-600 hover:text-white"
                    onClick={() => filterPerson("2 in 1")}
                  >
                    2 in 1
                  </button>
                  <button
                    className="px-2 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                    onClick={() => filterPerson("3 in 1")}
                  >
                    3 in 1
                  </button>
                  <button
                    className="px-2 m-2 rounded-lg border-2 border-gray-400 py-2  text-gray-600 hover:bg-gray-600 hover:text-white"
                    onClick={() => filterPerson("4 in 1")}
                  >
                    4 in 1
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 pt-4 pb-8">
              {room.map((room) => (
                <Link to={`/details/${room.id}`}>
                  <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden hover:border-blue-700 duration-300 mx-5">
                    <img
                      key={id}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={room.room1}
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
                        <p className="leading-relaxed mb-1">{room.persons}</p>
                        <p className="leading-relaxed mb-1">{room.address}</p>
                      </div>

                      {/* <div className="flex items-center flex-wrap ">
  </div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Properties;
