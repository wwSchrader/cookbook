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
    'ui.router',
    'ngFileUpload',
    'LocalStorageModule'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('cookBookApp');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as mainMenuRecipes'
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
