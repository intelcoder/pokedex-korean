/**
 * Created by fiddlest on 2016-08-26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonIfNeeded} from './PokemonAction';

class DetailView extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const {location, dispatch} = this.props;
        dispatch(fetchPokemonIfNeeded(location.pathname));

    }

    render() {
        const { pokemon} = this.props;
     /*   console.log(pokemon);*/
        const styles = {
            wrapper: {
                backgroundColor: '#ED5636',
                padding: '1px'
            },
            pokemonTitle:{
                backgroundColor: '#80ff80'
            },
            imgContainer: {
                margin: '0 auto',
                display: 'block'
            },
            detailContainer: {
                backgroundColor: '#ffffff',
            },
            inline:{
                display:'inline'
            },
            likeButton :{
                'min-height': '200px',
                'backgroundColor':'#1a75ff'
            }

        };
        return (
            <div className='row' style={styles.wrapper}>
                <div style={styles.pokemonTitle}>
                    <h3>No.001 이상해씨{/*{pokemon.num} {pokemon.name}*/}</h3>
                </div>
                <div className="col s12">
                    <div className="col s12 m6">
                        <img className="responsive-img" style={styles.imgContainer} width="250" src="http://www.serebii.net/pokemongo/pokemon/002.png"/>
                        <div style={styles.likeButton}></div>
                    </div>
                    <div>
                        <div style={styles.detailContainer} className="col s12 m6">
                            <div>
                                <div className="col s12 m6 l6">속성</div>
                                <div className="col s12 m6 l6">불 물 물 땅</div>
                            </div>
                            <div>
                                <div className="col s12 m6 l6">키</div>
                                <div className="col s12 m6 l6">123</div>
                            </div>
                            <div>
                                <div className="col s12 m6 l6">몸무게</div>
                                <div className="col s12 m6 l6">123</div>
                            </div>
                            <div>
                                <div className="col s12 m6 l6">캔디</div>
                                <div className="col s12 m6 l6">123</div>
                            </div>
                            <div>
                                <div className="col s12 m6 l6">알</div>
                                <div className="col s12 m6 l6">123</div>
                            </div>
                        </div>
                        <div className="col s12 m6 flex-container">
                            {pokemon.prev_evolution.map((prev)=>{
                              return(
                                  <div style={styles.inline}>
                                      <div>
                                          <img  style={styles.imgContainer} src={prev.img} width='60'/>
                                      </div>
                                      <div className="center-align">
                                          <span>prev {prev.name}</span>
                                      </div>
                                  </div>
                              );
                            })}
                            {
                                pokemon.prev_evolution.length ?  <div>{pokemon.name}</div> : ''
                            }
                            {pokemon.next_evolution.map((next)=>{
                                return <div>
                                       <span>next {next.name}</span>
                                    <img  src={next.img}  width='60'/>
                                </div>
                            })}
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}
;

const mapStateToProps = (state) => {
    const {pokemonReducer, requestReducer} = state;

    return {
        isFetching: requestReducer.isFetching,
        pokemon: pokemonReducer.pokemons[0]
    }
};

export default connect(mapStateToProps)(DetailView);
;