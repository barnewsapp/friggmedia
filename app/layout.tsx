import type { Metadata } from 'next';
import { NextUIProvider } from './components/NextUIProvider';

import { Poppins, Lora } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

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
        <NextUIProvider>
          <div className="flex flex-col justify-between min-h-screen bg-background text-foreground">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
