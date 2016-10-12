angular.module('GOTapp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/houseSelect.html',
    controller: 'houseController',
    controllerAs: 'house'
  })
  $locationProvider.html5Mode(true);
}]);
