import React, { useState } from "react";
import { GrPrevious, GrNext } from 'react-icons/gr'

function Pagination(
    {
        total,
        perPage,
        onPageChange,
    }
) {

    const [currentPage, setCurrentPage] = useState(1);

    const pageCount = Math.ceil(total / perPage);
    const pages = Array.from({ length: pageCount }).map((_, index) => index + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pageCount;

    function handlePage(pageNum) {
        setCurrentPage(pageNum);
        onPageChange(pageNum);
    }

    function handlePrevClick() {
        setCurrentPage((currentPage) => currentPage - 1)
        onPageChange(currentPage - 1);
    }

    function handleNextClick() {
        setCurrentPage((currentPage) => currentPage + 1)
        onPageChange(currentPage + 1);
    }

    return (
        <nav aria-label="Page navigation example" className="navigation">
            <ul className="pagination">
                <li className={`page-item ${isFirstPage ? 'disabled' : null}`}>
                    <a className="page-link" href="#" onClick={handlePrevClick}><GrPrevious /></a>
                </li>
                {
                    pages.map((value, index) => {
                        return <li key={index} className={`page-item ${currentPage === value ? 'active' : null}`} >
                            <a className="page-link" href="#" onClick={() => {
                                handlePage(value);
                            }}>{value}</a>
                        </li>
                    })
                }
                <li className={`page-item  ${isLastPage ? 'disabled' : null}`}>
                    <a className="page-link" href="#" onClick={handleNextClick}><GrNext /></a>
                </li>
            </ul>
        </nav >
    );
}

export default Pagination;