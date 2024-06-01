import React from "react";
import { Link } from "react-router-dom";

export const Notice = () => {
  return (
    <div className="w-full z-10">
      <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-2  text-center">
        <p className="me-5 inline-block text-white font-extrabold">
          Join our coding contest, CodeXcellence, to showcase your coding
          skills.
        </p>
        <Link to="/reg">
          <div
            className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
            href="/reg"
          >
            Register Now
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
