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
                      <Link href="javascript:void(0)">
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
                      <Link href="javascript:void(0)">
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
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
