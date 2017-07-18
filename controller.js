angular.module('userProfiles').controller('MainController', function($scope, MainService){ //Pass Main Service and inject it into controller
    
    $scope.getUsers = function() {
        $scope.users = MainService.getUsers();
    }
    $scope.getUsers();

    $scope.toggleFavorite = MainService.toggleFavorite;
    
   
})