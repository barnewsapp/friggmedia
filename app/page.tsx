import { Hero } from './components/Hero';
import { CallToAction } from './components/CallToAction';
import { Products } from './components/Products';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-between h-full bg-background text-foreground">
      <Hero />
      <Products />
      <CallToAction />
    </div>
  );
}
