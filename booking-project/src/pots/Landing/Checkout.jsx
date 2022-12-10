import React, { useState } from "react";
import PaystackPop from '@paystack/inline-js'
 import { useEffect } from "react";
 import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

  import axios from "axios";

const Checkout = () => {
const [detail, setDetail] = useState("");
 const { id } = useParams();

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const amount = 1000000;





  const getSingleDetail = async () => {
    let reqOptions = {
      url: `http://localhost:8000/api/room/${id}/`,
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
    setDetail(response.data);
  };

  useEffect(() => {
    getSingleDetail();
  }, []);


// let bodyContent = new FormData();
//       bodyContent.append("fullname", name);
//       bodyContent.append("email", email);
//       bodyContent.append("password", password);
//       bodyContent.append("phone_number", phone);
 

  
  const paywithPaystack = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8a43bfaae12f785768e08d5e7adf398844bf69b9",
      email: email,
      amount: amount,
      //Successful payment
      onSuccess(transaction) {
        let msg = `Transaction Successful ${transaction.reference}`;
        alert(msg);
      
      },
      onCancel() {
        alert("Transaction Cancelled");
      },
    });
  };

  const sendDetails = async (e) => {
    e.preventDefault();
    let bodyContent = new FormData();
    bodyContent.append("email", email);
    bodyContent.append("phone", phone);
    bodyContent.append("amount", amount);
    bodyContent.append("booked_room", detail.id);
    bodyContent.append("booked_by", name);
    bodyContent.append("ref", transaction.reference);

    let response = await fetch("http://localhost:8000/api/payments/", {
      method: "POST",
      body: bodyContent,
    });
    let data = await response.json();
  };

  useEffect(() => {
    sendDetails();
  }, []);
  


  return (
    <div>
    <Layout>
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container ">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full ">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center   sm:py-0 xl:py-10 px-10 xl:w-full">
              <img src={detail.apartmentImage} alt="" />
            </div>
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5 ">
              <label className="mt-8 text-base leading-4 text-gray-800">
                Name
              </label>
              <div className="mt-8">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                />
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800">
                Email
              </label>
              <div className="mt-8">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800">
                Phone
              </label>
              <div className="mt-8">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type="submit"
                onClick={paywithPaystack}
                className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
              >
                <div>
                  <p className="text-base leading-4">Pay $54652</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</Layout>
</div>
   
  );
};

export default Checkout;

