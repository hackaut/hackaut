// import React from "react";
import { NavLink } from "react-router-dom";
import ErrorMsg from "../assets/105.svg"

const Error = () => {
  return (
    <section className="page_404 font-bold mb-16 bg-white">
      <div className="container1">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <img className="low" src={ErrorMsg}/>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Looks like you&apos;re lost</h3>
                <p>The page you are looking for is not available!</p>
                <NavLink to="/" className="link_404 transition duration-200 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Go to Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
