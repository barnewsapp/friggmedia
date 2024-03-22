import Image from 'next/image';

export function Header() {
  return (
    <nav className="bg-background px-8 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl text-blue-600 font-semibold">
          <Image
            src="/friggmedia/logo.svg"
            alt="Friggmedia Logo"
            width={175}
            height={40}
            priority
          />
        </a>

        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-black opacity-55 text-xl hover:text-blue-600 transition-colors"
          >
            Produkter
          </a>
          <a
            href="#"
            className="text-black opacity-55 text-xl hover:text-blue-600 transition-colors"
          >
            Om oss
          </a>
          <a
            href="#"
            className="text-black opacity-55 text-xl hover:text-blue-600 transition-colors"
          >
            Kontakt oss
          </a>
        </div>
      </div>
    </nav>
  );
}
