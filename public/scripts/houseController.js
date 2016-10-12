angular.module('GOTapp').controller('houseController',['$location','houseService', function($location, houseService){
  var vm = this;
  vm.data = houseService.data;
  console.log(vm.data);
}]);
