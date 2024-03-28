'use client';
import { NextUIProvider as NUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import React from 'react';

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <NUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NUIProvider>
  );
}
