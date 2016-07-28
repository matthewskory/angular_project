var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);
//config method fires before anything else starts

myNinjaApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        
    }).when('/contact', {
            templateUrl: 'views/contact.html'
        
    })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
    })
        .otherwise({
            redirectTo: '/home'
    });
}]);

myNinjaApp.directive('randomNinja', [function(){
    
    return {
        //allow directive to be used as element only
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random()* 4);
        }
    };
    
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
    
    $scope.removeAll = function(){
        $scope.ninjas = [];
    }
    
    $http.get('data/ninjas.json').success(function(data){
        $scope.ninjas = data;
        
    })
    
}]);