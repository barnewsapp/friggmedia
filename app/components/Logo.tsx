import Image from 'next/image';

export function Logo() {
  return (
    <>
      <Image
        src={'/logo.svg'}
        alt="Friggmedia Logo"
        className="dark:hidden"
        width={175}
        height={40}
        priority
      />
      <Image
        src="/logo-dark.svg"
        alt="Friggmedia Logo"
        className="hidden dark:block"
        width={175}
        height={40}
        priority
      />
    </>
  );
}
