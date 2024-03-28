'use client';
import { NextUIProvider as NUIProvider } from '@nextui-org/react';
import React from 'react';

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <NUIProvider>{children}</NUIProvider>;
}
