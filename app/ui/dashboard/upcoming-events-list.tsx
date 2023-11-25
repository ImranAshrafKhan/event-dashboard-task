'use client';

import { Event } from '@/app/redux/features/event-slice';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useAppSelector } from '@/app/redux/store';
import { addEventtoFavourite } from '@/app/redux/features/event-slice';
import { addEventToFavouriteEvents } from '@/app/redux/features/favourite-events-slice';
import { addUpcomingEventtoFavourite } from '@/app/redux/features/upcoming-events-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/redux/store';

const UpcomingEventsList = () => {
  const upcomingEvents = useAppSelector(
    (state) => state.upcomingEventReducer.upcomingEvents
  );
  return (
    <div className="p-3 h-full w-full bg-white rounded-2xl ">
      <h1 className="mb-3 text-black text-xl">Upcoming Events</h1>
      <div
        className="w-full  relative overflow-y-scroll "
        style={{ maxHeight: '40vh' }}
      >
        {upcomingEvents.map((event, index) => (
          <SingleUpcomingEvent
            upcomingEvent={event}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const SingleUpcomingEvent = ({
  upcomingEvent,
  index,
}: {
  upcomingEvent: Event;
  index: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleFavourites = (event: Event) => {
    dispatch(addEventtoFavourite({ id: event.id }));
    dispatch(addEventToFavouriteEvents({ results: event }));
    dispatch(addUpcomingEventtoFavourite({ id: event.id }));
  };
  return (
    <div
      className="mt-2 p-3 w-full flex justify-between border border-solid border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100"
      key={index}
    >
      <div>
        <p className="text-large text-slate-700 font-semibold">
          {upcomingEvent.title}
        </p>
        <p className="text-xs text-slate-500 ">
          {upcomingEvent.date}, {upcomingEvent.time}
        </p>
      </div>
      <div className=" text-primary flex">
        <button
          className="border-0 bg-transparent self-center"
          onClick={() => toggleFavourites(upcomingEvent)}
        >
          {upcomingEvent.isFavourite ? (
            <FaHeart className="text-red-600" size={21} />
          ) : (
            <FaRegHeart size={21} />
          )}
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsList;
