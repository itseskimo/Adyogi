import React, { useState, useRef, useEffect } from 'react';
import { setDropDownType } from '../../redux/features/general/generalSlice';
import { useDispatch, useSelector } from 'react-redux';

function dropdown({ options }) {
    const { selectedType } = useSelector((state) => state.general);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        dispatch(setDropDownType(option))
        toggleDropdown();
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <main>

            <section className="relative w-full" onClick={toggleDropdown} ref={dropdownRef}>
                <section className="w-full py-2 box-border border-solid border-[1px] border-gray-300 bg-white rounded-[6px] flex items-center justify-between px-4 cursor-pointer">
                    <p className=" select-none pointer-events-none ">
                        {selectedType || 'Select'}
                    </p>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5555 4.77778L7.99999 10.9691L1.44443 4.77778" stroke="#6B7684" strokeWidth="1.22222" className="select-none pointer-events-none transition-all ease-in"
                        />
                    </svg>

                </section>

                <ul className={`w-full ${isOpen ? 'block' : 'hidden'} bg-white shadow-md rounded-[8px]  absolute top-[40px] z-10 overflow-y-auto max-h-[150px]`} >
                    {options?.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)} className="w-full h-9 list-none box-border cursor-pointer flex items-center justify-around hover:bg-slate-50">
                            {option}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default dropdown
