import React, { useState } from "react";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [hasLaptop, setHasLaptop] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 border rounded-lg shadow-xl mb-10 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">REGISTRATION FORM</h1>
      <p className="mb-4 font-bold">Rulls for Coding Contest CodeXecelence:</p>
      <ol className="list-decimal ml-6 mb-4">
        <li>It will be a 2 hours event.</li>
        <li>Everyone please bring your own laptop with fully charged.</li>
        <li>
          If anyone doesn't have their own laptop, some lab room will be
          allocated for them.
        </li>
        <li>
          Every participant will get a participation certificate which will help
          them in the MAR activity.
        </li>
        <li>
          First, Second, and Third rank holder will get some amazing gifts.
        </li>
        <li>Every participant will get a tiffin.</li>
        <li>
          If anyone tries to cheat during the contest, he/she will be
          terminated.
        </li>
        <li>Last date to registration 12th April.</li>
      </ol>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block mb-1 font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border rounded px-3 py-2 placeholder-gray-500"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1  font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded px-3 py-2 placeholder-gray-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 ">
          <label className="block mb-1 font-bold" htmlFor="contactNo">
            Contact No
          </label>
          <input
            className="w-full border rounded px-3 py-2 placeholder-gray-500"
            type="number"
            id="contactNo"
            placeholder="Enter your contact number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1  font-bold" htmlFor="registrationNo">
            Registration No
          </label>
          <input
            className="w-full border rounded px-3 py-2 placeholder-gray-500"
            type="number"
            id="registrationNo"
            placeholder="Enter your registration number"
            value={registrationNo}
            onChange={(e) => setRegistrationNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 ">
          <label className="block mb-1 font-bold" htmlFor="department">
            Department
          </label>
          <input
            className="w-full border rounded px-3 py-2 placeholder-gray-500"
            type="text"
            id="department"
            placeholder="Enter your department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 ">
          <span className="block mb-1 font-bold">
            Which year are you currently studying?
          </span>
          <label className="inline-block mr-4">
            <input
              type="radio"
              className="mr-2"
              name="year"
              value="firstYear"
              checked={year === "firstYear"}
              onChange={() => setYear("firstYear")}
              required
            />
            First Year
          </label>
          <label className="inline-block">
            <input
              type="radio"
              className="mr-2"
              name="year"
              value="others"
              checked={year === "others"}
              onChange={() => setYear("others")}
              required
            />
            Others ( Except First Year !)
          </label>
        </div>
        <div className="mb-4 ">
          <span className="block mb-1 font-bold">Do you have a laptop?</span>
          <label className="inline-block mr-4">
            <input
              type="radio"
              className="mr-2"
              name="hasLaptop"
              value="yes"
              checked={hasLaptop === "yes"}
              onChange={() => setHasLaptop("yes")}
              required
            />
            Yes
          </label>
          <label className="inline-block">
            <input
              type="radio"
              className="mr-2"
              name="hasLaptop"
              value="no"
              checked={hasLaptop === "no"}
              onChange={() => setHasLaptop("no")}
              required
            />
            No
          </label>
        </div>
        <button
          className="w-full text-white bg-blue-600 rounded-full px-4 py-2 hover:shadow-lg transition duration-300 font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegForm;
