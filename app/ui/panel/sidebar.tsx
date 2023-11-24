'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegHeart } from 'react-icons/fa';
import { PiSquaresFour } from 'react-icons/pi';
import clsx from 'clsx';

const Sidebar = () => {
  const path = usePathname();

  const linkComponent = (link: string, icon: React.ReactNode) => {
    return (
      <Link
        href={link}
        className={clsx(
          'p-2 m-3  rounded-full hover:bg-primaryLight hover:text-primary',
          {
            'bg-primaryLight text-primary': path === link,
          },
          {
            'bg-slate-100 text-slate-500': path !== link,
          }
        )}
      >
        {icon}
      </Link>
    );
  };

  return (
    <div className="py-2 me-4 bg-white rounded-full flex-col items-center hidden md:flex">
      {linkComponent('/', <PiSquaresFour size={25} />)}

      {linkComponent('/favourites', <FaRegHeart size={25} />)}
    </div>
  );
};

export default Sidebar;
