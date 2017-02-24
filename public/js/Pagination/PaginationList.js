/**
 * Created by fiddlest on 2016-07-30.
 */
import React from 'react';
import Pagination from './Pagination';
const PaginationList = (pagination)=>{
    let pages = [];

    for(let pageNum =0 ;pageNum < pagination.pageCount ; pageNum++) {
        pages.push(  <Pagination key={pageNum} pageNum={pageNum}/>);
    }
    return(
      <div>
          <ul className="pagination">
              <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
              {pages}
              <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
          </ul>
      </div>
    );
};

export default PaginationList;