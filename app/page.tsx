import Image from 'next/image';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { CallToAction } from './components/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Navbar />
      <Header />
      <div className="bg-background h-full"></div>
      <CallToAction />
      <Footer />
    </div>
  );
}
