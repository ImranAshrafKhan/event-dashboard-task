import React from 'react';
import Image from 'next/image';

const EventsTable = () => {
  return (
    <>
      <div className="mb-2 flex justify-between">
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
      <div className="relative overflow-x-auto  sm:rounded-lg border-0">
        <table className="w-full text-xs text-left text-slate-700 ">
          <thead className="text-xs uppercase border-b border-solid border-slate-400">
            <tr>
              <th scope="col" className="ps-8 py-3">
                #
              </th>
              <th scope="col" className=" py-3">
                Name
              </th>
              <th scope="col" className=" py-3">
                Time
              </th>
              <th scope="col" className=" py-3">
                Date
              </th>
              <th scope="col" className=" py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-500 font-medium">
            <tr className="bg-white border border-solid border-slate-200">
              <th
                scope="row"
                className="px-6 py-4 font-extrabold text-slate-800"
              >
                01
              </th>
              <td className="py-4">Web Development</td>
              <td className="py-4 font-bold">12:00AM</td>
              <td className="py-4 font-bold">Thu 2 Nov</td>
              <td className="py-4">Bahria Intellectual Village</td>
            </tr>
            <tr className="bg-white  mb-6">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                02
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventsTable;
