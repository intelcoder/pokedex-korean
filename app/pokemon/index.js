/**
 * Created by fiddlest on 2016-08-05.
 */
'use strict'
var express = require('express');
var router = express.Router();
var loadPokemon = require('./loadData');
var pokemons = require('./Pokemon');


router.use("/",pokemons);
router.use('/load', loadPokemon);

module.exports = router;