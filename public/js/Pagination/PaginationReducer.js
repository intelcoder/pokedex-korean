/**
 * Created by fiddlest on 2016-07-31.
 */

const initState ={
    currentPage: 1,
    pageCount:0,
    total:0,
    perPage:0,
    data:[]
};

const pagination = (state = initState, action)=> {
    if (action.type == "PAGINATION_CHANGE") {
        return state.assign({}, state, {
            "pageIndex": action.currentPage
        });
    }
    return state;
};

