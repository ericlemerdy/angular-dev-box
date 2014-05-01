'use strict';

angular.module('testurlApp')
  .controller('MainCtrl', function ($scope, awesomeThings) {
    $scope.awesomeThings = awesomeThings.query({}, function(data) {
        $scope.selectedAwesomeThing = data[0];
    });
  });
