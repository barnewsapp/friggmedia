import Image from 'next/image';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Navbar />
      <div className="bg-background h-full"></div>
      <Footer />
    </div>
  );
}
