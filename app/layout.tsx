import type { Metadata } from 'next';
import { ChakraProvider } from '@chakra-ui/react';

import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '600'], // Add any other weights you need
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
    <html lang="en">
      <body className={poppins.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
