'use client'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image src="/education-book-library-search-svgrepo-com_light.svg" className="mr-3 h-6 sm:h-9" width={32} height={32} alt="book search" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Up</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
