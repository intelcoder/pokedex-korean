/**
 * Created by fiddlest on 2016-08-24.
 */


/**
 * This function takes res.query and validate. Then, parse into object
 * @param queries res.query object
 * @returns {{}}
 */
export const queryParse = queries=> {
    let parsedQuery = {};
    Object.keys(queries).forEach( (output)=>{
        if (queries[output])
            parsedQuery[output] = queries[output];
    });
    return parsedQuery;
};
