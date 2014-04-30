'use strict';

angular.module('testurlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
      	title:'HTML5 Boilerplate',
      	description:'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      }, {
        title:'AngularJS',
      	description:'AngularJS is a toolset for building the framework most suited to your application development.'
      }, {
      	title:'Karma',
      	description:'Spectacular Test Runner for JavaScript.'
      }
    ];
  });
