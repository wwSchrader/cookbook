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
    'ngImgCrop',
    'LocalStorageModule',
    'ngAnimate',
    'ngAria',
    'ngMaterial'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('cookBookApp');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'main-body': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as mainMenuRecipes'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }
      })
      .state('editRecipe', {
        url: '/editrecipe/:id',
        views: {
          'main-body': {
            templateUrl: 'views/editrecipe.html',
            controller: 'EditrecipeCtrl as editRecipe'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'main-body': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }

      })
      .state('singleRecipe', {
        url: '/singlerecipe/:id',
        views: {
          'main-body': {
            templateUrl: 'views/singlerecipe.html',
            controller: 'SinglerecipeCtrl as singleRecipe'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }

      })
      .state('createRecipe', {
        url: '/createRecipe',
        views: {
          'main-body': {
            templateUrl: 'views/createrecipe.html',
            controller: 'RecipeCtrl as recipes'
          },
          'recipe-navbar': {
            templateUrl: 'views/recipenavbar.html',
            controller: 'RecipenavbarCtrl as recipesnavbar'
          }
        }
      });
  }]);
