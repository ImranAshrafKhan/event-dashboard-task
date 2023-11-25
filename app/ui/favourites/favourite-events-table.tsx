'use client';

import { AppDispatch } from '@/app/redux/store';
import { useAppSelector } from '@/app/redux/store';
import { Event } from '@/app/redux/features/event-slice';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiArrowsUpDown } from 'react-icons/hi2';
import {
  addEventtoFavourite,
  sortEvents,
} from '@/app/redux/features/event-slice';
import { addEventToFavouriteEvents } from '@/app/redux/features/favourite-events-slice';
import { addUpcomingEventtoFavourite } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FavouriteEventsTable = ({
  handleSelectEvent,
}: {
  handleSelectEvent: Function;
}) => {
  const [isAscending, setIsAscending] = useState(true);
  const favouriteEvents = useAppSelector(
    (state) => state.favouriteEventsReducer.events
  );
  const dispatch = useDispatch<AppDispatch>();

  const toggleSort = async (isAscending: boolean) => {
    dispatch(sortEvents({ isAscending }));
  };

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
                onClick={() => {
                  setIsAscending(!isAscending);
                  toggleSort(isAscending);
                }}
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
          {favouriteEvents.map((event, index) => (
            <FavouriteEventRow
              event={event}
              handleSelectEvent={handleSelectEvent}
              index={index}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavouriteEventsTable;

const FavouriteEventRow = ({
  event,
  index,
  handleSelectEvent,
}: {
  event: Event;
  index: number;
  handleSelectEvent: Function;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleFavourites = (event: Event) => {
    dispatch(addEventtoFavourite({ id: event.id }));
    dispatch(addEventToFavouriteEvents({ results: event }));
    dispatch(addUpcomingEventtoFavourite({ id: event.id }));
  };
  return (
    <tr
      className="w-full bg-white text-start rounded-3xl border border-solid border-slate-200 cursor-pointer hover:bg-slate-100 "
      key={index}
    >
      <th
        className="px-6 py-4 font-extrabold text-slate-800"
        onClick={() => handleSelectEvent(event)}
      >
        {event.rank}
      </th>
      <td className="px-6 py-4" onClick={() => handleSelectEvent(event)}>
        {event.title}
      </td>
      <td
        className="px-6 py-4 font-bold"
        onClick={() => handleSelectEvent(event)}
      >
        {event.date}
      </td>
      <td
        className="px-6 py-4 font-bold"
        onClick={() => handleSelectEvent(event)}
      >
        {event.time}
      </td>
      <td className="px-6 py-4" onClick={() => handleSelectEvent(event)}>
        {event.country}
      </td>
      <td className="px-6 py-4 text-primary">
        <button
          className="border-0 bg-transparent"
          onClick={() => toggleFavourites(event)}
        >
          {event.isFavourite ? (
            <FaHeart className="text-red-600" size={21} />
          ) : (
            <FaRegHeart size={21} />
          )}
        </button>
      </td>
    </tr>
  );
};
