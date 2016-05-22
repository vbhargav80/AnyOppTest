(function () {
    'use strict';
    var controllerId = 'loginCtrl';
    angular.module('anyopp').controller(controllerId, ['$scope', 'authenticationService', '$state', loginCtrl]);

    function loginCtrl($scope, authenticationService, $state) {
        $scope.user = authenticationService.isLoggedIn();
        if ($scope.user) {
          $state.go('detail');
        }
        $scope.login = function() {
          authenticationService.login({username: $scope.username, password: $scope.password}, function() {
            $state.go('detail');
          })
        };
        $scope.logout = function() {
          authenticationService.logout();
        }
    }
})();