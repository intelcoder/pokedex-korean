/**
 * Created by fiddlest on 2016-07-31.
 */
'use strict';
import React, {PropTypes } from 'react';
import { connect } from 'react-redux'
import { searchPokemon, fetchPokemonIfNeeded} from './PokemonAction';
import PokemonList from './PokemonCardList';
import PokemonSearchBar from './PokemonSearchBar';
import LoadingBar from './LoadingBar';
class PokemonContainer extends React.Component{
    constructor(props){
        super(props);
        this.onSearchClicked = this.onSearchClicked.bind(this);
    };

    componentDidMount(){
        const {dispatch} = this.props;
        //console.log("componentDidMount", this.props,dispatch);
        dispatch(fetchPokemonIfNeeded());


    };

    onSearchClicked(searchText){
        this.props.dispatch(searchPokemon(searchText));
        this.props.dispatch(fetchPokemonIfNeeded());
    }

    render(){
        const props = this.props;
        const {isFetching} = this.props;

        return (
            <div>
                <PokemonSearchBar {...props} onSearchClicked={this.onSearchClicked}/>
                {isFetching ? <LoadingBar/> : null}
                <PokemonList {...props}/>

            </div>
        )
    };
}

PokemonContainer.propTypes= {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state)=>{
    const {pokemonReducer,requestReducer} = state;
    return {
        pokemons:pokemonReducer.pokemons,
        isFetching: requestReducer.isFetching
    };
};



export default connect(mapStateToProps)(PokemonContainer);


