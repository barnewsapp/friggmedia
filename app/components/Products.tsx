import Link from 'next/link';
import { Card, CardWithImageLeft, CardWithImageTop, products } from './ProduktCard';

export function Products() {
  return (
    <div className="flex flex-col gap-4 mx-auto py-4 mb-20 max-w-screen-md">
      <h2 className="text-4xl text-center mb-8 font-lora ">Våre produkter</h2>

      {/* Adjusted for mobile-first: Default is single column, expands in md: breakpoint */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-5">
        <div className="md:col-span-3">
          <CardWithImageTop product={products.buyAndRead} />
        </div>
        <Link href="/produkter" className="md:col-span-2">
          <CardWithImageTop product={products.newsApp} />
        </Link>
      </div>

      <div className="flex flex-col gap-4 md:grid grid-cols-5">
        <Link href="/produkter" className="md:col-span-2 md:row-span-4">
          <Card product={products.eArkiv} />
        </Link>
        <Link href="/produkter" className="md:col-span-3 md:row-span-2">
          <CardWithImageLeft product={products.eLeser} />
        </Link>
        <div className="md:col-span-3 md:row-span-2">
          <CardWithImageLeft product={products.buyAndReadArchive} />
        </div>
      </div>
      <div className="mt-4">
        <CardWithImageLeft product={products.searchAndRead} />
      </div>
    </div>
  );
}
