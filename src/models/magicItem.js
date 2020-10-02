var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MagicItemSchema = new Schema({
  _id: {
    type: String,
    select: false
  },
  index: String,
  name: String,
  url: String
});

module.exports = mongoose.model('MagicItem', MagicItemSchema, 'magic-items');
