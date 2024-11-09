import Image from 'next/image';
import React, { useState } from 'react';

function Searchbar({ onToggleView }) {

  const [viewMode, setViewMode] = useState('grid');
  const [addclicked, setAddclicked] = useState(false);

  const handleToggleView = (mode) => {
    setViewMode(mode);
    onToggleView(mode);
  };
  const handleaddVendor = () => {
    setAddclicked(!addclicked);
  }
  const handleselction = () => {
    console.log("Vendor selected");
  }

  return (
    <>
      <div className='flex justify-between items-baseline'>
        <div className="flex items-center gap-3 mb-7">
          {/* Search input with icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name"
              className="rounded-xl px-5 py-3 focus:outline-none max-w-44 text-sm font-urbanist"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-customBlack">
              <Image src={'/images/Search.png'} height={24} width={24} alt="Search icon" />
            </span>
          </div>

          {/* Grid view button */}
          <button
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            onClick={() => handleToggleView('grid')}
          >
            {/* <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              width="16"
              height="12"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <rect x="0.5" y="0.5" width="7" height="5" rx="1.5" stroke={viewMode === 'grid' ? '#ffffff' : '#151515'} />
            </svg>
          ))}
        </div> */}

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill={`${viewMode === 'list' ? "#EEEEEE" : "151515"} `} />
              <rect x="11.5" y="13.5" width="7" height="5" rx="1.5" stroke={viewMode === 'list' ? '#151515' : '#ffffff'} />
              <rect x="21.5" y="13.5" width="7" height="5" rx="1.5" stroke={viewMode === 'list' ? '#151515' : '#ffffff'} />
              <rect x="11.5" y="21.5" width="7" height="5" rx="1.5" stroke={viewMode === 'list' ? '#151515' : '#ffffff'} />
              <rect x="21.5" y="21.5" width="7" height="5" rx="1.5" stroke={viewMode === 'list' ? '#151515' : '#ffffff'} />
            </svg>

          </button>

          {/* List view button */}
          <button
            className={`w-10 h-10 rounded-xl flex flex-col justify-center items-center gap-1 transition-colors duration-300 ${viewMode === 'list' ? 'bg-customBlack text-white' : 'bg-white text-customBlack'
              }`}
            onClick={() => handleToggleView('list')}
          >
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill={viewMode === 'list' ? 'customBlack' : 'white'} />
                <rect x="12.5" y="13.5" width="17" height="5" rx="1.5" stroke={viewMode === 'list' ? 'white' : '#151515'} />
                <rect x="12.5" y="21.5" width="17" height="5" rx="1.5" stroke={viewMode === 'list' ? 'white' : '#151515'} />
              </svg>

            </div>
          </button>
        </div>

        {/* listing vendors based on selection */}
        <div className='flex items-center justify-center gap-3'>
          <button className={`rounded-xl  ${addclicked ? 'border-[#0E59EF] border-[1px] ' : 'border-[#151515]'}`} onClick={handleaddVendor}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill='#F8F8F8' />
              <path d="M16 20H20M20 20H24M20 20V16M20 20V24" stroke={`${addclicked ? '#0E59EF' : '#151515'}`} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleselction}
            className={`rounded-xl p-2 flex items-center justify-between border-[#D5D5D5] border-[1px]`}>
            {/* <div className="flex items-center w-20 h-10 justify-between"> */}
            <select
              className="appearance-none bg-transparent w-20 h-10 text-gray-700 outline-none  cursor-pointer"
              defaultValue="20"
            >
              {/* <option value="" disabled hidden>
                  Select
                </option> */}
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1} className='flex items-center'>
                  {i + 1}
                </option>
              ))}
            </select>
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-16 ml-2"             >
              <path d="M6.5 9L12.5 15L18.5 9" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* </div> */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
