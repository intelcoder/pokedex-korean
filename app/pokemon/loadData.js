/**
 * Created by fiddlest on 2016-08-05.
 */
'use strict'
var express = require('express');
var router = express.Router();
var pokeDex = require('./Pokedex');
var PokemonModel = require('./PokemonModel');
var winston = require('winston');
var Promise = require('bluebird');

var pokemons = [];
for (let pokemon of pokeDex) {
    pokemons.push({
        _id: pokemon.id,
        num: pokemon.num,
        name: pokemon.name,
        img: pokemon.img,
        type: pokemon.type,
        height: pokemon.height,
        weight: pokemon.weight,
        candy: pokemon.candy,
        egg: pokemon.egg,
        multipliers: pokemon.multipliers,
        weaknesses: pokemon.weaknesses
    });
}

var count = PokemonModel.count({}, function(err,count){
    return count;
});
router.get('/', function(req,res){
    new Promise(function(resolve){
        return resolve(count);
    }).then(function(count){
        if(count >0 ){
            res.send('Pokemon already exist');
        }
        new Promise(function(resolve){
            return resolve(PokemonModel.collection.insert(pokemons, function(err,doc){
                if(err){
                    return res.send(err);
                }
                winston.info('pokemon bulk insert ' + doc);
            }));
        });
    }).then(function(doc){
        return res.send(doc + 'Load successfully completed' );
    });
});

/**
 * This function return promise which will update ref on passed pokemon
 * param currentPokemon Object of pokemon
 * return promise
 */
var updatePokemonRef = (currentPokemon)=>{
    return PokemonModel.findById(currentPokemon.id,(err,pokemon)=>{
        if (err) return console.log(err);
        if(currentPokemon.prev_evolution){
            let prevIds = [];
            for(let prev of currentPokemon.prev_evolution){
                let id = pokeDex.filter(p => p.name == prev.name)[0].id;
                prevIds.push(id);
            }
            pokemon.prev_evolution = prevIds;
        }
        if(currentPokemon.next_evolution){
            let nextIds = [];
            for (let next of currentPokemon.next_evolution) {
                let id = pokeDex.filter(n => n.name == next.name)[0].id;
                nextIds.push(id);
            }
            pokemon.next_evolution = nextIds;
        }
        pokemon.save(function(err){
            if(err)console.log('save error');
            console.log(pokemon.name + 'update done');
        });
    });
}
/**
 * This route will update ref on each pokemon which is prev_evolution and next_evolution
 */
router.get('/addRef', (req,res)=>{
    var promises = [];
    for( let pokemon of pokeDex){
       promises.push(updatePokemonRef(pokemon));
    }
    //Promise all takes array of promise and process according to promise logic
    Promise.all(promises).then(function(){
        console.log("All done");
        res.send("Ref update all finished");
    })
});

module.exports = router;
