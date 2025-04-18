import { useState, useEffect } from "react";
import Picture from "../assets/makaut.jpg";

export const Hero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gradient-to-r from-blue-50 text-blue-100 border-b-8 border-blue-400">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-blue-100 transform -translate-x-1/2 lg:block z-10"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className={`object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-50'}`}
          src={Picture}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-blue-100">
            Welcome to
          </p>
          <h2 className="mb-5 font-sans text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            HACKAUT
            <br className="hidden md:block" />
            <span className="text-3xl"> Coding Club of </span>
            <span className="inline-block text-blue-400 dustin-text-effect">
              MAKAUT
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-900 md:text-lg">
            MAKAUT&apos;s premier tech club, HACKAUT, cultivates innovation, fosters
            skill development, and encourages collaboration, creating a vibrant
            community of tech enthusiasts. Join us Today.
          </p>
          <div className="flex items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Join Us
            </a>
            <a
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
