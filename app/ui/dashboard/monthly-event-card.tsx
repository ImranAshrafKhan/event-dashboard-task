'use client';

import { useAppSelector } from '@/app/redux/store';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';

const MonthlyEventCard = () => {
  const eventOfTheMonth = useAppSelector(
    (state) => state.upcomingEventReducer.eventOfTheMonth
  );

  return (
    <div className="h-full w-full bg-primaryDark text-white rounded-3xl drop-shadow-xl overflow-y-auto overflow-x-hidden">
      <div className="px-1 lg:px-4 p-4 pb-1 w-full flex justify-between">
        <h1 className="w-11/12 lg:w-6/12 text-2xl font-bold">
          Event of the month
        </h1>
        <Image
          src="/medal.svg"
          width={25}
          height={25}
          alt="Medal "
          className="rotate-6 me-5 "
        />
      </div>

      <div className="mx-2 lg:mx-4 px-1 lg:px-4 py-2  w-11/12 bg-white text-slate-500 text-xs rounded-lg">
        <div className="w-full flex justify-between">
          <div className=" text-primary text-base font-bold">
            {eventOfTheMonth.title === 'Loading'
              ? 'No events this month'
              : eventOfTheMonth.title}
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div>
            Category:{' '}
            <span className="font-semibold">{eventOfTheMonth.category}</span>
          </div>
          <div className=" text-slate-300 self-center">
            {eventOfTheMonth.date}
          </div>
        </div>

        <div className=" w-full flex justify-between">
          <div className="flex">
            <span className="text-primary">
              <MdLocationPin size={18} />
            </span>{' '}
            <span className="self-end">{eventOfTheMonth.country}</span>
          </div>

          <div className=" text-slate-300 text-xs self-center">
            {eventOfTheMonth.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEventCard;
