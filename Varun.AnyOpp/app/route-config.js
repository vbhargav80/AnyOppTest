(function () {
    'use strict';

    var app = angular.module('anyopp');
    
    // Configure the routes and route resolvers
    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                controller: 'loginCtrl',
                templateUrl: 'app/Login/Login.html'
            })
            .state('detail', {
                url: '/detail',
                controller: 'detailCtrl',
                templateUrl: 'app/Detail/Detail.html',
                resolve: {
                    login: [
                        '$q', '$timeout', 'authenticationService', '$state', function($q, $timeout, authenticationService, $state) {
                            var deferred = $q.defer();
                            var user = authenticationService.isLoggedIn();
                            if (user) {
                                $timeout(function() {
                                    deferred.resolve(user);
                                }, 1000);
                            } else {
                                $timeout(function() {
                                    deferred.reject;
                                    $state.go('login');
                                });
                            }
                            return deferred.promise;
                        }
                    ]
                }
            })
            .state('logout', {
                url: '/logout',
                controller: [
                    'authenticationService', '$state', function(authenticationService, $state) {
                        authenticationService.logout(function() {
                            $state.go('login');
                        });
                    }
                ]
            });
        $urlRouterProvider
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });

})();