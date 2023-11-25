'use client';

import { useAppSelector } from '@/app/redux/store';
import { Event } from '@/app/redux/features/event-slice';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const EventsTable = () => {
  const events = useAppSelector((state) => state.eventsReducer.events);

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
            <EventRow event={event} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EventRow = ({ event, index }: { event: Event; index: number }) => {
  return (
    <tr className="cursor-pointer" key={index}>
      <td colSpan={6} className="p-0 pt-3">
        <div className="bg-white text-start rounded-xl border border-solid border-slate-200 hover:bg-slate-100">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="px-6 py-4 font-extrabold text-slate-800">
                  {event.rank}
                </td>
                <td className="px-6 py-4">{event.title}</td>
                <td className="px-6 py-4 font-bold">{event.date}</td>
                <td className="px-6 py-4 font-bold">{event.time}</td>
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
