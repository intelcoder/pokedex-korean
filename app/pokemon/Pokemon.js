/**
 * Created by fiddlest on 2016-08-11.
 */
'use strict'
const express = require('express');
const router = express.Router();
const PokemonModel = require('./PokemonModel');
const queryUtil = require('../utils/utils');

/**
 * This route return
 */
router.get('/',(req,res)=>{
    let parsedQuery = queryUtil.queryParse(req.query);
    let pokemons_promise = PokemonModel.find(parsedQuery).exec();
    pokemons_promise.then(pokemons=>{
        res.status(200).send(pokemons);
    }).catch((e)=>{
        res.status(400).send(e);
    })
});



router.get('/:pokemonId/detail',(req,res)=>{
    let pokemon_promise = PokemonModel
        .find({_id: req.params.pokemonId})
        .populate('next_evolution')
        .populate('prev_evolution')
        .exec();
    pokemon_promise.then(pokemon=>{
        res.send(pokemon);
    });
});

module.exports = router;