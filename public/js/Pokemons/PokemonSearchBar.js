'use strict'
import React from 'react';
import {connect} from 'react-redux';
class PokemonSearchBar extends React.Component{
    render(){
        let {onSearchClicked} = this.props;
        //console.log( this.props);
        let formStyle = {
            "marginTop": "-7px"
        };
        let _input;
        return(
            <div>
                <div className="row">
                    <form className="col offset-m6 m6 s12">
                        <input className="left col m8" style={formStyle} type="text" ref={(ref) => this._input = ref} placeholder="이름 또는 번호로 찾기"/>
                        <button className="btn waves-effect waves-light right" onClick={(e)=> {
                            e.preventDefault();

                            onSearchClicked(this._input.value);
                        }}>검색
                        </button>
                    </form>
                </div>
            </div>
        );
    };
}


/*onSearchClick(this._input.value);*/
export default connect()(PokemonSearchBar);