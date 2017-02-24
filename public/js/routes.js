/**
 * Created by fiddlest on 2016-08-28.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import DetailView from './Pokemons/DetailView';
import PokemonContainer from './Pokemons/PokemonContainer';


export default ([
    <Route path="/"  component={App}>
        <IndexRoute component={PokemonContainer}/>
        <Route path="/:pokemonId/detail" component={DetailView}/>

    </Route>
]);