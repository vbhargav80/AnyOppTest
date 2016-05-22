(function () {
    'use strict';
    
    var app = angular.module('anyopp', [
        'ngCookies',        
        'ngResource',          
        'ngSanitize',       
        'ui.router',
        'ngFileUpload',
        'ui.bootstrap',
        'uiGmapgoogle-maps'
    ]);
    
    app.run(['$window', 'authenticationService', function ($window, authenticationService) {
        if ($window.localStorage.user) {
            authenticationService.setUser(JSON.parse($window.localStorage.user));
        }
    }]);
})();