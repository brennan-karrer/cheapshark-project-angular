'use strict';

/**
 * @ngdoc overview
 * @name CheapSharkAPP
 * @description
 * # CheapSharkAPP
 *
 * Main module of the application.
 */
angular
  .module('CheapSharkAPP', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });