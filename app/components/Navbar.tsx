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

  const menuItems = [{title: 'Om oss', path: "om-oss"}, {title: 'Kontakt', path: "kontakt"}];

  return (
    <NUINavbar
      maxWidth="full"
      className="px-8 justify-center"
      classNames={{ wrapper: 'px-0' }}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden mx-4"
        />
        <Link href="/">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end" className="space-x-8 hidden sm:flex">
        <NavbarItem>
          <Link color="foreground" className="text-xl text-slate-700 hover:text-slate-900" href="om-oss">
            Om oss
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-xl text-slate-700 hover:text-slate-900"
            href="kontakt"
            aria-current="page"
          >
            Kontakt
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link color="foreground" className="w-full" href={item.path} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NUINavbar>
  );
}
