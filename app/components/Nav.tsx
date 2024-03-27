'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import ThemeSwitch from './ThemeSwitch';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Logo />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0 flex items-center`}
      >
        <div className="flex gap-6 items-center ">
          <a href="#" className="light:opacity-55 text-xl hover:text-blue-600">
            Om oss
          </a>
          <a href="#" className="light:opacity-55 text-xl hover:text-blue-600">
            Kontakt oss
          </a>
          <a href="#" className="light:opacity-55 text-xl hover:text-blue-600">
            <ThemeSwitch />
          </a>
        </div>
      </nav>
    </header>
  );
};
