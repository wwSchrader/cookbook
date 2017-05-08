'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:RecipieCtrl
 * @description
 * # RecipieCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('RecipeCtrl', ['recipeService', function (recipeService) {


    this.allRecipes = recipeService.getRecipes();

    this.name = '';
    this.directions = [''];
    this.ingredients = [''];
    this.selectedCategory = '';

    this.categories = ['Select Category', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];
    this.f = '';
    this.errFiles = '';

    //to upload file and get a reference
    this.uploadFiles = function(file, errFiles) {
        this.f = file;
        this.errFile = errFiles && errFiles[0];
    };

    this.updateRecipeViews = function() {
        this.allRecipes = recipeService.getRecipes();
    };

    this.addRecipe = function(){
        //convert uploaded picture to url to then save into recipe object
        var recipePic = document.getElementById('recipePicture');
        var imgCanvas = document.createElement('canvas'),
            imgContext = imgCanvas.getContext('2d');

        imgCanvas.width = recipePic.width;
        imgCanvas.height = recipePic.height;

        imgContext.drawImage(recipePic, 0, 0, recipePic.width, recipePic.height);

        var imgAsDataURL = imgCanvas.toDataURL('image/png');

        var newRecipe = {
            'name': this.name,
            'directions': this.directions,
            'ingredients': this.ingredients,
            'category' : this.selectedCategory,
            'image' : imgAsDataURL
        };

        this.allRecipes[this.name] = newRecipe;
        recipeService.saveRecipes(this.allRecipes);
       this.updateRecipeViews();
    };

    this.addIngredientField = function() {
        this.ingredients.push('');
    };

    this.removeIngredientField = function(index) {
        this.ingredients.splice(index, 1);
    };

    this.addDirectionField = function() {
        this.directions.push('');
    };

    this.removeDirectionField = function(index) {
        this.directions.splice(index, 1);
    };

  }]);
