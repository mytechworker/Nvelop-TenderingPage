import Image from "next/image";
import { useRef } from "react";

export default function VendorCard({ vendor, toggleSelection }) {
    const selectionRef = useRef();

    const handleClick = () => {
        toggleSelection(vendor.id);
    };

    return (
        <div
            onClick={handleClick}
            className={`relative border rounded-lg shadow-sm overflow-hidden bg-white cursor-pointer 
                ${vendor.isSelected ? 'border-green-500' : 'border-gray-200'} 
                hover:shadow-md transition-shadow duration-300`}
        >
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    {/* Company Image */}
                    <Image src={vendor.img} width={112} height={100} alt={`${vendor.companyName}`} />

                    <div className="flex items-center gap-2">
                        <Image src='/images/Vector.png' width={18} height={18} alt={"vector image"} />

                        {/* New Badge */}
                        {vendor.isNew && (
                            <span className="bg-black text-white text-[10px] font-semibold px-2 py-1 rounded">
                                NEW
                            </span>
                        )}

                        {/* Selection Checkbox */}
                        <div className="flex ml-3" onClick={(e) => e.stopPropagation()}>
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-indigo-600"
                                checked={vendor.isSelected}
                                onChange={() => toggleSelection(vendor.id)}
                            />
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#D9FE46] text-customBlack text-xs px-2 py-1 rounded-full tracking-wide">
                        Tag lorem ipsum
                    </span>
                    <span className="bg-[#D9FE46] text-customBlack text-xs px-2 py-1 rounded-full tracking-wide">
                        Tag ipsum
                    </span>
                </div>

                {/* Company Information */}
                <p className="text-base font-bold text-gray-700 mb-1 font-urbanist">
                    Company name
                </p>
                <p className="text-sm text-customBlack tracking-wide mb-1 font-urbanist">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                </p>
            </div>

            {/* Contact Information */}
            <div className="flex items-center space-x-2 bg-[#F8F8F8] py-3 px-5 text-customBlack">
                <Image src="/images/inbox.png" width={20} height={20} alt={"inbox icon"} />
                <p className="text-sm font-medium font-urbanist">contact@company.com</p>
            </div>

            {/* Border on Selection */}
            {vendor.isSelected && (
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg pointer-events-none"></div>
            )}
        </div>
    );
}
