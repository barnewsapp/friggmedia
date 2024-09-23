import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Product {
  title: string;
  description: string;
  image?: {
    src: string;
    width: number;
    height: number;
    position: 'top' | 'left';
  };
}

export const products = {
  buyAndRead: {
    title: 'BuyAndRead',
    description:
      'En digital bladkiosk med 673 publikasjoner fordelt på 7 land og til sammen 493 utgivere.',
    image: {
      src: '/product-buyandread.svg',
      width: 120,
      height: 80,
      position: 'top' as const,
    },
  },
  newsApp: {
    title: 'NyhetsApp',
    description:
      'Appen knyttes direkte til CMS for å sikre at nettsideartikler publiseres automatisk i NyhetsAppen.',
    image: {
      src: '/product-newsapp.svg',
      width: 160,
      height: 200,
      position: 'top' as const,
    },
  },
  eArkiv: {
    title: 'eArkiv',
    description: 'eArkiv knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver.',
    image: {
      src: '/product-earchive.webp',
      width: 150,
      height: 150,
      position: 'top' as const,
    },
  },

  eLeser: {
    title: 'eLeser',
    description:
      ' For publikasjoner eller medlemsblad som dere ønsker skal være digitalt tilgjengelig.',
    image: {
      src: '/product-ereader.svg',
      width: 125,
      height: 160,
      position: 'left' as const,
    },
  },
  buyAndReadArchive: {
    title: 'BuyAndRead-arkivet',
    description: 'Et digitalt arkiv hvor man søke i 1 122 941 utgaver og 34 959 219 sider.',
    image: {
      src: '/product-buyandread.svg',
      width: 70,
      height: 45,
      position: 'left' as const,
    },
  },
  searchAndRead: {
    title: 'SearchAndRead',
    description: 'Et digitalt arkiv hvor man søke i 1 122 941 utgaver og 34 959 219 sider.',
    image: {
      src: '/product-buyandread.svg',
      width: 70,
      height: 45,
      position: 'left' as const,
    },
  },
};

interface ProductCardProps {
  product: Product;
  imagePlacement?: 'top' | 'left';
}

function ArrowCircle() {

  return (
    <div className='w-8 h-8 flex items-center justify-center text-slate-500 bg-frigg-50 rounded-full'>
      <FaArrowRightLong />
    </div>
  );
}

export function CardWithImageTop({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className="bg-white flex flex-1 flex-col justify-center h-full items-center py-8 gap-2 rounded-3xl  dark:bg-card-dark mx-4 transition-all hover:scale-105">
      {image && (
        <Image
          src={image.src}
          alt={""}
          className="mb-4"
          width={image.width}
          height={image.height}
          priority
        />
      )}
      <h3 className="text-3xl text-frigg-800 font-semibold">{title}</h3>
      <p className="text-2xl text-slate-500 text-center mb-4 px-4 max-w-sm">{description}</p>
      <ArrowCircle></ArrowCircle>
    </div>
  );
}

export function Card({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className="bg-white flex flex-1 flex-col justify-center h-full items-center py-8 gap-2 rounded-3xl shadow-md dark:bg-card-dark mx-4 transition-all hover:scale-105">
      <h3 className="text-3xl text-frigg-800 font-semibold">{title}</h3>
      <p className="text-2xl text-slate-500 mb-4 px-4 md:text-center">{description}</p>
    </div>
  );
}

export function CardWithImageLeft({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className="bg-white flex flex-col md:flex-row items-center px-8 py-8 gap-2 dark:bg-card-dark rounded-3xl mx-4 transition-all hover:scale-105">
      {image && (
        <Image
          src={image?.src}
          alt={""}
          className="mb-4"
          width={image.width}
          height={image.height}
          priority
        />
      )}
      <div className=" flex-1 ">
        <div className="ml-6 flex flex-1 flex-col justify-center h-full gap-2 0 text-center md:text-left">
          <h3 className="text-3xl text-frigg-800 font-semibold">{title}</h3>
          <p className="text-2xl text-slate-500 max-w-lg">{description}</p>
        </div>
      </div>
      <ArrowCircle></ArrowCircle>
    </div>
  );
}
