// components\Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-11  ">
      <div className="w-full bg-black flex justify-center relative items-center gap-52 py-20  ">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 text-3xl hover:bg-gray-300 rounded-full "
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 text-3xl hover:bg-gray-300 rounded-full "
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 text-3xl hover:bg-gray-300 rounded-full "
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
