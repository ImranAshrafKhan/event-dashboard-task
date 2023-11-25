import Image from 'next/image';
import EventsTable from '@/app/ui/dashboard/events-table';
import DisplayCounterCard from '@/app/ui/dashboard/display-counter-cards/display-counter-cards';
import MonthlyEventCard from '@/app/ui/dashboard/monthly-event-card';
import UpcomingEventsList from '@/app/ui/dashboard/upcoming-events-list';

export default function () {
  const event = {
    name: 'Web Development',
    category: 'AI',
    location: 'Bahria Intellectual Village',
    date: 'Thu 2 Nov 2023',
    time: '12:00am',
  };
  return (
    <main className="h-full w-full flex md:flex-row flex-col-reverse">
      <div className="md:me-7 md:w-4/6 w-full h-full flex flex-col">
        {/* The left part of dashboard */}
        <div
          className="pb-5 w-full overflow-y-hidden"
          style={{ maxHeight: '70vh' }}
        >
          {/* Here we're displaying event list */}
          <div className="pb-2 flex justify-between">
            <h1 className="text-lg font-semibold">Events List</h1>
            <button className="px-2 py-3 bg-white border border-solid border-slate-300 rounded shadow-md ">
              <Image
                src="/filter-icon.svg"
                width={20}
                height={20}
                alt="Filter icon"
              />
            </button>
          </div>

          <div className="h-full overflow-y-auto relative">
            <EventsTable />
          </div>
        </div>

        <div className="h-1/6 w-full flex">
          {/* The overall dashboard stats cards */}
          <DisplayCounterCard />
        </div>
      </div>

      <div className="md:w-2/6 w-full flex flex-col">
        {/* Right part of dasboard */}
        <div className="mb-4 h-3/5 w-full">
          <UpcomingEventsList />
        </div>

        <div className="h-2/5 w-full hidden md:block ">
          <MonthlyEventCard event={event} />
        </div>
      </div>
    </main>
  );
}
