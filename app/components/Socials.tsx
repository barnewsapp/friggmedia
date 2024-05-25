import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Socials() {
  return (
    <div className="flex flex-col sm:flex-row md:justify-between md:items-center text-slate-700">
      <div className="flex gap-6 ">
        <a href="om-oss" className="light:opacity-55 text-lg hover:text-slate-800">
          Om oss
        </a>
        <a href="#" className="light:opacity-55 text-lg hover:text-slate-800">
          Kontakt
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <span className="items-center text-lg my-2 ">
          &copy; Frigg Media AS 2024
        </span>
        <div className="md:ml-6 flex space-x-4 items-center">
          <a
            href="#"
            aria-label="Facebook"
            className="text-blue-800 hover:text-slate-800"
          >
            <FaFacebook className="text-slate-600 dark:text-white" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-blue-800 hover:text-slate-800"
          >
            <FaInstagram className=" text-slate-600 dark:text-white" />
          </a>
          <a
            href="#"
            aria-label="Other Social Media"
            className="text-blue-800 hover:text-slate-800"
          >
            <FaXTwitter className="text-slate-600 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
