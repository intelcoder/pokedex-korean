/**
 * Created by fiddlest on 2016-08-25.
 */
import React from 'react';

/**
 * This presentational component shows loading bar
 * @returns {XML}
 * @constructor
 */
const LoadingBar = ()=>{
    return (
        <div>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>
    )
};

export default LoadingBar;