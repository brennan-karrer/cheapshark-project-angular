'use strict';

/**
 * @ngdoc filter
 * @name CheapSharkAPP.filter:reverse
 * @function
 * @description Takes in a list of items as a paramter and reverses the order that they
                are displayed to the user.
 * # reverse
 * Filter in the CheapSharkAPP.
 */
angular.module('CheapSharkAPP')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });
