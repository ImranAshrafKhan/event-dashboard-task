import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';

type Event = {
  name: string;
  date: string;
  time: string;
  location: string;
  category: string;
};

const MonthlyEventCard = ({ event }: { event: Event }) => {
  return (
    <div className="h-full w-full bg-primaryDark text-white rounded-3xl drop-shadow-xl">
      <div className="px-1 lg:px-4 p-4 pb-1 w-full flex justify-between">
        <h1 className="w-11/12 lg:w-6/12 text-3xl font-bold">
          Event of the month
        </h1>
        <Image
          src="/medal.svg"
          width={40}
          height={40}
          alt="Medal "
          className="rotate-6 me-5 w-2/12"
        />
      </div>

      <div className="mx-2 lg:mx-4 px-1 lg:px-4 py-2  w-11/12 bg-white text-slate-500 text-xs rounded-lg">
        <div className="w-full flex justify-between">
          <div className=" text-primary text-base font-bold">{event.name}</div>
          <div className=" text-primary font-bold">LOL</div>
        </div>

        <div className="w-full flex justify-between">
          <div>
            Category: <span className="font-semibold">{event.category}</span>
          </div>
          <div className=" text-slate-300 self-center">{event.date}</div>
        </div>

        <div className=" w-full flex justify-between">
          <div className="flex">
            <span className="text-primary">
              <MdLocationPin size={18} />
            </span>{' '}
            <span className="self-end">{event.location}</span>
          </div>

          <div className=" text-slate-300 text-xs self-center">
            {event.time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEventCard;
