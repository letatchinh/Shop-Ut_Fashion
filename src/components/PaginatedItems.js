import { Grid } from '@mui/material';
import React, {  useEffect,  useState } from 'react';
import ReactPaginate from 'react-paginate';
import { v4 } from 'uuid';
import Product from './Product';

const PaginatedItems =({ itemsPerPage , listProduct })=> {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(listProduct.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listProduct.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listProduct.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Grid container spacing={3} >
           {currentItems &&
            currentItems.map(e => <Grid key={v4()}  xs={3} item><Product item={e} image={e.image} name={e.name} price={e.price} isSell={e.isSell} id={e.id}/></Grid>)
           }
       </Grid>
       <ReactPaginate 
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      /> 
    </>
  );
}
export default PaginatedItems