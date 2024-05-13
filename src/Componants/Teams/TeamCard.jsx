import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { teamDetails } from "./teamDetails";
import image from "../../assets/person.webp";

export const TeamCard = (props) => {
  return (
    <div className="w-40">
      <div className="relative w-40 h-40 mb-4 rounded-[50%] shadow">
        <LazyLoadImage
          alt="person"
          className="absolute object-cover w-full h-full rounded-[50%]"
          height={160}
          width={160}
          effect="blur"
          src={props.images}
          
        />
        {/* <img
          className="absolute object-cover w-full h-full rounded-[50%]"
          src={image}
          alt="Person"
        /> */}
      </div>
      <div className="flex flex-col text-center">
        <p className="text-lg font-extrabold">{props.name}</p>
        <p className="mb-5 text-xs text-gray-800">{props.role}</p>
        <div className="flex items-center justify-center space-x-3">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-900"
          >
            <IoPerson size={20}></IoPerson>
          </a>
          <a
            href={props.github}
            className="text-gray-600 transition-colors duration-300 hover:text-black"
          >
            <FaGithub size={20}></FaGithub>
          </a>
          <a
            href= {props.linkedIn}
            className="text-gray-600 transition-colors duration-300 hover:text-blue-400"
          >
            <FaLinkedin size={20}></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};
