import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Socials() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
      <div className="flex gap-12 md:gap-6 text-slate-700 text-xl">
        <a href="om-oss" className="hover:text-frigg-800">
          Om oss
        </a>
        <a href="kontakt" className="hover:text-frigg-800">
          Kontakt
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-2">
        <span className="items-center text-xl my-2 text-slate-700">
          &copy; Frigg Media AS {new Date().getFullYear()}
        </span>
        <div className="md:ml-6 flex space-x-12 md:space-x-4 text-xl items-center text-slate-700 dark:text-white">
          <a
            href="https://www.facebook.com/BuyAndRead/"
            aria-label="Facebook"
            className=""
          >
            <FaFacebook className="hover:text-frigg-800" />
          </a>
          <a
            href="https://www.instagram.com/buyandread/#"
            aria-label="Instagram"
            className="0"
          >
            <FaInstagram className="hover:text-frigg-800" />
          </a>
          <a
            href="#https://x.com/buyandread"
            aria-label="Twitter / X"
            className=""
          >
            <FaXTwitter className="hover:text-frigg-800" />
          </a>
        </div>
      </div>
    </div>
  );
}
