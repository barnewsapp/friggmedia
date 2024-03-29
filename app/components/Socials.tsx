import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Socials() {
  return (
    <div className="flex flex-col  md:flex-row md:justify-between md:items-center   ">
      <div className="flex gap-6 ">
        <a href="#" className="light:opacity-55 text-lg hover:text-blue-600">
          Om oss
        </a>
        <a href="#" className="light:opacity-55 text-lg hover:text-blue-600">
          Kontakt oss
        </a>
      </div>
      <div className="flex gap-6">
        <span className="light:opacity-55 items-center text-lg my-2 ">
          &copy; Frigg Media AS 2024
        </span>
        <div className="flex space-x-4 items-center">
          <a href="#" aria-label="Facebook" className="text-blue-800 hover:text-blue-600">
            <FaFacebook className="text-black dark:text-white" />
          </a>
          <a href="#" aria-label="Instagram" className="text-blue-800 hover:text-blue-600">
            <FaInstagram className=" text-black dark:text-white" />
          </a>
          <a href="#" aria-label="Other Social Media" className="text-blue-800 hover:text-blue-600">
            <FaXTwitter className="text-black dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
