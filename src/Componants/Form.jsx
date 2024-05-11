import React from 'react';
import emailjs from 'emailjs-com';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2h4yuje',
      'template_8cy8x69',
      e.target,
      'YJOzGM1u15vHwlhDm'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  const notify = () => toast("Your message was sent successfully");

  return (
    <div className="bodyc">
      <div className="contacthakaut">
        <div class="container text-blue-800 border-4 border-blue-400">
          <div class="content">
            <div class="left-side">
              <div class="address details">
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
                <div class="topic">Address</div>
                <div class="text-one">MAKAUT , WB, NH12</div>
                <div class="text-two">Haringhata</div>
              </div>
              <div class="phone details">
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
                <div class="topic">Phone</div>
                <div class="text-one">+91 6297244097</div>
                <div class="text-two">+91 6297172118</div>
              </div>
              <div class="email details">
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
                <div className="icon">{/* <FaEnvelope/> */}</div>
                <div class="topic">Email</div>
                <div class="text-one">codingclubmakaut2022@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              <p>
                If you have any coding projects or queries related to our coding
                club, feel free to reach out. We're here to assist you, and it's
                our pleasure to help!
              </p>

              <form onSubmit={sendEmail} class="text-center">
                <div class="input-box">
                  <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <div class="input-box">
                    <textarea name="message" placeholder="Enter your query"></textarea>
                  </div>
                </div>
                <div class="button bg-blue-600 hover:bg-blue-800 rounded-lg">
                  <button type="submit" onClick={notify}>Send Now</button>
                  <ToastContainer/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

