'use client';
import Image from 'next/image';
import EventsTable from '@/app/ui/dashboard/events-table';
import DisplayCounterCard from '@/app/ui/dashboard/display-counter-cards/display-counter-cards';
import MonthlyEventCard from '@/app/ui/dashboard/monthly-event-card';
import UpcomingEventsList from '@/app/ui/dashboard/upcoming-events-list';

import { AppDispatch } from '@/app/redux/store';
import { setEvents } from '@/app/redux/features/event-slice';
import { getEvents } from '@/app/lib/get-events';
import { setUpcomingEvents } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getAndDispatchEvents = async () => {
      try {
        const events = await getEvents();
        dispatch(setEvents({ count: events.count, results: events.results }));
        dispatch(setUpcomingEvents({ results: events.results }));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getAndDispatchEvents();
  }, [dispatch]);

  return (
    <>
      <div className="md:me-7 md:w-4/6 w-full h-full flex flex-col">
        {/* The left part of dashboard */}
        <div
          className="pb-5 w-full overflow-y-hidden"
          style={{ maxHeight: '70vh' }}
        >
          {/* Here we're displaying event list */}
          <div className="pb-2 flex justify-between">
            <h1 className="text-lg font-semibold">Events List</h1>
            <button className="px-2 py-3 bg-white border border-solid border-slate-300 rounded shadow-md ">
              <Image
                src="/filter-icon.svg"
                width={20}
                height={20}
                alt="Filter icon"
              />
            </button>
          </div>

          <div className="h-full overflow-y-auto relative">
            <EventsTable />
          </div>
        </div>

        <div className="h-1/6 w-full flex">
          {/* The overall dashboard stats cards */}
          <DisplayCounterCard />
        </div>
      </div>

      <div className="md:w-2/6 w-full flex flex-col">
        {/* Right part of dasboard */}
        <div className="mb-4 h-3/5 w-full">
          <UpcomingEventsList />
        </div>

        <div className="h-2/5 w-full hidden md:block ">
          <MonthlyEventCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
