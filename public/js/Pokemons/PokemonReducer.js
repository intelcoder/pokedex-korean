

const pokemonInitState ={
    searchQuery:{},
    pokemons: []
};

/**
 * This reducer takes care of pokemon state including search and update list
 * @param state
 * @param action
 * @returns {*}
 */
export const pokemonReducer = (state = pokemonInitState, action)=> {
    if (action.type === 'UPDATE_POKEMONS') {
        return Object.assign({},state,   {
            pokemons:action.pokemons,
            searchQuery:{}
        })
    }else if(action.type === 'SEARCH_POKEMON'){
        return Object.assign({},state, {
            searchQuery:{
                name: action.searchName
            }
        })
    }
    return state;
};


const requestInitState ={
    isFetching : false,
    failed : false,
    items : []
};

/**
 * This reducer takes care of  network request
 * @param state
 * @param action
 * @returns {*}
 */
export const  requestReducer = (state = requestInitState, action)=> {
    if(action.type === "FETCH_DATA"){
        return Object.assign({},state,{
            isFetching:true,
            failed : false
        });
    }else if( action.type === "FETCH_DATA_SUCCESS"){
        return Object.assign({},state,{
            isFetching:false,
            failed : false,
            items: action.items
        })

    }else if(action.type === "FETCH_DATA_FAILURE"){
        return Object.assign({},state,{
            isFetching:false,
            failed : true,
        })
    }
    return state;
};


