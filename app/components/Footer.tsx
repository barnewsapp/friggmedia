import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center">
              <Image
                src="/friggmedia/logo.svg"
                alt="Friggmedia Logo"
                width={175}
                height={40}
                priority
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row justify-between items-center mt-8">
          <div className="flex flex-wrap gap-6 justify-center">
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
          <div className="flex gap-6 items-center ">
            <span className="text-gray-700 text-lg mb-4 md:mb-0">&copy; Frigg Media AS 2024</span>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-blue-800 hover:text-blue-600">
                <Image
                  src="/friggmedia/facebook.svg"
                  alt="Friggmedia Logo"
                  width={18}
                  height={18}
                  priority
                />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-800 hover:text-blue-600">
                <Image
                  src="/friggmedia/instagram.svg"
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
                  src="/friggmedia/twitter.svg"
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
