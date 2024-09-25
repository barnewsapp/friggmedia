import Image from "next/image";
import { CallToAction } from "../components/CallToAction";
import { FaCheckCircle } from "react-icons/fa";
import React from "react";
import { LuBell, LuLock, LuMegaphone, LuSearch, LuSendHorizonal, LuShield, LuSmartphone, LuTablet, LuText, LuToggleRight } from "react-icons/lu";

const products = {
  newsApp: {
    title: "NyhetsApp",
    description:
      "NyhetsAppen knyttes direkte til CMS’et slik at nettsideartikler publiseres automatisk i NyhetsAppen.",
    features: [
      {icon: LuText, text: "Har utgiver en publikasjon kan denne også leses i appen, da appen har en innebygd eLeser."},
      {icon: LuBell, text: "Varslinger er innebygd i appen slik at man kan kommunisere med brukerne."},
      {icon: LuTablet, text: "NyhetsAppen fungerer både på mobiltelefoner og på lesebrett"},
      {icon: LuMegaphone, text: "NyhetsAppen kan kobles til annonsesystemer, men har også et eget innebygd annonsesystem."},
      {icon: LuToggleRight, text: "Både artikkelfunksjonen og eLeseren kan aktiveres/deaktiveres etter kundens behov."},
    ],
      imageUri: "/info-newsapp.svg",
  },
  eLeser: {
    title: "eLeser",
    description:
      "Har dere en publikasjon eller et medlemsblad som dere ønsker skal være digitalt tilgjengelig, benytter man eLeseren.",
      features: [
        {icon: LuSmartphone, text: "eLeseren er utviklet av BuyAndRead og er skrevet i HTML5 som gjør at den kan kjøres på alle plattformer (PC, Mac, Lesebrett, Mobiltelefon)."},
        {icon: LuLock, text: " Den kan enkelt ligge bak en innlogging (PayWall) slik at bare de som kan logge seg inn, vil kunne lese publikasjonen digitalt."},
      ],
      imageUri: "/info-ereader.svg",
  },
  eArkiv: {
    title: "eArkiv",
    description:
      "Produktet eArkiv knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver. Utgiver står fritt til å legge over sine eldre publikasjoner i vårt system.",

      features: [
        {icon: LuSendHorizonal, text: "De eldre utgavene overføres til vårt system og gjøres tilgjengelige gjennom eLeseren."},
        {icon: LuSearch, text: " Alle utgavene gjøres søkbare slik at det er lett for brukeren å søke etter informasjon."},
        {icon: LuShield, text: " Publikasjonene vi har i vårt system er lagret på 3 forskjellige geografiske steder for maksimum sikkerhet."},
      ],
      imageUri: "/info-earchive.svg",
  },
};

const Hightlight = ({ text }: { text: string }) => (
  <span className="text-slate-800">
    {text}
  </span>
);

function Hero() {
  return (
    <div className="pl-4 mx-4 pb-20 md:py-20">
      <h1 className="text-frigg-900 text-5xl md:text-7xl light:text-title font-lora font-medium text-start md:text-center">
        Løsninger for din bedrift
      </h1>
      <p className="md:mx-auto md:max-w-2xl mt-8 text-slate-500 light:text-subtitle text-2xl md:text-3xl text-start md:text-center">
        Utforsk mulighetene med <Hightlight text="NyhetsApp" />,{" "}
        <Hightlight text="eArkiv" /> og <Hightlight text="eLeser" /> for å
        levere innhold til dine målgrupper.
      </p>
      
    </div>
  );
}

interface CardProps {
  title: string;
  description: string;
  imageUri: string;
  features: Array<any>;
}

function Card({ title, description, imageUri, features }: CardProps) {
  return (
    <div className="bg-white flex flex-col max-w-screen-lg sm:flex-row p-4 py-8 px-6 dark:bg-card-dark rounded-3xl shadow-md mx-4 mb-12 justify-center">
      <div
        className={`sm:w-1/2 flex flex-col ${
          imageUri ? "lg:pr-8" : "lg:pr-0"
        } justify-center py-8`}
      >
        <h2 className="text-3xl text-frigg-800 font-semibold mb-2">
          {title}
        </h2>
        <div className="text-slate-500">
          <p className="text-xl mb-4">{description}</p>
          <ul className="text-lg list-disc text-slate-500 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex mb-2">
                <span className="mt-1 mr-4 text-2xl text-frigg-400">
                  {React.createElement(feature.icon)}
                </span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`sm:w-1/3 flex justify-center ${
          imageUri ? "mb-4 lg:mb-0" : ""
        }`}
      >
        <Image
          src={imageUri}
          alt={imageUri}
          className="object-contain w-full"
          width={100}
          height={100} 
          priority
        />
      </div>
    </div>
  );
}

export default function Infoside() {
  return (
    <div className="flex flex-col justify-between h-full bg-background text-foreground items-center mt-10 md:mt-20">
      <Hero />
      <div>
        <Card {...products.newsApp} />
        <Card {...products.eLeser} />
        <Card {...products.eArkiv} />
      </div>

      <div className="mt-40">
        <CallToAction />
      </div>
    </div>
  );
}
