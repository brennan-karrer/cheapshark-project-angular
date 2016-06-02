'use strict';

/**
 * @ngdoc function
 * @name CharpSharkAPP.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the CharpSharkAPP
 */
angular.module('CheapSharkAPP')
  .controller('MainCtrl', ['$scope', 'FetchDataFactory', function ($scope, FetchDataFactory) {
    $scope.FetchDataFactory = FetchDataFactory;
    
    $scope.deals_list = [];
    
    $scope.range_numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    $scope.FetchDataFactory.fetchData().then(function successCallback(response) {
        
        /* Response data has come back successfully, proceed with calculations */
        if (response.status === 200 && response.statusText === 'OK') {
          
          for (var i = 0; i < response.data.length; i++) {
            // Parse the metacriric score to ensure it is an integer
            response.data[i].metacriticScore = parseInt(response.data[i].metacriticScore);
            response.data[i].score = Math.round(response.data[i].metacriticScore / 10) * 10;
            
            // Push all of the deals objects to the $scope.deals_list array
            $scope.deals_list.push(response.data[i]);
            
            //console.log(response.data[i]);
          }
          
        } else {
          console.log("Error", response.status);
        }
        
    });
  }]).filter('rangeFilter', function() {
    return function(items, range_min, range_max) {

        var filtered = [];
        var min = parseInt(range_min);
        var max = parseInt(range_max);
        // If time is with the range
        angular.forEach(items, function(item) {
          console.log(item);
          console.log(item.score);
          console.log(min);
          console.log(max);
            if( item.score >= min && item.score <= max ) {
                filtered.push(item);
            }
        });
        return filtered;
    };
}).filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});