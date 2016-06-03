'use strict';

/**
 * @ngdoc filter
 * @name CheapSharkAPP.filter:rangeFilter
 * @function
 * @description Takes in a list of items, minimum range and maxium range as parameters.
                Returns the items whose score falls within the range.
 * # rangeFilter
 * Filter in the CheapSharkAPP.
 */
angular.module('CheapSharkAPP')
  .filter('rangeFilter', function() {
    return function(items, range_min, range_max) {

      var filtered = [];
      var min = parseInt(range_min);
      var max = parseInt(range_max);

      angular.forEach(items, function(item) {
        if(item.score >= min && item.score <= max) {
          filtered.push(item);
        }
      });
      return filtered;
      
    };
})