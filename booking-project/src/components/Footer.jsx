import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="">
      <footer id="footer" className="relative z-50 bg-gray-900 ">
        <div className=" border-t  border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link to={"/services"}>
                        <a className="text-lg lg:text-md leading-none hover:text-brand dark:hover:text-brand text-gray-50">
                          Services
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          Hostels
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          Homestels
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          Apartments
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <a className="text-lg lg:text-md leading-none hover:text-brand dark:hover:text-brand text-gray-50">
                          Links
                        </a>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link to={"/about"}>
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to={"/contact"}>
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to={"/service"}>
                        <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                          Services
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <Link href="javascript:void(0)">
                      <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                        Reliable
                      </a>
                    </Link>
                  </li>

                  <li className="mt-6">
                    <Link href="javascript:void(0)">
                      <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                        Easy Booking
                      </a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link href="javascript:void(0)">
                      <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                        Secured apartments
                      </a>
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link href="javascript:void(0)">
                      <a className="text-lg lg:text-md leading-none hover:text-gray-500 dark:hover:text-brand text-gray-50">
                        Affordable pricing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <img src={logo} alt="" className="w-24 h-4" />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 SafeRoyal —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-400 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Zap Technologies
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="text-gray-400">
              <p>
                {" "}
                <span className="text-gray-200">Contact us on:</span> 233-5599-11251
              </p>
            </div>
           
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
