import React from 'react';
import _ from 'C:\\Users\\chait\\dev\\react-projects\\vidly\\node_modules\\lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {itemsCount, pageSize, pageChange, currentPage} = props;
    let pagesCount = Math.ceil(itemsCount/pageSize);
    if(pagesCount === 0) return null;
    let pagesArray = _.range(1,pagesCount+1);
    
    return (
        <nav>
            <ul className="pagination">
                {pagesArray.map(page => <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => pageChange(page)}>{page}</a>
                    </li>)}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount : PropTypes.number.isRequired, 
    pageSize : PropTypes.number.isRequired, 
    pageChange : PropTypes.func.isRequired, 
    currentPage : PropTypes.number.isRequired
  };
 
export default Pagination;