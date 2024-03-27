'use client';

import Image from 'next/image';
import { Logo } from './Logo';
import { Socials } from './Socials';

export function Footer() {
  return (
    <footer>
      <div className=" px-8 py-4 ">
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
