angular.module('BeerFront',[])
.controller('dashboardController', dashboardController);

dashboardController.$injector = ['$scope','beer'];
function dashboardController ($scope,beer) {
	var vm = this;	
	vm.beers=[]; 
	vm.saveData=function(data){
		beer.saveBeer(data).then(function(res){
			console.log(res);
			vm.getAllBeers();
		},function(error){
			console.log(error);
		});
	}
	vm.getAllBeers=function(){
		beer.getAllBeer().then(function(res){
			console.log(res);
			vm.beers=res.data;
		},function(error){
			console.log(error);
		});
	}
	vm.getAllBeers();
}