(function () {
    'use strict';

    var serviceId = 'authenticationService';
    angular.module('anyopp').factory(serviceId, ['$http', '$window', authenticationService]);

    function authenticationService($http, $window) {
    var user = null;
    return {
      isLoggedIn: function() {
        return (user) ? user : false;
      },
      setUser: function(data) {
        user = data;
      },
      login: function(userInfo, callback) {
        var loginRequest = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'ZUMO-API-VERSION' : '2.0.0'
          },
          url: 'https://system-dev.anyopp.com/api/authentication/login',
          data: userInfo
        };
        $http(loginRequest).then(function(res) {
          user = res.data;
          $window.localStorage.setItem('user', JSON.stringify(res.data));
          if (callback){
            callback();
          }
        })
      },
      logout: function(callback) {
        user = false;
        $window.localStorage.removeItem('user');
        if (callback) {
          callback();
        }
      }
    };
  }
})();