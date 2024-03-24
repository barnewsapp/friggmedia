import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="bg-background px-8 py-4 ">
        <div className="flex flex-col md:flex-row ">
          <div className="mb-4 md:mb-0 ">
            <a href="#">
              <Image
                // src="/friggmedia/logo.svg"
                src="/logo.svg"
                alt="Friggmedia Logo"
                width={175}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row md:justify-between md:items-center   ">
          <div className="flex gap-6 ">
            <a href="#" className="text-gray-700 text-lg hover:text-blue-600">
              Produkter
            </a>
            <a href="#" className="text-gray-700 text-lg hover:text-blue-600">
              Om oss
            </a>
            <a href="#" className="text-gray-700 text-lg hover:text-blue-600">
              Kontakt oss
            </a>
          </div>
          <div className="flex gap-6">
            <span className="text-gray-700 items-center text-lg my-2 ">
              &copy; Frigg Media AS 2024
            </span>
            <div className="flex space-x-4 items-center">
              <a href="#" aria-label="Facebook" className="text-blue-800 hover:text-blue-600">
                <Image
                  // src="/friggmedia/facebook.svg"
                  src="/facebook.svg"
                  alt="Friggmedia Logo"
                  width={18}
                  height={18}
                  priority
                />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-800 hover:text-blue-600">
                <Image
                  // src="/friggmedia/instagram.svg"
                  src="/instagram.svg"
                  alt="Friggmedia Logo"
                  width={18}
                  height={18}
                  priority
                />
              </a>
              <a
                href="#"
                aria-label="Other Social Media"
                className="text-blue-800 hover:text-blue-600"
              >
                <Image
                  // src="/friggmedia/twitter.svg"
                  src="/twitter.svg"
                  alt="Friggmedia Logo"
                  width={18}
                  height={18}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
