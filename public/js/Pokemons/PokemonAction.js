/**
 * Created by fiddlest on 2016-07-31.
 */
'use strict'
import React from 'react';
import fetch from 'isomorphic-fetch';
import queryString from 'query-string';
import {buildQuery} from '../Utils/Utils';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE= 'FETCH_DATA_FAILURE';
export const UPDATE_POKEMONS = 'UPDATE_POKEMONS';

const BASE_URL = 'http://localhost:9000/api/pokemon/';


export const searchPokemon = (searchName)=> (
    {
        type: 'SEARCH_POKEMON' ,
        searchName
    }
);

export const updatePokemonList = (pokemons) =>(
    {
        type: 'UPDATE_POKEMONS',
        pokemons
    }
);

export const requestFetch = ()=>(
    {
        type: FETCH_DATA
    }
);

export const fetchSucceed = (pokemons)=>(
    {
        type:FETCH_DATA_SUCCESS,
        items: pokemons
    }
);

export const fetchFailed = (requestedUrl)=>(
    {
        type: FETCH_DATA_FAILURE,
        requestedUrl
    }
);

/**
 * This function false if request already sent
 * @param requestReducer requestReducer
 * @returns {boolean}
 */
const shouldFetch = requestReducer=> {
    return !requestReducer.isFetching;
};


const fetchPokemons = requestUrl=> {
    return dispatch => {
        dispatch(requestFetch());
        return fetch(requestUrl)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchSucceed(json));
                dispatch(updatePokemonList(json));
                return json;
            })
            .catch(error =>dispatch(fetchFailed(requestUrl)))
    }
};


export const fetchPokemonIfNeeded = (location='')=>{
    return (dispatch,getState) =>{
        const {pokemonReducer,requestReducer} = getState();
        if(!shouldFetch(requestReducer)){
            return null;
        }
        const url = BASE_URL + location;
        let query =  buildQuery(url,pokemonReducer.searchQuery);
        dispatch(fetchPokemons(query));
    }
};

