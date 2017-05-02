'use strict';

/**
 * @ngdoc overview
 * @name cookBookApp
 * @description
 * # cookBookApp
 *
 * Main module of the application.
 */
angular
  .module('cookBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('createRecipe', {
        views: {
          'main-body': {
            url: '/createRecipe',
            templateUrl: 'views/createRecipe.html',
            controller: 'RecipeCtrl as recipes'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }

      });

  }]);
