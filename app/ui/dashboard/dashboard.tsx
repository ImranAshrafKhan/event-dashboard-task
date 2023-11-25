'use client';
import Image from 'next/image';
import Loading from '../loading';
import EventsTable from '@/app/ui/dashboard/events-table';
import DisplayCounterCard from '@/app/ui/dashboard/display-counter-cards/display-counter-cards';
import MonthlyEventCard from '@/app/ui/dashboard/monthly-event-card';
import UpcomingEventsList from '@/app/ui/dashboard/upcoming-events-list';
import DisplayEventModal from './display-event-modal';

import { AppDispatch, useAppSelector } from '@/app/redux/store';
import { setEvents, setLoading } from '@/app/redux/features/event-slice';
import { getEvents } from '@/app/lib/events/get-events';
import { setUpcomingEvents } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { initializer } from '@/app/redux/features/upcoming-events-slice';

const Dashboard = () => {
  const [needDropdown, setNeedDropdown] = useState(false);

  const [searchCategory, setSearchCategory] = useState('');
  const [dateTime, setDateTime] = useState('');

  const [selectedEvent, setSelectedEvent] = useState(initializer);
  const handleSelectEvent = (event: any) => {
    setSelectedEvent(event);
    setShow(true);
  };
  const [show, setShow] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getAndDispatchEvents = async () => {
      try {
        dispatch(setLoading({ loading: true }));
        const events = await getEvents();
        dispatch(setEvents({ count: events.count, results: events.results }));
        dispatch(setUpcomingEvents({ results: events.results }));
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        dispatch(setLoading({ loading: false }));
      }
    };

    getAndDispatchEvents();
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.eventsReducer.isLoading);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <DisplayEventModal event={selectedEvent} show={show} setShow={setShow} />
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

              <div className="relative inline-block text-left">
                <div>
                  <button
                    className="px-2 py-3 bg-white border border-solid border-slate-300 rounded shadow-md "
                    onClick={() => setNeedDropdown(!needDropdown)}
                  >
                    <Image
                      src="/filter-icon.svg"
                      width={20}
                      height={20}
                      alt="Filter icon"
                    />
                  </button>
                </div>
                {needDropdown && (
                  <div
                    className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="px-3 py-5 w-6/12" role="none">
                      <div className="text-sm text-slate-500">
                        <p className="mb-1">Category</p>
                        <select
                          className="p-2 w-full bg-filterField   rounded "
                          value={searchCategory}
                          onChange={(e) => setSearchCategory(e.target.value)}
                        >
                          <option className="bg-black" value="Web Development">
                            Web Development
                          </option>
                          <option className="bg-black" value="AI">
                            AI
                          </option>
                        </select>
                      </div>

                      <div className="mt-4 text-sm text-slate-500">
                        <p className="mb-2">Date & Time</p>
                        <div className="flex">
                          <div>
                            <p className="pb-1 text-xs text-slate-300">From</p>

                            <input
                              type="datetime-local"
                              id="datetime"
                              value={dateTime}
                              onChange={(e) => setDateTime(e.target.value)}
                              className="p-2 bg-filterField rounded"
                            />
                          </div>

                          <div className="ps-3">
                            <p className="pb-1 text-xs text-slate-300">To</p>

                            <input
                              type="datetime-local"
                              id="datetime"
                              value={dateTime}
                              onChange={(e) => setDateTime(e.target.value)}
                              className="p-2 bg-filterField rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="h-full overflow-y-auto relative">
              <EventsTable handleSelectEvent={handleSelectEvent} />
            </div>
          </div>

          <div className="h-1/6 w-full flex">
            {/* The overall dashboard stats cards */}
            <DisplayCounterCard />
          </div>

          <div className=" w-full block md:hidden ">
            <MonthlyEventCard />
          </div>
        </div>

        <div className="md:w-2/6 w-full flex flex-col">
          {/* Right part of dasboard */}
          <div className="mb-4 h-3/5 w-full">
            <UpcomingEventsList />
          </div>

          <div
            className="h-2/5 w-full hidden md:block "
            style={{ maxHeight: '30vh' }}
          >
            <MonthlyEventCard />
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
