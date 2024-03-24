'use client';

import { Box, Flex, HStack, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

const Links = ['Produkter', 'Om oss', 'Kontakt oss'];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      href={'#'}
      className="text-black opacity-55 text-xl hover:text-blue-600 transition-colors"
    >
      {children}
    </Box>
  );
};

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="bg-background px-8 py-4">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} justify="end" borderColor={'red.900'}>
            <Box>
              <Image src="/logo.svg" alt="Friggmedia Logo" width={175} height={40} priority />
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
