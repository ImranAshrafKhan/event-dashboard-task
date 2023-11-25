'use client';
import Navbar from './navbar/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { AppDispatch } from '@/app/redux/store';
import { setEvents, setLoading } from '@/app/redux/features/event-slice';
import { searchHandler } from '@/app/lib/events/search-handler';
import { setUpcomingEvents } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const setEventsBySearch = async (searchText: string) => {
    try {
      dispatch(setLoading({ loading: true }));
      console.log(searchText);

      const events = await searchHandler(searchText);
      dispatch(setEvents({ count: events.count, results: events.results }));
      dispatch(setUpcomingEvents({ results: events.results }));
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };

  return (
    <header className="py-3 px-4 pt-1 bg-white flex justify-between ">
      <div className="mt-2 w-5/6 flex items-center">
        <Link href="/">
          <Image src="/logo.svg" width={40} height={40} alt="Company Logo" />
        </Link>

        <div className="ms-9 ps-1 w-5/6 md:w-4/6 bg-background rounded-full flex items-center">
          <form
            className="w-full bg-transparent border-0 flex"
            onSubmit={(e) => {
              e.preventDefault();
              setEventsBySearch(search);
            }}
          >
            <button
              className="w-1/12 bg-transparent flex justify-center items-center border-0 rounded-s-3xl hover:bg-slate-200 "
              type="submit"
            >
              <IoSearch size={18} className="py-auto mx-2  text-slate-700" />
            </button>
            <input
              type="text"
              className="py-3 w-full flex-grow bg-transparent border-0 rounded-e-full outline-none"
              placeholder="Search events..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
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
