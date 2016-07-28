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
myNinjaApp.controller('NinjaController', ['$scope', function($scope){
    
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
    
    
    $scope.ninjas = [
        {
            name: 'Andrea',
            belt: 'Black',
            rate: 1150,
            available: true,
            thumb: ""
        },
        {
            name: 'Marbles',
            belt: 'Yellow',
            rate: 150,
            available: true,
            thumb: ""
        },
        {
            name: 'Lundy',
            belt: 'Brown',
            rate: 70,
            available: true,
            thumb: ""
        },
        {
            name: 'Marley',
            belt: 'Blue',
            rate: 10,
            available: false,
            thumb: ""
        }];
    
    $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);

    };
    
    
}]);