'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Skeleton } from '@nextui-org/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="flex rounded-full w-8 h-8" />;

  if (theme === 'dark') {
    return <FiSun size={24} color="white" onClick={() => setTheme('light')} />;
  }

  return <FiMoon size={24} color="black" onClick={() => setTheme('dark')} />;
}
