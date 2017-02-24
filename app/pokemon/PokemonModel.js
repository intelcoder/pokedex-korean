/**
 * Created by fiddlest on 2016-08-04.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    _id : {type: Number,required:true},
    num : {type:String,required: true},
    name : {type:String, require:true},
    img : {type:String, require:true},
    type: String,
    height : String,
    weight : String,
    candy : String,
    egg: {type: String, default: null},
    multipliers: [{type: Number, default: null}],
    weaknesses : [String],
    prev_evolution:[{type: Number, ref: 'Pokemon'}],
    next_evolution:[{type: Number, ref: 'Pokemon'}]
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;