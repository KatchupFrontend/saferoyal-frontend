import React, { useState, useRef } from "react";
import PaystackPop from "@paystack/inline-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// import Layout from "../../components/Layout";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaRestroom } from "react-icons/fa";
import Layout from "../../components/Layout";

const Checkout = () => {
  const router = useNavigate();
  const [detail, setDetail] = useState("");
  const [sendPaymentDetails, setSendPaymentDetails] = useState(false);
  const [transactionRef, setTransactionRef] = useState(false);
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const amount = detail.apartmentPrice;

  const getSingleDetail = async () => {
    let reqOptions = {
      url: `https://saferoyalhostel.pythonanywhere.com/api/room/${id}/`,
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    // console.log(response.data);
    setDetail(response.data);
  };

  useEffect(() => {
    getSingleDetail();
  }, []);

  const paywithPaystack = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_live_ceb5e28498396c908f35a84006294fb2c4360b36",
      email: email,
      amount: amount * 100,

      //Successful payment
      onSuccess(transaction) {
        let msg = `Transaction Successful ${transaction.reference}`;
        alert(msg);
        setSendPaymentDetails(true);
        setTransactionRef(transaction.ref);
        form.reset();
      },
      onCancel() {
        alert("Transaction Cancelled");
      },
    });
  };

  const sendDetails = async (ref) => {
    // e.preventDefault();
    console.log("God is Good");
    let bodyContent = new FormData();
    bodyContent.append("email", email);
    bodyContent.append("phone", phone);
    bodyContent.append("amount", detail.apartmentPrice);
    bodyContent.append("booked_room", detail.id);
    // bodyContent.append("ref", transaction.reference);
    bodyContent.append("ref", ref);

    let response = await fetch(
      "https://saferoyalhostel.pythonanywhere.com/api/payments/",
      {
        method: "POST",
        body: bodyContent,
      }
    );
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (sendPaymentDetails) {
      sendDetails(transactionRef);
      setSendPaymentDetails(false);
      // console.log("Kul Lord");
    }
  }, [sendPaymentDetails]);

  return (
    <div>
      <Toaster/>
      <Layout>
        <main>
          <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container ">
              <div className="flex flex-col justify-start items-start w-full space-y-9">
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full ">
                  <div className="h-auto flex flex-col sm:flex-row xl:flex-col justify-center items-center   sm:py-0 xl:py-10 px-10 xl:w-full">
                    <img src={detail.room1} alt="pic" className="" />
                  </div>

                  <form className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5 ">
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
                        type="tel"
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
                        <p className="text-base leading-4">
                          Pay Ghc {detail.apartmentPrice}{" "}
                        </p>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Checkout;
