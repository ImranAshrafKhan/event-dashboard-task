'use client';
import CardTemplate from './card-template';
import { useAppSelector } from '@/app/redux/store';

const DisplayCounterCard = () => {
  const totalEvents = useAppSelector((state) => state.eventsReducer.totalCount);

  return (
    <>
      <div className="w-4/12">
        <CardTemplate cardTitle="All Events" amount={totalEvents} />
      </div>
      <div className="mx-4 w-4/12">
        <CardTemplate cardTitle="This Month" amount={30} />
      </div>
      <div className="w-4/12">
        <CardTemplate cardTitle="Favourite Events" amount={25} />
      </div>
    </>
  );
};

export default DisplayCounterCard;
