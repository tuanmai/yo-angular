'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('todosApp')
  .controller('MainCtrl', ['$scope','localStorageService', function ($scope, localStorageService) {

    var savedTodos = localStorageService.get('todos');
    $scope.todos = savedTodos || [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      localStorageService.set('todos', $scope.todos);
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
      localStorageService.set('todos', $scope.todos);
    }
  }]);
