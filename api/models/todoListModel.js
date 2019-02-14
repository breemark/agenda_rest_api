'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Title of the activity'
  },
  description: {
    type: String,
    required: 'What is this about'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'doing', 'done']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);