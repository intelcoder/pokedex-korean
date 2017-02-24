/**
 * Created by fiddlest on 2016-07-31.
 */


export const paginationChange = (pageNum)=>{
    return {
        type: "PAGINATION_CHANGE",
        currentPage: pageNum
    };
};