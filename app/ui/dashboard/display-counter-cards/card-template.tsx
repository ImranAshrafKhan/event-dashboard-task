import React from 'react';

const CardTemplate = ({
  cardTitle,
  amount,
}: {
  cardTitle: string;
  amount: number;
}) => {
  let formattedNum = '';
  if (amount >= 1000) formattedNum = (amount / 1000).toFixed(1) + 'k';

  return (
    <div className="ps-0 md:ps-3 pt-3 h-full w-full rounded-xl border border-solid border-slate-200">
      <p className="text-xs md:text-md text-center md:text-start font-semibold text-slate-400 ">
        {cardTitle}
      </p>
      <p className="text-sm md:text-xl text-center md:text-start font-bold text-black">
        {formattedNum ? formattedNum : amount}
      </p>
    </div>
  );
};

export default CardTemplate;
