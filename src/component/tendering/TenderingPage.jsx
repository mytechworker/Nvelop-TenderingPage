"use client";
import { useState } from "react";
import VendorCard from "./VendorCard";
import { MdOutlineDone } from 'react-icons/md'

const TenderingPage = () => {
  // Sample data for vendors
  const initialVendors = [
    { id: 1, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: true },
    { id: 2, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 3, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 4, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 5, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 6, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 7, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: true },
    { id: 8, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 9, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 10, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 11, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 12, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 13, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
    { id: 14, img: '/images/fu.png', companyName: 'Company name', email: 'contact@company.com', isNew: true, isSelected: false },
  ];

  const [vendors, setVendors] = useState(initialVendors);
  const selectedCount = vendors.filter(vendor => vendor.isSelected).length;
  console.log("🚀 ~ TenderingPage ~ selectedCount:", selectedCount);
  const maxSelected = 3;

  const toggleSelection = (id) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) => {
        if (vendor.id === id) {
          // Checking if already selected or if we  hit the maximum limit
          if (!vendor.isSelected && selectedCount >= maxSelected) {
            return vendor;
          }
          return { ...vendor, isSelected: !vendor.isSelected };
        }
        return vendor;
      })
    );
  };


  return (
    <div className="p-6 md:p-12">

      <div className="flex flex-col items-center gap-5 text-customBlack font-urbanist pb-5 md:flex-row">
        <h2 className="text-lg font-bold">Choose vendors for the RFP</h2>
        <p className="text-sm flex gap-1">
          Total {vendors.length} vendors - 
          <span className="font-semibold border-b-2 border-[#63C74E] pb-1">{selectedCount} selected</span>
        </p>
      </div>

      {/* Vendor cards grid section*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {vendors.map(vendor => (
          <VendorCard 
            key={vendor.id} 
            vendor={vendor} 
            toggleSelection={() => toggleSelection(vendor.id)} 
          />
        ))}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 min-w-80 bg-customBlack text-white rounded-xl p-2 flex items-center justify-between gap-5 shadow-lg">
        <button className="w-full bg-[#60606066] text-[#FFFFFF33] p-2 rounded-md font-semibold font-urbanist text-sm tracking-wide" disabled>
          Next
        </button>

        <div className="w-full flex items-center justify-center space-x-2">
          {[...Array(maxSelected)].map((_, index) => (
            <span
              key={index}
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${index < selectedCount ? "border-[#63C74E]" : "border-[#606060]"}`}
            >
              {index < selectedCount && <MdOutlineDone className="text-[#63C74E]" />}
            </span>
          ))}
        </div>

        <span className="w-full font-urbanist tracking-wide text-sm">
          {selectedCount}/{maxSelected} selected
        </span>
      </div>
    </div>
  );
};

export default TenderingPage;
