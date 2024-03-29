import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Skeleton } from '@nextui-org/react';

export default function LogoPlaceholder() {
  return (
    <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-4 w-3/5 rounded-lg" />
      </div>
    </div>
  );
}

export function Logo() {
  const [isMounted, setIsMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <LogoPlaceholder />;
  }

  return (
    <Image
      src={resolvedTheme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
      alt="Friggmedia Logo"
      width={175}
      height={40}
      priority
    />
  );
}
