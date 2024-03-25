import Image from 'next/image';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CallToAction } from './components/CallToAction';
import { Products } from './components/Products';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Navbar />
      <Hero />
      <div className="bg-background h-full"></div>
      <Products />
      <CallToAction />
      <Footer />
    </div>
  );
}
