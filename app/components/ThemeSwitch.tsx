'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === 'dark') {
    return <FiSun size={24} color="red" onClick={() => setTheme('light')} />;
  }

  return <FiMoon size={24} color="red" onClick={() => setTheme('dark')} />;
}
