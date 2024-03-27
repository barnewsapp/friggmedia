import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Socials() {
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="flex flex-col  md:flex-row md:justify-between md:items-center   ">
      <div className="flex gap-6 ">
        <a href="#" className="light:opacity-55 text-lg hover:text-blue-600">
          Om oss
        </a>
        <a href="#" className="light:opacity-55 text-lg hover:text-blue-600">
          Kontakt oss
        </a>
      </div>
      <div className="flex gap-6">
        <span className="light:opacity-55 items-center text-lg my-2 ">
          &copy; Frigg Media AS 2024
        </span>
        <div className="flex space-x-4 items-center">
          <a href="#" aria-label="Facebook" className="text-blue-800 hover:text-blue-600">
            <Image
              src={isDarkMode ? '/facebook-dark.svg' : '/facebook.svg'}
              color="yellow"
              alt="Friggmedia Logo"
              width={18}
              height={18}
              priority
            />
          </a>
          <a href="#" aria-label="Instagram" className="text-blue-800 hover:text-blue-600">
            <Image
              src={isDarkMode ? '/instagram-dark.svg' : '/instagram.svg'}
              alt="Friggmedia Logo"
              width={18}
              height={18}
              priority
            />
          </a>
          <a href="#" aria-label="Other Social Media" className="text-blue-800 hover:text-blue-600">
            <Image
              src={isDarkMode ? '/twitter-dark.svg' : '/twitter.svg'}
              alt="Friggmedia Logo"
              width={18}
              height={18}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}
