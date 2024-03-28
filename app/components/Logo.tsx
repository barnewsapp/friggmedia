import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Logo() {
  const { resolvedTheme } = useTheme();

  const logo = resolvedTheme === 'dark' ? './logo-dark.svg' : './logo.svg';

  return <Image src={logo} alt="Friggmedia Logo" width={175} height={40} priority />;
}
