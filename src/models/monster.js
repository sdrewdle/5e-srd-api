var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonsterSchema = new Schema({
  _id: {
    type: String,
    select: false
  },
  index: String,
  name: String,
  challenge_rating: Number,
  url: String
});

module.exports = mongoose.model('Monster', MonsterSchema, 'monsters');
