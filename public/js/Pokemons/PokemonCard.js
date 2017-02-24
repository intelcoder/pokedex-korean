
import React from 'react'
import { Link } from 'react-router';
/**
 * Show brief info of the pokemon (image, name, number) in a card
 * @param pokemon
 * @returns {XML}
 * @constructor
 */
const Pokemon = (pokemon)=> {


    return (
        <div >
            <div className='col s6 m3 l3'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={pokemon.img} width={150} height={150}/>
                    </div>
                    <div className='card-content'>
                        <div className='left'>{pokemon.num}</div>
                        <div className=' right right-align'>{pokemon.name}</div>
                    </div>
                    <div className='card-action'>
                        <Link to={pokemon._id + '/detail'}> Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Pokemon;