/**
 * Tests the User schema
 */

var should = require("should");
var assert = require("assert");
var helper = require('./specHelper');

var ERRORS = require('../../public/scripts/errors');
var CONFIG = require('../../config');

//Connect to MongoDB
var mongoose = helper.mongoose;
var db = mongoose.connection;

//Require User Module, passing mongoose
var User = require("../../models/User")(mongoose);
var Listing = require("../../models/Listing")(mongoose);

var newBob = helper.newBob;

var emptyDoc = function(cb) {
  User.model.remove({}, function(err) {
    if (typeof cb === "function") {
      cb(err);
    }
  });
};

describe("Listing Model", function() {

  before(function(done) {
    emptyDoc(done);
  });

  afterEach(function(done) {
    emptyDoc(done);
  });

  after(function(done) {
    emptyDoc(done);
    console.log("emptying");
  });

  var bob;

  beforeEach(function() {
    bob = newBob(true);
  });

  it.skip("should create a new listing", function(done) {
  });
});