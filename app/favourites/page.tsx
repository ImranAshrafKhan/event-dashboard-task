'use client';

import Image from 'next/image';
import Loading from '@/app/ui/loading';
import DisplayEventModal from '@/app/ui/display-event-modal';
import FavouriteEventsTable from '@/app/ui/favourites/favourite-events-table';

import { AppDispatch, useAppSelector } from '@/app/redux/store';
import { setLoading } from '@/app/redux/features/event-slice';
import { setFavEvents } from '@/app/redux/features/favourite-events-slice';
import { initializer } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const Favourites = () => {
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

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <DisplayEventModal event={selectedEvent} show={show} setShow={setShow} />
      <div
        className="pb-5 w-full overflow-y-hidden"
        style={{ maxHeight: '70vh' }}
      >
        {/* Here we're displaying event list */}
        <div className="pb-2 flex justify-between">
          <h1 className="text-lg font-semibold">Favorite List</h1>

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
          <FavouriteEventsTable handleSelectEvent={handleSelectEvent} />
        </div>
      </div>
    </>
  );
};

export default Favourites;
