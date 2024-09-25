'use client';

import Image from 'next/image';
import { Logo } from './Logo';
import { Socials } from './Socials';

export function Footer() {
  return (
    <footer>
      <div className="mx-4 md:mx-8 pt-32 pb-16 space-y-5">
        <div className="flex flex-col md:flex-row ">
          <div className="mb-4 md:mb-0 ">
            <a href="#">
              <Logo />
            </a>
          </div>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
