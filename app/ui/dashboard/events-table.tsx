'use client';

import { AppDispatch, useAppSelector } from '@/app/redux/store';
import { setEvents } from '@/app/redux/features/event-slice';
import { getEvents } from '@/app/lib/get-events';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

type Event = {
  rank: number;
  title: string;
  category: string;
  description: string;
  country: string;
  start: string;
};

const EventsTable = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getAndDispatchEvents = async () => {
      try {
        const events = await getEvents();
        dispatch(setEvents({ count: events.count, results: events.results }));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getAndDispatchEvents();
  }, [dispatch]);

  const events = useAppSelector((state) => state.eventsReducer.events);
  const totalEvents = useAppSelector((state) => state.eventsReducer.totalCount);

  return (
    <div className="h-5/6 border-0 overflow-x-auto relative">
      <table
        className="w-full text-xs text-left text-slate-700 "
        cellSpacing={30}
        cellPadding={30}
      >
        <thead className="text-xs uppercase border-b border-solid border-slate-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Time
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Location
            </th>
            <th scope="col" className="px-6 py-4"></th>
          </tr>
        </thead>

        <tbody className="text-slate-500 font-medium">
          {events.map((event, index) => (
            <EventRow event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EventRow = ({ event }: { event: Event }) => {
  return (
    <tr className="cursor-pointer">
      <td colSpan={6} className="p-0 pt-3">
        <div className="bg-white text-start rounded-xl border border-solid border-slate-200 hover:bg-slate-100">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="px-6 py-4 font-extrabold text-slate-800">
                  {event.rank}
                </td>
                <td className="px-6 py-4">{event.title}</td>
                <td className="px-6 py-4 font-bold">{event.start}</td>
                <td className="px-6 py-4 font-bold">{event.start}</td>
                <td className="px-6 py-4">{event.country}</td>
                <td className="px-6 py-4 text-primary">
                  <button className="border-0 bg-transparent">
                    {/* <FaRegHeart size={21} /> */}
                    <FaHeart className="text-red-600" size={21} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};

export default EventsTable;
