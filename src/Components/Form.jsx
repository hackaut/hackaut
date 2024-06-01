import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    // TODO: Implement email sending logic here using new backend logic
    
  };

  return (
    <div className="bodyc">
      <div className="contacthakaut">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
          <div className="mx-auto lg:max-w-xl sm:text-center">
            <p className="inline-block text-2xl px-3 py-px mb-2 font-extrabold tracking-wider text-black rounded-full uppercase border-black border-solid border ">
              CONTACT US
            </p>
          </div>
        </div>
        <div className="container text-blue-800 border-4 border-blue-400 sm:p-16 pt-4 px-6 mt-10">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaLocationDot />
                </i>
                <div className="topic">Address</div>
                <div className="text-one">MAKAUT, WB, NH12</div>
                <div className="text-two">Haringhata</div>
              </div>
              <div className="phone details">
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaPhone />
                </i>
                <div className="topic">Phone</div>
                <div className="text-one">+91 6297244097</div>
                <div className="text-two">+91 6297172118</div>
              </div>
              <div className="email details">
                <i
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="fas fa-envelope"
                >
                  <FaEnvelope />
                </i>
                <div className="topic">Email</div>
                <div className="text-one">contact@hackaut.club</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>
                If you have any coding projects or queries related to our coding
                club, feel free to reach out. We&apos;re here to assist you, and it&apos;s
                our pleasure to help!
              </p>

              <form onSubmit={sendEmail} className="text-center">
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-box message-box">
                  <div className="input-box">
                    <textarea
                      name="message"
                      placeholder="Enter your query"
                    ></textarea>
                  </div>
                </div>
                <div className="button bg-blue-600 hover:bg-blue-800 rounded-lg">
                  <button type="submit">Send Now</button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
