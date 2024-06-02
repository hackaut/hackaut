import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import frame from "../assets/frame.png"

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [hasLaptop, setHasLaptop] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = await fetch("https://api.hackaut.club/cx/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          contactNo: String(contactNo),
          registrationNo: String(registrationNo),
          department: department,
          year: year,
          hasLaptop: hasLaptop,
          verified: false,
          verificationSecret: crypto.randomUUID(),
        }),
      }
    );
    if (r.status === 201) {
      toast.success("Please check your email to verify your registration.");
      setName("");
      setEmail("");
      setContactNo("");
      setRegistrationNo("");
      setDepartment("");
      setYear("");
      setHasLaptop("");
    } else if (r.status === 409) {
      toast.warning(`Participant (${registrationNo}) already registered.`);
    }
    else {
      toast.error("Something went wrong! Please try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 border rounded-lg shadow-xl mb-10 bg-gray-100">
      <img 
        src={frame}
        alt="HackAUT Banner" 
        className="w-full h-auto mb-4 border rounded-lg shadow-xl "
      />
      <div className=" p-5">
      <h1 className="text-2xl font-bold text-center mb-4">REGISTRATION FORM</h1>
      <p className="mb-4 font-bold">Rules for Coding Contest CodeXcellence:</p>
      <ol className="list-decimal ml-6 mb-4">
        <li>In our coding contest there will be two segments-
          <ul className="list-disc ml-7">
          <li>One is for all the UG 1st Year students, which will be in the offline mode.</li>
          <li>Another segment is for all other students, which will be in the online mode.</li>
          </ul>
        </li>
        <li>It will be a 100 minutes event.</li>
        <li>Everyone please bring your own laptop with fully charged.</li>
        <li>
          If anyone doesn&apos;t have their own laptop, some lab rooms will be
          allocated for them.
        </li>
        <li>
          Every participant will get a participation certificate which will help
          them in the MAR activity.
        </li>
        <li>
          First, Second, and Third rank holders will get some amazing gifts.
        </li>
        <li>Every participant will get a tiffin.</li>
        <li>
          If anyone tries to cheat during the contest, he/she will be
          terminated.
        </li>
        <li>Last date for registration : 9th June.</li>
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
            First Year (UG)
          </label>
          <label className="inline-block">
            <input
              type="radio"
              className="mr-2"
              name="year"
              id="year"
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
              id="hasLaptop"
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
              id="hasLaptop"
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
      <ToastContainer />
    </div>
    </div>
  );
};

export default RegForm;
