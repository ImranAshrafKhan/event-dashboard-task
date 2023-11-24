import React from 'react';
import Sidebar from './sidebar';

const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 mt-2 h-full w-full flex flex-row">
      <Sidebar />

      <div className="w-full md:w-11/12">{children}</div>
    </div>
  );
};

export default Panel;
