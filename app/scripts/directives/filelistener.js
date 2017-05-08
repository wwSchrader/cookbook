'use strict';

/**
 * @ngdoc directive
 * @name cookBookApp.directive:fileListener
 * @description
 * # fileListener
 */
angular.module('cookBookApp')
  .directive('fileListener', function () {
    return {
      scope: {
        file: '='
      },
      link: function(scope, element, attrs) {
        console.log(attrs);
        element.bind('change', function(event){
            var files = event.target.files;
            var file = files[0];
            scope.file = file ? file.name : undefined;
            scope.$apply();
        });
      }
    };
  });
