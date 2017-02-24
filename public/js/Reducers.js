/**
 * Created by fiddlest on 2016-07-31.
 */

import { combineReducers } from 'redux';
import {pokemonReducer,requestReducer }from './Pokemons/PokemonReducer';


const pokemonApp = combineReducers({
    pokemonReducer,
    requestReducer
});

export default pokemonApp;