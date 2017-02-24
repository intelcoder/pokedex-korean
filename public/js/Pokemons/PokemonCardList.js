import React from 'react'
import Pokemon from './PokemonCard';
/**
 * This component show list of pokemon
 */
class PokemonList extends React.Component{
    render(){
        const {pokemons} = this.props;

        return(
            <div>
                <div className="row">
                    {pokemons.map(pokemon=>{
                        return  <Pokemon key={pokemon._id} {...pokemon} />
                    })}
                </div>
            </div>
        )
    };
}
export default PokemonList;