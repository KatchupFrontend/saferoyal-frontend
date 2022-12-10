import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const House = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-gray-500 p-5 mx-5 py-2 my-5"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className=" overflow-x-scroll   flex flex-row   justify-center items-center text-white shadow-2xl ">
          {/* <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description> <Dialog.Title>Deactivate account</Dialog.Title> */}

          <div className="p-2">
            <img
              src="../assets/pic01.jpg"
              className=""
              alt=""
              height={""}
              width={""}
            />
          </div>
          <div className="p-2">
            <img src="../assets/pic01.jpg" alt="" height={""} width={""} />
          </div>
          <div className="p-2">
            <img src="../assets/pic01.jpg" alt="" height={""} width={""} />
          </div>
          <div className="p-2">
            <img src="../assets/pic01.jpg" alt="" height={""} width={""} />
          </div>
          {/* 
          <div className="flex justify-between">
            <button
              className="bg-gray-500 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              Deactivate
            </button>
            <button
              className="bg-gray-700 px-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div> */}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default House;

function MyDialog() {}
