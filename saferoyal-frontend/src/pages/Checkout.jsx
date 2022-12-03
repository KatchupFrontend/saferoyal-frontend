import React, { useState } from "react";
import PaystackPop from '@paystack/inline-js'

const Checkout = () => {

  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const paywithPaystack = (e) => {
    e.preventDefault();

     const paystack = new PaystackPop()
     paystack.newTransaction({
       key: "pk_test_8a43bfaae12f785768e08d5e7adf398844bf69b9",
       email: email, 
       amount: amount,
       onSuccess(transaction) {
        let msg = `Transaction Successful ${transaction.reference}`
        alert(msg)
        },
        onCancel(){
          alert("Transaction Cancelled")
          
        }
     })
  }

      
    

      
      




  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p>Dancing Shoes</p>
            <p></p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" onClick={paywithPaystack}>Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


// import React, { Component } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// import axios from "axios";
// import {PaystackButton} from 'react-paystack';



// const Checkout = () => {
// const [detail, setDetail] = useState("");
// const { id } = useParams();  
// const publicKey = "pk_test_8a43bfaae12f785768e08d5e7adf398844bf69b9";   
// const [amount, setAmount] = useState(0);
// const [email, setEmail] = useState("");
// const [name, setName] = useState("");
// const [phone, setPhone] = useState("");


//   const getSingleDetail = async () => {
//     let reqOptions = {
//       url: `http://localhost:8000/api/room/${id}/`,
//       method: "GET",
//     };

//     let response = await axios.request(reqOptions);
//     console.log(response.data);
//     setDetail(response.data);
//   };

//   useEffect(() => {
//     getSingleDetail();
//   }, []);
//   console.log(detail);



// const componentProps = {
//   email,
//   amount,
//   metadata: {
//     name,
//     phone,
//   },

// publicKey,
// text: "Pay Now",
//   onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
//   onClose: () => alert("Wait! Don't leave :("),
// };


//   return (
//     <section class="text-gray-600 body-font overflow-hidden xl:mx-8">
//       <div className="flex justify-center items-center">
//         <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
//           <div className="flex flex-col justify-start items-start w-full space-y-9">
//             <div className="flex justify-start flex-col items-start space-y-2">
//               <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
//                 <svg
//                   className="fill-stroke"
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M2.91681 7H11.0835"
//                     stroke="currentColor"
//                     strokeWidth="0.666667"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M2.91681 7L5.25014 9.33333"
//                     stroke="currentColor"
//                     strokeWidth="0.666667"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M2.91681 7.00002L5.25014 4.66669"
//                     stroke="currentColor"
//                     strokeWidth="0.666667"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <p className="text-sm leading-none">Back</p>
//               </button>
//               <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
//                 Checkout
//               </p>
//               <p className="text-base leading-normal sm:leading-4 text-gray-600">
//                  Rooms {">"} RoomDetail {">"} Checkout
//               </p>
//             </div>
//             <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
//               <div className="sm:mt-0 xl:my-10  w-full sm:w-full ">
//                 <img src={detail.apartmentImage} alt="headphones" />
//               </div>

//               <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
//                 <h1 className="text-center font-bold text-lg">
//                   Booking Summary
//                 </h1>

//                 <label className="mt-8 text-base leading-4 text-gray-800">
//                   Card details
//                 </label>

//                 <label className="mt-8 text-base leading-4 text-gray-800">
//                   Name of Apartment
//                 </label>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <div className=" p-4 w-full text-base leading-4  text-gray-600">
//                       <h3>{detail.apartmentName}</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <div className=" p-4 w-full text-base leading-4  text-gray-600">
//                       <h3></h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <div className=" p-4 w-full text-base leading-4  text-gray-600">
//                       <h3>{detail.floortype} floor</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-2 flex-col">
//                   <div>
//                     <div className=" p-4 w-full text-base leading-4  text-gray-600">
//                       <h3>{detail.persons}</h3>
//                     </div>
//                   </div>
//                 </div>

//                 <form>
//                   <div>
//                     <label className="mt-8 text-base leading-4 text-gray-800">
//                       Full name
//                     </label>
//                     <div className="mt-2 flex-col">
//                       <div>
//                         <input
//                           className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                           type="text"
//                           id="name"
//                           onChange={(e) => setName(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <label className="mt-8 text-base leading-4 text-gray-800">
//                       Email
//                     </label>
//                     <div className="mt-2 flex-col">
//                       <div>
//                         <input
//                           className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                           type="text"
//                           id="email"
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <div className="mt-2 flex-col">
//                       <div>
//                         <input
//                           className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                           type="text"
//                           id="amount"
//                           onChange={(e) => setAmount(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <label className="mt-8 text-base leading-4 text-gray-800">
//                       Phone
//                     </label>
//                     <div className="mt-2 flex-col">
//                       <div>
//                         <input
//                           className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
//                           type="text"
//                           id="phone"
//                           onChange={(e) => setPhone(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//                 <PaystackButton {...componentProps} />
//                 {/* <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
//                       <div>
//                         <p className="text-base leading-4">
//                           Pay Ghc {detail.apartmentPrice}
//                         </p>
//                       </div>
//                     </button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded */}
//     </section>
//   );
// };

// export default Checkout;
