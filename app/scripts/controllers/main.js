'use strict';

/**
 * @ngdoc function
 * @name CheapSharkAPP.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the CheapSharkAPP
 */
angular.module('CheapSharkAPP')
  .controller('MainCtrl', ['$scope', 'FetchDataFactory', function ($scope, FetchDataFactory) {

    $scope.FetchDataFactory = FetchDataFactory;

    $scope.deals_list = [];
    $scope.range_numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    $scope.sortType = 'title';

    /* Invoking the function fetchData from the service FetchDataFactory
       .then() waits for the data to properly be returned prior to executing any
       functionality to be performed on the data */
    $scope.FetchDataFactory.fetchData().then(function successCallback(response) {

        /* Response data has come back successfully, proceed with calculations */
        if (response.status === 200 && response.statusText === 'OK') {
          for (var i = 0; i < response.data.length; i++) {
            /* Parse the metacriric score to ensure it is an integer */
            response.data[i].metacriticScore = parseInt(response.data[i].metacriticScore);
            response.data[i].score = Math.round(response.data[i].metacriticScore / 10) * 10;

            /* Push all of the deals objects to the $scope.deals_list array */
            $scope.deals_list.push(response.data[i]);
          }
        } else {
          console.log("Error", response.status);
        }

    });
  }]);
