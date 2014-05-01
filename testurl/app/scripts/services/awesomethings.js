'use strict';

angular.module('testurlApp')
  .factory('awesomeThings', function ($resource) {
    return $resource('/data/awesomeThings.json');
  });
