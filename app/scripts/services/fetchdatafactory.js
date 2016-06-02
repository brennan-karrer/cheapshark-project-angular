'use strict';

/**
 * @ngdoc service
 * @name CheapSharkAPP.FetchDataFactory
 * @description
 * # FetchDataFactory
 * Factory in the CheapSharkAPP.
 */
angular.module('CheapSharkAPP')
  .factory('FetchDataFactory', ['$http', function ($http) {
    return {
      
      fetchData: function () {
        return $http.get(
          'http://www.cheapshark.com/api/1.0/deals'
        ).then(function successCallback(response) {
          /* This callback will be called asynchronously
              when the response is available */
                
          return response;
        }, function errorCallback(response) {
          /* This callback will be called asynchronously if an error occurs
             or server returns response with an error status */
               
          return response;
        });

      }
    };
  }]);
