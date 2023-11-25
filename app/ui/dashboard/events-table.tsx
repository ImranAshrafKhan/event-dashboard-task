'use client';

import { useAppSelector } from '@/app/redux/store';
import { Event } from '@/app/redux/features/event-slice';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

const EventsTable = ({
  handleSelectEvent,
}: {
  handleSelectEvent: Function;
}) => {
  const [isAscending, setIsAscending] = useState(true);
  const [events, setEvents] = useState(
    useAppSelector((state) => state.eventsReducer.events)
  );

  useEffect(() => {
    setEvents(() =>
      isAscending
        ? [...events].sort((a, b) => a.rank - b.rank)
        : [...events].sort((a, b) => b.rank - a.rank)
    );
  }, [isAscending]);

  return (
    <div className="h-5/6 overflow-x-auto relative">
      <table className="w-full text-xs text-left text-slate-700 border-separate border-spacing-y-2">
        <thead
          className="text-xs uppercase "
          style={{ borderBottom: '5px solid black' }}
        >
          <tr>
            <th
              scope="col"
              className="px-6 py-4 flex border-b-2 border-solid border-slate-400"
            >
              #{' '}
              <button
                className="ms-2 bg-transparent text-primary border-0 rounded-full hover:bg-slate-200 "
                onClick={() => setIsAscending(!isAscending)}
              >
                <HiArrowsUpDown size={15} />
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-4 border-b-2 border-solid border-slate-400"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 border-b-2 border-solid border-slate-400"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6 py-4 border-b-2 border-solid border-slate-400"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 border-b-2 border-solid border-slate-400"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-4 border-b-2 border-solid border-slate-400"
            ></th>
          </tr>
        </thead>

        <tbody className="text-slate-500 font-medium ">
          {events.map((event, index) => (
            <EventRow
              event={event}
              index={index}
              handleSelectEvent={handleSelectEvent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EventRow = ({
  event,
  index,
  handleSelectEvent,
}: {
  event: Event;
  index: number;
  handleSelectEvent: Function;
}) => {
  return (
    <tr
      className="w-full bg-white text-start rounded-3xl border border-solid border-slate-200 cursor-pointer hover:bg-slate-100 "
      key={index}
      onClick={() => handleSelectEvent(event)}
    >
      <th className="px-6 py-4 font-extrabold text-slate-800">{event.rank}</th>
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
  );
};

export default EventsTable;
