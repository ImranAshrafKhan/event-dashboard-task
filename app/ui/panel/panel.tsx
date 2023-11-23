import React from 'react';
import Sidebar from './sidebar';

const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 mt-2 h-full flex flex-row">
      <Sidebar />

      <div>{children}</div>
    </div>
  );
};

export default Panel;
