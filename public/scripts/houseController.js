angular.module('GOTapp').controller('houseController',['$location','houseService', function($location, houseService){
  var vm = this;
  vm.data = houseService.data;
  console.log(vm.data);
  vm.arryn= function(){
    console.log('clicked');
    swal({
  title: 'Are you sure?',
  text: 'House Arryn, Family Members: Lord: Jon Arryn, Wife: Lysa (Tully), Childern: Robin',
  type: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Start with House Arryn?'
}).then(function() {
  swal(
    'House Arryn Selected',
    'success'
  );
})
  }
}]);
