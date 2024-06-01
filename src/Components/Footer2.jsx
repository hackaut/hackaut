// import React from "react";
import {
  FaLinkedin,
  // FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className=" lg:px-16 bg-blue-200 pt-8 pb-6 border-t-2 border-blue-700 ">
      <div className="container1 mx-auto px-4">
        <div className="lg:flex lg:text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="logofoot"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  padding: '15px'}}
            >
            <img
            className="logofooter"
            src={logo}
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
          />
            </div>
            <h5 className="text-lg mt-0 mb-2 text-blue-800">
              In our development community, we focused on brushing up skills,
              team management and various other aspects of professional life .
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2 justify-center">
              <a href="https://www.linkedin.com/company/hackaut-mackaut/">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  type="button"
                >
                  <FaLinkedin className="fab fa-linkedin w-12 h-12" ></FaLinkedin>
                </button>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092756078107&mibextid=ZbWKwL">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  type="button"
                >
                  <FaFacebook className="fab w-12 h-12"></FaFacebook>
                </button>
              </a>
              <a href="https://www.instagram.com/hackaut.makaut/">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  type="button"
                >
                  <FaInstagram className="fab fa-dribbble w-12 h-12"></FaInstagram>
                </button>
              </a>
              <a href="https://github.com/hackaut">
                <button
                  className="bg-white text-black shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none"
                  type="button"
                >
                  <FaGithub className="fab fa-github w-12 h-12"></FaGithub>
                </button>
              </a>
            </div>
          </div>
          {/* <div className="w-full lg:w-6/12 px-4 ">
            <div className="lg:flex lg:items-top mb-6 md:flex sm:flex">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-disc list-inside text-blueGray-600">
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/about"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className=" hover:text-gray-800 font-semibold text-sm"
                      href="/blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-disc list-inside text-blueGray-600">
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/lisence"
                    >
                      License
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/terms&condition"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="hover:text-gray-800 font-semibold text-sm"
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <div className="hover:text-gray-800 cursor-pointer">
                HACKAUT Inc. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
