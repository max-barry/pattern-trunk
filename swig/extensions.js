"use strict";

var filters = module.exports = {};


filters.stringToArray = function(str) {
    /**
    Split comma seperated strings in to an array.
    @param {string} str Comma seperated string, that requires breaking in to array
    @return {array}
    */
    return str.split(",");
};



module.exports.register = function (swig, opts) {
  opts = opts || {};

  for (var filter in filters) {
    if (filters.hasOwnProperty(filter)) {
      swig.setFilter(filter, filters[filter]);
    }
  }
};