'use client';
import Navbar from './navbar/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="px-4 py-1 bg-white flex justify-between ">
      <div className="w-5/6 flex items-center">
        <Link href="/">
          <Image src="/logo.svg" width={40} height={40} alt="Company Logo" />
        </Link>

        <div className="ms-9 ps-1 w-5/6 md:w-4/6 bg-background rounded-full flex items-center">
          <IoSearch className="my-auto mx-2 w-1/12" />
          <input
            type="text"
            className="py-3 w-11/12 bg-transparent border-0 rounded-e-full outline-none"
            placeholder="Search events..."
          />
        </div>
      </div>

      <button
        className="bg-transparent border-0 block md:hidden"
        onClick={toggleNavbar}
      >
        <Image
          src="/sandwich-button.svg"
          width={20}
          height={20}
          alt="Sandwich button"
        />
      </button>
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
    </header>
  );
};

export default Header;
