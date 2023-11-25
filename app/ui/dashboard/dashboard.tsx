'use client';
import Image from 'next/image';
import Loading from '@/app/ui/loading';
import EventsTable from '@/app/ui/dashboard/events-table';
import DisplayCounterCard from '@/app/ui/dashboard/display-counter-cards/display-counter-cards';
import MonthlyEventCard from '@/app/ui/dashboard/monthly-event-card';
import UpcomingEventsList from '@/app/ui/dashboard/upcoming-events-list';
import DisplayEventModal from '@/app/ui/display-event-modal';

import { AppDispatch, useAppSelector } from '@/app/redux/store';
import { setEvents, setLoading } from '@/app/redux/features/event-slice';
import { setFavEvents } from '@/app/redux/features/favourite-events-slice';
import { setUpcomingEvents } from '@/app/redux/features/upcoming-events-slice';
import { filterEvents } from '@/app/lib/events/filter-events';
import { initializer } from '@/app/redux/features/upcoming-events-slice';
import { getEvents } from '@/app/lib/events/get-events';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  const [needDropdown, setNeedDropdown] = useState(false);

  const [searchCategory, setSearchCategory] = useState('');

  const categories = [
    { value: 'school-holidays', label: 'School Holidays' },
    { value: 'public-holidays', label: 'Public Holidays' },
    { value: 'observances', label: 'Observances' },
    { value: 'politics', label: 'Politics' },
    { value: 'conferences', label: 'Conferences' },
    { value: 'expos', label: 'Expos' },
    { value: 'concerts', label: 'Concerts' },
    { value: 'festivals', label: 'Festival' },
    { value: 'perform-arts', label: 'Performing Arts' },
    { value: 'sports', label: 'Sports' },
    { value: 'community', label: 'Community' },
    { value: 'daylight-savings', label: 'Daylight Savings' },
    { value: 'airport-delays', label: 'Airport Delays' },
    { value: 'severe-weather', label: 'Severe Weather' },
    { value: 'disasters', label: 'Disasters' },
    { value: 'terror', label: 'Terror' },
    { value: 'health-warnings', label: 'Health Warnings' },
    { value: 'academic', label: 'Academic' },
  ];

  const [fromDateTime, setFromDateTime] = useState('');
  const [toDateTime, setToDateTime] = useState('');

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
        dispatch(setFavEvents());
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        dispatch(setLoading({ loading: false }));
      }
    };

    getAndDispatchEvents();
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.eventsReducer.isLoading);

  const searchAndfilterEvents = async (
    searchCategory: string,
    fromDate: string,
    toDate: string
  ) => {
    try {
      console.log(searchCategory);
      dispatch(setLoading({ loading: true }));
      const events = await filterEvents(searchCategory, fromDate, toDate);

      dispatch(setEvents({ count: events.count, results: events.results }));
      dispatch(setUpcomingEvents({ results: events.results }));
      dispatch(setLoading({ loading: false }));
    } catch (error) {
      console.error('Error while filtering events:', error);
      dispatch(setLoading({ loading: false }));
    }
  };

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
                    <div className="px-3 py-5 w-full" role="none">
                      <div className="w-6/12 text-sm text-slate-500">
                        <p className="mb-1">Category</p>
                        <select
                          className="p-2 w-full bg-filterField   rounded "
                          value={searchCategory}
                          onChange={(e) => setSearchCategory(e.target.value)}
                        >
                          {categories.map((category, index) => (
                            <option key={index} value={category.value}>
                              {category.label}
                            </option>
                          ))}
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
                              value={fromDateTime}
                              onChange={(e) => setFromDateTime(e.target.value)}
                              className="p-2 bg-filterField rounded"
                            />
                          </div>

                          <div className="ps-3">
                            <p className="pb-1 text-xs text-slate-300">To</p>

                            <input
                              type="datetime-local"
                              id="datetime"
                              value={toDateTime}
                              onChange={(e) => setToDateTime(e.target.value)}
                              className="p-2 bg-filterField rounded"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 w-full flex justify-end">
                        <button
                          className="p-2 bg-primary text-white text-semibold border-0 rounded self-end"
                          onClick={() =>
                            searchAndfilterEvents(
                              searchCategory,
                              fromDateTime,
                              toDateTime
                            )
                          }
                        >
                          <FaArrowRight size={25} />
                        </button>
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

          <div className="mt-5 w-full flex md:hidden justify-center">
            <div className="" style={{ maxWidth: '70vh', minHeight: '30vh' }}>
              <MonthlyEventCard />
            </div>
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
