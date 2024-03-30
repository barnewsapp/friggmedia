import Image from 'next/image';

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
      'Denne knyttes direkte til CMS for å sikre at nettsideartikler publiseres automatisk i NyhetsAppen.',
    image: {
      src: '/product-newsapp.svg',
      width: 160,
      height: 200,
      position: 'top' as const,
    },
  },
  eArkiv: {
    title: 'eArkiv',
    description: 'Denne knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver.',
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
    title: 'BuyAndRead Arkiv',
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

export function CardWithImageTop({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className=" flex flex-1 flex-col justify-center h-full items-center py-8 gap-4 rounded-md shadow-md dark:bg-card-dark mx-4">
      {image && (
        <Image
          src={image.src}
          alt={title}
          className="mb-4"
          width={image.width}
          height={image.height}
          priority
        />
      )}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-2 mb-4 px-4">{description}</p>
    </div>
  );
}

export function Card({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className=" flex flex-1 flex-col justify-center h-full items-center py-8 gap-4 rounded-md shadow-md dark:bg-card-dark mx-4">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-2 mb-4 px-4">{description}</p>
    </div>
  );
}

export function CardWithImageLeft({ product }: ProductCardProps) {
  const { title, description, image } = product;

  return (
    <div className="flex px-4 dark:bg-card-dark rounded-md shadow-md mx-4 ">
      {image && (
        <Image
          src={image?.src}
          alt={image.src}
          className="mb-4"
          width={image.width}
          height={image.height}
          priority
        />
      )}
      <div className=" flex-1 ">
        <div className=" flex flex-1 flex-col justify-center  h-full py-8 gap-4 0 ">
          <h3 className="text-2xl font-semibold mx-4">{title}</h3>
          <p className="text-sm md:text-base text-gray-2 mb-4 px-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
