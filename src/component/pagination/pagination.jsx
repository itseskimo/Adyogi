'use client'
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { setPaginationCount } from "../../redux/features/general/generalSlice";


function Pagination({ totalCount }) {

    const dispatch = useDispatch()
    // Page Count
    const [pagesCount, setPagesCount] = useState(1);
    //Initial page
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {

        // Calculate pagesCount, ensuring it's at least 1 to avoid division by zero
        const calculatedPagesCount = Math.ceil(totalCount?.length / 10) || 1;
        // Update the state
        console.log(totalCount.length,calculatedPagesCount)

        setPagesCount(calculatedPagesCount)
        dispatch(setPaginationCount(currentPage))
    }, [totalCount?.length]);



    //Render only 5 page numbers
    const [pageNumberLimit, setpageNumberLimit] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    //Function to control click on digits pagination
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
        dispatch(setPaginationCount(Number(event.target.id)))
    };

    //Render these many boxes
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "px-4 py-2 rounded-md text-white font-semibold bg-gray-400 cursor-pointer" : 'px-4 py-2 bg-white border-[1px]  border-gray-300 border-solid rounded-md cursor-pointer'}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });



    //Functionality to increment page no. and which api should be executed based on pathname & type
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        dispatch(setPaginationCount(currentPage + 1))

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    //Functionality to decrement page no. and which api should be executed based on pathname & type
    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
        dispatch(setPaginationCount(currentPage - 1))

        if ((currentPage - 1) % pageNumberLimit === 0) {
            if (maxPageNumberLimit < 6) return
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };


    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }




    return (
        <>
            <>

                <ul className="flex items-center justify-center gap-1 pb-10">

                    <button
                        onClick={handlePrevbtn}
                        className="bg-gray-400 text-white px-4 text-center rounded-md py-2 cursor-pointer"
                        disabled={currentPage === pages[0] ? true : false}
                    >
                        Prev
                    </button>


                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}

                    <button
                        onClick={handleNextbtn}
                        className="bg-gray-400 text-white px-4 text-center rounded-md py-2 cursor-pointer"
                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                    >
                        Next
                    </button>

                </ul>

            </>


        </>
    );
}

export default Pagination