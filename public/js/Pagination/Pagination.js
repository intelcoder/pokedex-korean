/**
 * Created by fiddlest on 2016-07-30.
 */
import React from 'react';

const pagination = (page)=>{
    return(
          <li className={"waves-effect "} style={{}}>
              <a href={"!#"}> {page.pageNum+1}</a>
          </li>
    );
};
export default pagination;