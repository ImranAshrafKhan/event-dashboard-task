import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="px-2 py-1 bg-white flex ">
      <Link href="/">
        <Image src="/Logo.png" width={40} height={40} alt="Company Logo" />
      </Link>

      <div className="ms-9 ps-1 bg-background rounded-full flex align-items-center">
        <IoSearch className="my-auto mx-2" />
        <input
          type="text"
          className="py-3 bg-transparent border-0 rounded-e-full outline-none"
          placeholder="Search events..."
        />
      </div>
    </header>
  );
};

export default Header;
