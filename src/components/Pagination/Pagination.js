import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({setPageNum, page, data}) => {
    const {info} = data

    return (
        <div>
               <ReactPaginate
                   pageCount={info?.pages}
                   className='pagination'
                   nextLabel='Next'
                   previousLabel='Prev'
                   nextClassName='pagination__next MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-sghohy-MuiButtonBase-root-MuiButton-root'
                   previousClassName='pagination__prev MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-sghohy-MuiButtonBase-root-MuiButton-root'
                   pageClassName='pagination__btn'
                   onPageChange={(data) => setPageNum(data.selected + 1)}
                   forcePage={page === 1 ? 0 : page - 1}
               />
        </div>
    );
};

export default Pagination;
