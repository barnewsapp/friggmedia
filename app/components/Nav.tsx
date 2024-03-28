'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Logo } from './Logo';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Om oss', 'Kontakt oss'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={false}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:block">
          <Link color="foreground" className="opacity-55 text-xl hover:text-blue-600" href="#">
            Om oss
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
