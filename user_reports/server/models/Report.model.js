var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
  memberName: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  notes: {
    type: String,
    default: 'none'
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);

var requiredStringValidator = [
  function(val) {
    var testVal = val.trim();
    return (testVal.length > 0)
  },
  '{PATH} cannot be empty'
];