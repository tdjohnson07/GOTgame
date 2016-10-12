angular.module('GOTapp').factory('houseService',['$http', function($http){
  var data={};
  data.houses=['Stark', 'Baratheon', 'Tyrell', 'Martell', 'Aaryn', 'Targaryen', 'Lannister', 'Tully', 'Greyjoy'];

  return{
    data: data
  }
}]);
