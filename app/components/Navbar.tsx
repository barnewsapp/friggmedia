'use client';

import React from 'react';
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitch';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Om oss', 'Kontakt oss'];

  return (
    <NUINavbar
      maxWidth="full"
      className="px-8 bg-background justify-between"
      classNames={{ wrapper: 'px-0' }}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link color="foreground" className="opacity-55 text-xl hover:text-blue-600" href="#">
            Om oss
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="opacity-55 text-xl hover:text-blue-600"
            href="#"
            aria-current="page"
          >
            Kontakt oss
          </Link>
        </NavbarItem>
      </NavbarContent>

      <ThemeSwitcher />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NUINavbar>
  );
}
