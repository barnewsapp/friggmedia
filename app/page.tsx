import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CallToAction } from './components/CallToAction';
import { Products } from './components/Products';
import { Navbar } from './components/Navbar';
import { ThemeSwitcher } from './components/ThemeSwitch';

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-lvh">
      <Navbar />
      <Hero />
      <Products />
      <CallToAction />
      <Footer />
    </div>
  );
}
