var myNinjaApp = angular.module('myNinjaApp', []);

//<html ng-app = "myNinjaApp" must be included"

//declare a controller, name it ninjaController
myNinjaApp.controller('ninjaController', ['$scope', function($scope){
    
    $scope.ninjas = [
        {
            name: 'Andrea',
            belt: 'Double Black',
            rate: 1150
        },
        {
            name: 'Marbles',
            belt: 'Yellow',
            rate: 150
        },
        {
            name: 'Lundy',
            belt: 'Brown',
            rate: 70
        },
        {
            name: 'Marley',
            belt: 'Blue',
            rate: 10
        }];
        
    
}]);