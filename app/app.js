var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);
//config method fires before anything else starts

myNinjaApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
    }).when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
    }).otherwise({
            redirectTo: '/home'
    });
}]);

//<html ng-app = "myNinjaApp" must be included"
//declare a controller, name it ninjaController
myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){
    
    $scope.addNinja = function(){
       $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: $scope.newninja.rate,
        available: true
    });
        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    };
    
    
    $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);

    };
    
    $http.get('data/ninjas.json').success(function(data){
        $scope.ninjas = data;
        
    })
    
}]);