import React from 'react';

const Card = ({ cardTitle, amount }: { cardTitle: string; amount: number }) => {
  let formattedNum = '';
  if (amount >= 1000) formattedNum = (amount / 1000).toFixed(1) + 'k';

  return (
    <div className="ps-3 pt-3 h-full w-full rounded-xl border border-solid border-slate-200">
      <p className="text-xs md:text-md font-semibold text-slate-400 ">
        {cardTitle}
      </p>
      <p className="text-sm md:text-xl font-bold text-black">
        {formattedNum ? formattedNum : amount}
      </p>
    </div>
  );
};

export default Card;
