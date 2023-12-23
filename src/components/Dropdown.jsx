import React from 'react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import OutsideClickHandler from 'react-outside-click-handler';

function Dropdown({label, options, updateFunction}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0])
    const handleDropdown = (option) => {
        setSelectedOption(option)
        setShowDropdown(!showDropdown)
        updateFunction(option)
    }
    return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={() => setShowDropdown(!showDropdown)} className='flex flex-col h-20'>
        <p className="py-[5px] text-sm font-medium">{label}</p>
        <div className="dropdown-title capitalize w-[130px] hover:text-slate-50 transition-all duration-300 ease-in-out">
          {selectedOption}
          <ChevronDown size={28} strokeWidth={1.25} />
        </div>
        {showDropdown && (
          <div className="dropdown-menu w-[130px] top-[94px]">
            {options.map((option, i) => {
              return (
                <div key={i}>
                  <button
                    className="dropdown-item w-[130px] capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                    onClick={() => handleDropdown(option)}
                   >
                    {option}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
    )
}

export default Dropdown