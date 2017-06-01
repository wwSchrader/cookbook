'use strict';

/**
 * @ngdoc function
 * @name cookBookApp.controller:AddpictureCtrl
 * @description
 * # AddpictureCtrl
 * Controller of the cookBookApp
 */
angular.module('cookBookApp')
  .controller('AddpictureCtrl', ['$mdDialog', function ($mdDialog) {
    this.croppedDataUrl = '';

    this.hide = function() {
        $mdDialog.hide();
    };

    this.cancel = function() {
        $mdDialog.cancel();
    };

    this.addPicture = function(picture) {
        console.log('Add picture funtion triggered');
        $mdDialog.hide(picture);
    };
  }]);
