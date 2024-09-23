import React from "react";
import { Link } from "@nextui-org/react";
import { LuPhone, LuMail } from "react-icons/lu";


export default function ContactPage() {
  return (
    <div className="container md:mb-44 max-h-dvh md:max-w-screen-md px-4 mx-auto">
      <h1 className="mt-20 text-5xl md:text-7xl light:text-title font-lora font-medium text-primary-900">
        Kontakt oss
      </h1>
      <p className="mt-12 text-2xl text-slate-600 ">
        Har du et spørsmål, innspill eller ønsker du å ta en prat med oss? Det
        synes vi er skikkelig hyggelig. Nedenfor finner du kontaktinformasjonen
        vår.
      </p>
      
      <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-8">
        <a href="#">
          <div className="bg-white flex text-2xl items-center h-full space-x-3 p-6 rounded-2xl shadow-md dark:bg-card-dark transition-all hover:scale-105">
            <LuMail className="text-frigg-700" />
              <p className="text-frigg-400">
                example@friggmedia.no
              </p>
          </div> 
        </a>
        <a href="#" className="w-full">
          <div className="bg-white flex text-2xl items-center h-full space-x-3 p-6 rounded-2xl shadow-md dark:bg-card-dark transition-all hover:scale-105">
            <LuPhone className="text-frigg-700" />
              <p className="text-frigg-400">
                +47 12345678
              </p>
          </div> 
        </a>
      </div>
    </div>
  );
}
