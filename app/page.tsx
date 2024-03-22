import Image from 'next/image';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Header />
      <div className="bg-background h-4/5	"></div>
      <Footer />
    </div>
  );
}
