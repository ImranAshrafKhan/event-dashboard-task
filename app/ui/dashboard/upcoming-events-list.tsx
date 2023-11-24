import { FaRegHeart, FaHeart } from 'react-icons/fa';

const UpcomingEventsList = () => {
  return (
    <div className="p-3 h-full w-full bg-white rounded-2xl ">
      <h1 className="mb-3 text-black text-xl">Upcoming Events</h1>
      <div
        className="w-full  relative overflow-y-scroll "
        style={{ maxHeight: '40vh' }}
      >
        <EventsData />
        <EventsData />
        <EventsData />
        <EventsData />
      </div>
    </div>
  );
};

const EventsData = () => {
  return (
    <div className="mt-2 p-3 w-full flex justify-between border border-solid border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100">
      <div>
        <p className="text-large text-slate-700 font-semibold">
          Web Development
        </p>
        <p className="text-xs text-slate-500 ">Thu 2 Nov, 12:00AM</p>
      </div>
      <div className=" text-primary flex">
        <button className="border-0 bg-transparent self-center">
          <FaRegHeart size={21} />
          {/* <FaHeart className="text-red-600" size={21} /> */}
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsList;
