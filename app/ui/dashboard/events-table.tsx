'use client';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const EventsTable = () => {
  return (
    <div className="h-5/6 border-0 overflow-x-auto relative">
      <table
        className="w-full text-xs text-left text-slate-700 "
        cellSpacing={30}
        cellPadding={30}
      >
        <thead className="text-xs uppercase border-b border-solid border-slate-400">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Time
            </th>
            <th scope="col" className="px-6 py-4">
              Date
            </th>
            <th scope="col" className="px-6 py-4">
              Location
            </th>
            <th scope="col" className="px-6 py-4"></th>
          </tr>
        </thead>

        <tbody className="text-slate-500 font-medium">
          <tr className="cursor-pointer">
            <td colSpan={6} className="p-0 pt-3">
              <div className="bg-white text-start rounded-xl border border-solid border-slate-200 hover:bg-slate-100">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 font-extrabold text-slate-800">
                        01
                      </td>
                      <td className="px-6 py-4">Web Development</td>
                      <td className="px-6 py-4 font-bold">12:00AM</td>
                      <td className="px-6 py-4 font-bold">Thu 2 Nov</td>
                      <td className="px-6 py-4">Bahria Intellectual Village</td>
                      <td className="px-6 py-4 text-primary">
                        <button className="border-0 bg-transparent">
                          {/* <FaRegHeart size={21} /> */}
                          <FaHeart className="text-red-600" size={21} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
