"use strict";angular.module("cookBookApp",["ngAnimate","ngCookies","ngRoute","ngSanitize","ngTouch","ui.router","ngFileUpload","ngImgCrop","LocalStorageModule","ngAnimate","ngAria","ngMaterial"]).config(["$stateProvider","$urlRouterProvider","localStorageServiceProvider",function(a,b,c){c.setPrefix("cookBookApp"),b.otherwise("/"),a.state("main",{url:"/",views:{"main-body":{templateUrl:"views/main.html",controller:"MainCtrl as mainMenuRecipes"},"recipe-navbar":{templateUrl:"views/recipenavbar.html",controller:"RecipenavbarCtrl as recipesnavbar"}}}).state("editRecipe",{url:"/editrecipe/:id",views:{"main-body":{templateUrl:"views/editrecipe.html",controller:"EditrecipeCtrl as editRecipe"},"recipe-navbar":{templateUrl:"views/recipenavbar.html",controller:"RecipenavbarCtrl as recipesnavbar"}}}).state("about",{url:"/about",views:{"main-body":{templateUrl:"views/about.html",controller:"AboutCtrl"},"recipe-navbar":{templateUrl:"views/recipenavbar.html",controller:"RecipenavbarCtrl as recipesnavbar"}}}).state("singleRecipe",{url:"/singlerecipe/:id",views:{"main-body":{templateUrl:"views/singlerecipe.html",controller:"SinglerecipeCtrl as singleRecipe"},"recipe-navbar":{templateUrl:"views/recipenavbar.html",controller:"RecipenavbarCtrl as recipesnavbar"}}}).state("createRecipe",{url:"/createRecipe",views:{"main-body":{templateUrl:"views/createrecipe.html",controller:"RecipeCtrl as recipes"},"recipe-navbar":{templateUrl:"views/recipenavbar.html",controller:"RecipenavbarCtrl as recipesnavbar"}}})}]),angular.module("cookBookApp").controller("MainCtrl",["recipeService",function(a){this.allRecipes=a.getRecipes()}]),angular.module("cookBookApp").controller("AboutCtrl",[function(){}]),angular.module("cookBookApp").controller("RecipeCtrl",["recipeService","$mdDialog","$scope","$state",function(a,b,c,d){this.allRecipes=a.getRecipes(),this.name="",this.directions=[""],this.ingredients=[""],this.selectedCategory="",c.croppedDataUrl="",this.categories=["Breakfast","Lunch","Dinner","Dessert"],this.updateRecipeViews=function(){this.allRecipes=a.getRecipes()},this.addRecipe=function(){if(c.form.$valid){var b={name:this.name,directions:this.directions,ingredients:this.ingredients,category:this.selectedCategory,image:c.croppedDataUrl};this.allRecipes[this.name]=b,a.saveRecipes(this.allRecipes),this.updateRecipeViews(),d.go("main")}},this.addIngredientField=function(){this.ingredients.push("")},this.removeIngredientField=function(a){this.ingredients.splice(a,1)},this.addDirectionField=function(){this.directions.push("")},this.removeDirectionField=function(a){this.directions.splice(a,1)},this.addPicture=function(a){console.log("Button Clicked"),b.show({controller:"AddpictureCtrl as picture",templateUrl:"views/addpicture.html",parent:angular.element(document.body),targetEvent:a,clickOutsideToClose:!0,fullscreen:this.customFullscreen}).then(function(a){c.croppedDataUrl=a},function(){console.log("dialog canceled")})}}]),angular.module("cookBookApp").service("recipeService",["localStorageService",function(a){this.getRecipes=function(){var b=a.get("cookBookApp");return null===b&&(b={}),b},this.saveRecipes=function(b){a.set("cookBookApp",b)},this.getSingleRecipe=function(b){var c=a.get("cookBookApp");return c[b]},this.removeRecipe=function(b){var c=a.get("cookBookApp");delete c[b],a.set("cookBookApp",c)}}]),angular.module("cookBookApp").controller("RecipenavbarCtrl",["recipeService",function(a){this.allRecipes=a.getRecipes()}]),angular.module("cookBookApp").directive("fileListener",function(){return{scope:{file:"="},link:function(a,b,c){console.log(c),b.bind("change",function(b){var c=b.target.files,d=c[0];a.file=d?d.name:void 0,a.$apply()})}}}),angular.module("cookBookApp").controller("SinglerecipeCtrl",["recipeService","$stateParams",function(a,b){this.aRecipe=a.getSingleRecipe(b.id),this.deleteRecipe=function(b){a.removeRecipe(b)}}]),angular.module("cookBookApp").controller("EditrecipeCtrl",["recipeService","$stateParams",function(a,b){this.aRecipe=a.getSingleRecipe(b.id),this.name=this.aRecipe.name,this.directions=this.aRecipe.directions,this.ingredients=this.aRecipe.ingredients,this.selectedCategory=this.aRecipe.category,this.image=this.aRecipe.image,this.picFile=this.aRecipe.image,this.categories=["Select Category","Breakfast","Lunch","Dinner","Dessert"],this.updateRecipe=function(){var b=a.getRecipes(),c={name:this.name,directions:this.directions,ingredients:this.ingredients,category:this.selectedCategory,image:this.image};delete b[this.aRecipe.name],b[this.name]=c,a.saveRecipes(b)},this.deleteRecipe=function(){a.removeRecipe(this.aRecipe.name)},this.addIngredientField=function(){this.ingredients.push("")},this.removeIngredientField=function(a){this.ingredients.splice(a,1)},this.addDirectionField=function(){this.directions.push("")},this.removeDirectionField=function(a){this.directions.splice(a,1)}}]),angular.module("cookBookApp").controller("AddpictureCtrl",["$mdDialog",function(a){this.croppedDataUrl="",this.hide=function(){a.hide()},this.cancel=function(){a.cancel()},this.addPicture=function(b){console.log("Add picture funtion triggered"),a.hide(b)}}]),angular.module("cookBookApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/addpicture.html",'<md-dialog aria-label="Add a recipe picture"> <form ng-cloak> <md-toolbar> <div class="md-toolbar-tools"> <h2>Add picture</h2> <span flex></span> <md-button class="md-icon-button" ng-click="cancel()"> <span class="glyphicon glyphicon-remove"></span> </md-button> </div> </md-toolbar> <md-dialog-content> <p>This is the addPicture view.</p> <div class="form-group md-dialog-content"> <div class="column"> <label for="recipe-picture-btn">Recipe Picture</label> <button id="recipe-picture-btn" type="button" class="btn btn-default" ngf-select ng-model="picFile" accept="image/*"> Select Picture</button> <div ngf-drop ng-model="picFile" ngf-pattern="image/*" class="cropArea"> <img-crop image="picFile  | ngfDataUrl" result-image="picture.croppedDataUrl" area-type="square"> </img-crop> </div> </div> </div> </md-dialog-content> <md-dialog-actions layout="row"> <md-button ng-click="picture.addPicture(picture.croppedDataUrl)">Accept</md-button> </md-dialog-actions> </form> </md-dialog>'),a.put("views/createrecipe.html",'<p>This is the createRecipe view.</p> <form novalidate name="form"> <div class="form-group has-feedback" ng-class="{\'has-error\': form.recipeName.$invalid && (form.$submitted || form.recipeName.$touched)}"> <label class="control-label" for="recipe-name">Recipe Name</label> <input id="recipe-name" name="recipeName" class="form-control" ng-model="recipes.name" required> <span ng-show="form.recipeName.$invalid && (form.$submitted || form.recipeName.$touched)" class="glyphicon glyphicon-remove form-control-feedback"></span> <div ng-show="form.$submitted || form.recipeName.$touched"> <span class="help-block" ng-show="form.recipeName.$error.required">Please provide a name.</span> </div> </div> <div class="form-inline"> <label class="control-label" for="recipe-ingredients">Ingredients</label> <ul> <fieldset> <li data-ng-repeat="ingredient in recipes.ingredients track by $index" class="" ng-class="{\'has-error\': ingredientFieldForm.ingredientName.$invalid && (form.$submitted || ingredientFieldForm.ingredientName.$touched)}"> <ng-form name="ingredientFieldForm"> <!-- Use ng-form to evaluate each input seperately and indepently for validation --> <div class="form-group has-feedback"> <!-- Div is to keep glyphicon inside input field --> <input id="recipe-ingredients" name="ingredientName" class="form-control" value="{{ingredient}}" ng-model="recipes.ingredients[$index]" required> <span class="glyphicon glyphicon-remove form-control-feedback" ng-show="ingredientFieldForm.ingredientName.$invalid && (form.$submitted || ingredientFieldForm.ingredientName.$touched)"></span> <span id="ingredientHelpBlock" class="help-block" ng-show="ingredientFieldForm.ingredientName.$invalid && (form.$submitted || ingredientFieldForm.ingredientName.$touched)">Please provide an ingredient.</span> </div> <button type="button" class="btn btn-default" ng-show="$last" ng-click="recipes.addIngredientField()">+</button> <button type="button" class="btn btn-default" ng-hide="recipes.ingredients.length === 1" ng-click="recipes.removeIngredientField($index)">-</button> </ng-form> </li> </fieldset> </ul> </div> <div class="form-group form-inline"> <label for="recipe-directions">Directions</label> <ol> <fieldset> <li data-ng-repeat="direction in recipes.directions track by $index" ng-class="{\'has-error\': directionFieldForm.directionName.$invalid && (form.$submitted || directionFieldForm.directionName.$touched)}"> <ng-form name="directionFieldForm"> <div class="form-group has-feedback"> <input id="recipe-directions" name="directionName" class="form-control" ng-model="recipes.directions[$index]" required> <span class="glyphicon glyphicon-remove form-control-feedback" ng-show="directionFieldForm.directionName.$invalid && (form.$submitted || directionFieldForm.directionName.$touched)"></span> <span class="help-block" ng-show="directionFieldForm.directionName.$invalid && (form.$submitted || directionFieldForm.directionName.$touched)">Please provide a direction.</span> </div> <button type="button" class="btn btn-default" ng-show="$last" ng-click="recipes.addDirectionField()">+</button> <button type="button" class="btn btn-default" ng-hide="recipes.directions.length === 1" ng-click="recipes.removeDirectionField($index)">-</button> </ng-form> </li> </fieldset> </ol> </div> <div class="form-group has-feedback" ng-class="{\'has-error\': form.categoryName.$invalid && (form.$submitted || form.categoryName.$touched)}"> <label class="control-label" for="recipe-category">Category</label> <select id="recipe-category" name="categoryName" class="form-control" ng-model="recipes.selectedCategory" ng-options="x for x in recipes.categories" required> <option value="">Select Category</option> </select> <span class="help-block" ng-show="form.categoryName.$invalid && (form.$submitted || form.categoryName.$touched)">Please select a category</span> </div> <button ng-click="recipes.addPicture($event)" class="btn btn-default">Add Picture</button> <img ng-src="{{croppedDataUrl}}"> <input name="submitButton" type="submit" id="add-recipe-button" type="button" class="btn btn-primary" ng-class="" ng-click="recipes.addRecipe()" value="Add Recipe"> <div class="alert alert-danger" role="alert" ng-show="form.$invalid && form.$submitted"><strong>Oops!</strong> Please fix the errors first!</div> </form>'),a.put("views/editrecipe.html",'<p>This is the editRecipe view.</p> <form> <div class="form-group"> <label for="recipe-name">Name</label> <input id="recipe-name" class="form-control" value="{{editRecipe.aRecipe.name}}" ng-model="editRecipe.name"> </div> <div class="form-group form-inline"> <label for="recipe-ingredients">Ingredients</label> <ul> <fieldset> <li data-ng-repeat="ingredient in editRecipe.ingredients track by $index"> <input id="recipe-ingredients" class="form-control" value="{{ingredient}}" ng-model="editRecipe.ingredients[$index]"> <button type="button" class="btn btn-default" ng-show="$last" ng-click="editRecipe.addIngredientField()">+</button> <button type="button" class="btn btn-default" ng-hide="editRecipe.ingredients.length === 1" ng-click="editRecipe.removeIngredientField($index)">-</button> </li> </fieldset> </ul> </div> <div class="form-group form-inline"> <label for="recipe-directions">Directions</label> <ol> <fieldset> <li data-ng-repeat="direction in editRecipe.directions track by $index"> <input id="recipe-directions" class="form-control" ng-model="editRecipe.directions[$index]"> <button type="button" class="btn btn-default" ng-show="$last" ng-click="editRecipe.addDirectionField()">+</button> <button ng-hide="editRecipe.directions.length === 1" ng-click="editRecipe.removeDirectionField($index)">-</button> </li> </fieldset> </ol> </div> <div class="form-group"> <label for="recipe-category">Category</label> <select id="recipe-category" class="form-control" ng-init="editRecipe.selectedCategory = editRecipe.aRecipe.category" ng-model="editRecipe.selectedCategory" ng-options="x for x in editRecipe.categories"> </select> </div> <img ng-src="{{editRecipe.aRecipe.image}}"> <a ui-sref="singleRecipe({id: editRecipe.name})"> <button type="button" class="btn btn-default" ng-click="editRecipe.updateRecipe()">Update</button> </a> <a href="#/"> <button type="button" class="btn btn-default" ng-click="editRecipe.deleteRecipe()">Delete</button> </a> </form>'),a.put("views/main.html",'<h1>Cookbook Web App</h1> <div id="carousel-main" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators"> <li ng-repeat="recipe in mainMenuRecipes.allRecipes" data-target="#carousel-main" data-slide-to="0" ng-class="{active: $index === 0}"></li> </ol> <div class="carousel-inner"> <div ng-repeat="recipe in mainMenuRecipes.allRecipes" class="item" ng-class="{active: $index === 0}"> <a ui-sref="singleRecipe({id: recipe.name})"> <img ng-src="{{recipe.image}}"> <div class="carousel-caption"> <p>{{recipe.name}}</p> </div> </a> </div> </div> <a class="left carousel-control" href="#carousel-main" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#carousel-main" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div> <div class="row"> <div class="items-container" ng-repeat="recipe in mainMenuRecipes.allRecipes"> <div class="col-md-4"> <a ui-sref="singleRecipe({id: recipe.name})"> <h4>{{recipe.name}}</h4> <img ng-src="{{recipe.image}}"> </a> </div> </div> </div>'),a.put("views/recipenavbar.html",'<p>This is the recipeNavBar view.</p> <ul> <fieldset> <li data-ng-repeat="singleRecipe in recipesnavbar.allRecipes"> <a ui-sref="singleRecipe({id: singleRecipe.name})"> <p>{{singleRecipe.name}}</p> </a> </li> </fieldset> </ul>'),a.put("views/singlerecipe.html",'<h2>{{singleRecipe.aRecipe.name}}</h2> <img ng-src="{{singleRecipe.aRecipe.image}}"> <h4>Ingredients</h4> <ul> <li data-ng-repeat="ingredient in singleRecipe.aRecipe.ingredients track by $index"> {{ingredient}} </li> </ul> <h4>Directions</h4> <ol> <li data-ng-repeat="direction in singleRecipe.aRecipe.directions track by $index"> {{direction}} </li> </ol> <a href="#/"> <button type="button" class="btn btn-default" ng-click="singleRecipe.deleteRecipe(singleRecipe.aRecipe.name)">Delete</button> </a> <a ui-sref="editRecipe({id: singleRecipe.aRecipe.name})"> <button type="button" class="btn btn-default">Edit</button> </a>')}]);