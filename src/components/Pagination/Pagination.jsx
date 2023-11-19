import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ onPageChange }) {

    return (
        <>
            <ReactPaginate
                className='pagination__item'
                breakLabel="..."
                nextLabel=">"
                onPageChange={e => onPageChange(e.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination;