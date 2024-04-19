import Image from 'next/image';
import { CallToAction } from '../components/CallToAction';

const products = {
  newsApp: {
    title: 'NyhetsApp',
    description:
      'Appen integreres sømløst med deres CMS, slik at nettsideartikler publiseres automatisk i NyhetsAppen.',
    imageUri: '/info-newsapp.svg',
  },
  eLeser: {
    title: 'eLeser',
    description:
      ' For publikasjoner eller medlemsblad som dere ønsker skal være digitalt tilgjengelig.',
    imageUri: '/info-ereader.svg',
  },
  eArkiv: {
    title: 'eArkiv',
    description: 'Denne knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver.',

    imageUri: '/info-earchive.svg',
  },
};

const Hightlight = ({ text }: { text: string }) => (
  <span className="text-primary-700  ight:text-subtitle text-lg md:text-xl my-4 text-center sm:text-start">
    {text}
  </span>
);

export function Hero() {
  return (
    <div className=" md:max-w-screen-sm p-4 mx-4 sm:mx-auto dark:bg-card-dark  ">
      <h1 className="text-6xl light:text-title font-lora font-medium text-center text-primary-900">
        Vi tilbyr løsninger for din bedrift
      </h1>
      <p className="text-slate-500 text-lg md:text-xl my-4 text-center sm:text-start">
        Utforsk mulighetene med <Hightlight text="NyhetsApp" />, <Hightlight text="eArkiv" /> og{' '}
        <Hightlight text="eLeser" /> for å levere innhold til dine målgrupper.
      </p>
      <div className="mt-6 flex justify-center ">
        <a
          href="#"
          className="text-white text-md md:text-xl font-light bg-blue-700  hover:bg-blue-800  py-2 px-4 rounded inline-block"
        >
          Kontakt oss
        </a>
      </div>
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
    <div className="flex flex-col max-w-screen-sm sm:flex-row px-4 py-6 sm:px-6 dark:bg-card-dark rounded-md shadow-md mx-4 my-8">
      <div
        className={`sm:w-1/2 flex flex-col ${imageUri ? 'lg:pr-8' : 'lg:pr-0'} justify-center py-8`}
      >
        <h3 className="text-2xl sm:text-3xl text-primary-900 font-medium mb-2">{title}</h3>
        <p className="text-lg text-slate-500 mb-4 ">{description}</p>
      </div>

      <div className={`sm:w-1/2 flex justify-center ${imageUri ? 'mb-4 lg:mb-0' : ''}`}>
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
    <div className="flex flex-col justify-between h-full bg-background text-foreground items-center">
      <Hero />
      <Card {...products.newsApp} />
      <Card {...products.eLeser} />
      <Card {...products.eArkiv} />
      <div className="mt-40">
        <CallToAction />
      </div>
    </div>
  );
}
