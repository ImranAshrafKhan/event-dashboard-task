import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { RxCross2 } from 'react-icons/rx';

const Navbar = ({
  isOpen,
  toggleNavbar,
}: {
  isOpen: boolean;
  toggleNavbar: () => void;
}) => {
  const listItemsComponent = (link: string, text: string) => {
    return (
      <li className={`${styles.listItem}`}>
        <Link
          href={link}
          onClick={toggleNavbar}
          className={`${styles.navlink}`}
        >
          <h2 className="mb-2 font-semibold">{text}</h2>
        </Link>
      </li>
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-primary z-50 ${
        isOpen ? 'block' : 'hidden'
      } `}
    >
      <nav className="px-6 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/logo-white.svg"
            width={40}
            height={40}
            alt="Company Logo"
          />
          <button
            className="text-white bg-transparent border-0"
            onClick={toggleNavbar}
          >
            <RxCross2 size={30} />
          </button>
        </div>
        <ul className="p-0 m-0 list-none">
          {listItemsComponent('/dashboard', 'Dashboard')}

          {listItemsComponent('/favourites', 'Favourite Events')}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
