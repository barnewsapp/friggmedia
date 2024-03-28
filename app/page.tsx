import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CallToAction } from './components/CallToAction';
import { Products } from './components/Products';
import { Navbar } from './components/Navbar';
import { Nav } from './components/Nav';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Nav />
      {/* <Navbar /> */}

      <Hero />
      <div className="bg-background h-full"></div>
      <Products />
      <CallToAction />
      <Footer />
    </div>
  );
}
