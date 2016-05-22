(function () {
    'use strict';
    var controllerId = 'detailCtrl';
    angular.module('anyopp').controller(controllerId, ['$scope', '$http', '$state', 'Upload', 'authenticationService', detailCtrl]);

    function detailCtrl($scope, $http, $state, Upload, authenticationService) {
        $scope.user = authenticationService.isLoggedIn();
        if (!$scope.user) {
          $state.go('login');
        }

        $scope.onSelect = function ($item, $model, $label) {
          var loc = $item.geometry.location;
          $scope.map = { center: { latitude: loc.lat, longitude: loc.lng }, zoom: 17 };
        };

        $scope.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response){
                return response.data.results.map(function(item){
                    return item;
                });
            });
        };

        // upload on file select or drop
        $scope.upload = function (file) {

            $scope.uploading = true;

            Upload.upload({
                headers: {
                    'Content-Type': 'application/json',
                    'ZUMO-API-VERSION' : '2.0.0',
                    'X-ZUMO-AUTH' : $scope.user.token
                },
                url: 'https://system-dev.anyopp.com/api/blob?containerName=private',
                data: {file: file}
            }).then(function (result) {
                $scope.result = result.data;
                $scope.uploading = false;
            }, function (error) {
                $scope.error = error.data;
                $scope.uploading = false;
            });
        };

        $scope.uploadFiles = function (files) {
            if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                $scope.upload(files[i]);
            }

        }
    }
}
})();