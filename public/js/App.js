/**
 * Created by fiddlest on 2016-07-31.
 */
/**
 * Created by fiddlest on 2016-07-28.
 */

'use strict'

import React from 'react';

import Header from './Header';
class App extends React.Component {
    render() {
      /*  console.log("App appp",this.props.children);*/
        return (
            <div>
                <Header/>
                <div className="container">
                    {/*this was main key ..*/}
                    {this.props.children}
                </div>
            </div  >
        )
    };
}


export default App;

