angular.module('BeerFront').service('beer',beerService);
beerService.$injector=['$q','$http'];
function beerService($q,$http){
	this.saveBeer=saveBeer;
	this.getAllBeer=allBeer;

	function saveBeer(beer){
		var deferred = $q.defer();
		$http.post("http://localhost:3000/api/beers",beer).then(function(response){
			deferred.resolve(response)
		}, function(error){
			deferred.reject(error);
		});	
		return deferred.promise;
	}
	function allBeer(){
		var deferred = $q.defer();
		$http.get("http://localhost:3000/api/beers").then(function(response){
			deferred.resolve(response)
		}, function(error){
			deferred.reject(error);
		});	
		return deferred.promise;	
	}
}

