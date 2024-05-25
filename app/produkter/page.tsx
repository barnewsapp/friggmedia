import Image from "next/image";
import { CallToAction } from "../components/CallToAction";

const products = {
  newsApp: {
    title: "NyhetsApp",
    description:
      "NyhetsAppen knyttes direkte til CMS’et slik at nettsideartikler publiseres automatisk i NyhetsAppen. Har utgiver en publikasjon kan denne også leses i appen, da appen har en innebygd eLeser. Både artikkelfunksjonen og eLeseren kan aktiveres/deaktiveres etter kundens behov. NyhetsAppen fungerer både på mobiltelefoner og på lesebrett. Varslinger er innebygd i appen slik at man kan kommunisere med brukerne. NyhetsAppen kan kobles til annonsesystemer, men har også et eget innebygd annonsesystem.",
    imageUri: "/info-newsapp.svg",
  },
  eLeser: {
    title: "eLeser",
    description:
      "Har dere en publikasjon eller et medlemsblad som dere ønsker skal være digitalt tilgjengelig, benytter man eLeseren. eLeseren er utviklet av BuyAndRead og er skrevet i HTML5 som gjør at den kan kjøres på alle plattformer (PC, Mac, Lesebrett, Mobiltelefon). Den kan enkelt ligge bak en innlogging (PayWall) slik at bare de som kan logge seg inn, vil kunne lese publikasjonen digitalt.",
    imageUri: "/info-ereader.svg",
  },
  eArkiv: {
    title: "eArkiv",
    description:
      "Produktet eArkiv knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver. De eldre utgavene overføres til vårt system og gjøres tilgjengelige gjennom eLeseren. Alle utgavene gjøres søkbare slik at det er lett for brukeren å søke etter informasjon. Utgiver står fritt til å legge over sine eldre publikasjoner i vårt system. Publikasjonene vi har i vårt system er lagret på 3 forskjellige geografiske steder for maksimum sikkerhet.",

    imageUri: "/info-earchive.svg",
  },
};

const Hightlight = ({ text }: { text: string }) => (
  <span className="text-primary-700  ight:text-subtitle text-lg md:text-xl my-4 text-center sm:text-start">
    {text}
  </span>
);

function Hero() {
  return (
    <div className="md:max-w-screen-sm p-4 mx-4 sm:mx-auto dark:bg-card-dark py-20">
      <h1 className="text-5xl md:text-7xl light:text-title font-lora font-medium text-center text-primary-900">
        Vi tilbyr løsninger for din bedrift
      </h1>
      <p className="text-slate-500 text-xl my-4 text-start md:text-center">
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
}

function Card({ title, description, imageUri }: CardProps) {
  return (
    <div className="bg-white flex flex-col max-w-screen-lg sm:flex-row p-4 sm:px-6 dark:bg-card-dark rounded-md shadow-md mx-4 mb-12 justify-center">
      <div
        className={`sm:w-1/2 flex flex-col ${
          imageUri ? "lg:pr-8" : "lg:pr-0"
        } justify-center py-8`}
      >
        <h3 className=" text-2xl sm:text-3xl text-primary-900 font-semibold mb-2">
          {title}
        </h3>
        <p className="text-lg text-slate-500 mb-4 ">{description}</p>
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
    <div className="flex flex-col justify-between h-full bg-background text-foreground items-center mt-20">
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
