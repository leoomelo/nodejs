angular.module('contatonode').controller('ContatosController', function($scope) {
	$scope.total = 0;
	$scope.incrementa = function() {
		$scope.total++;	
	};
});
