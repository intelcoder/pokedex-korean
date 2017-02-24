/**
 * Created by fiddlest on 2016-09-05.
 */
import queryString from 'query-string';



export const buildQuery = (baseUrl, searchQuery) => {
    let query = queryString.stringify(searchQuery);
    if(query !== '' && query !== 'undefined'){
        return baseUrl+'?'+query;
    }
    return baseUrl;
};