import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ChakraProvider } from '@chakra-ui/react';

import { Poppins, Lora } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'], // Add any other weights you need
  style: ['normal', 'italic'], // Add any other styles you need
  subsets: ['latin'], // Include any other subsets if necessary
});

const lora = Lora({
  weight: ['500', '600', '700'], // Add any other weights you need
  style: ['normal', 'italic'], // Add any other styles you need

  subsets: ['latin'], // Include any other subsets if necessary
});

export const metadata: Metadata = {
  title: 'Friggmedia',
  description: 'Friggmedia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={`${lora.className}${poppins.className} `}>
        <ChakraProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
