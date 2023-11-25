'use client';
import CardTemplate from './card-template';
import { useAppSelector } from '@/app/redux/store';

const DisplayCounterCard = () => {
  const totalEvents = useAppSelector((state) => state.eventsReducer.totalCount);

  const eventsThisMonth = useAppSelector(
    (state) => state.upcomingEventReducer.currentMonthEventsCount
  );
  const totalFavouriteEvents = useAppSelector(
    (state) => state.favouriteEventsReducer.totalCount
  );

  return (
    <>
      <div className="w-4/12">
        <CardTemplate cardTitle="All Events" amount={totalEvents} />
      </div>
      <div className="mx-4 w-4/12">
        <CardTemplate cardTitle="This Month" amount={eventsThisMonth} />
      </div>
      <div className="w-4/12">
        <CardTemplate
          cardTitle="Favourite Events"
          amount={totalFavouriteEvents}
        />
      </div>
    </>
  );
};

export default DisplayCounterCard;
