(function () {
    'use strict';

    angular.module("mPlatform.services")
        .factory("guidGenerator", function () {
            var generatePart = function () {
                var guidPartNumber = (Math.random() * 0x10000) | 0;
                return (guidPartNumber + 0x10000).toString(16).substring(1).toUpperCase();
            };

            return function () {
                return generatePart()
                    + generatePart()
                    + "-"
                    + generatePart()
                    + "-"
                    + generatePart()
                    + "-"
                    + generatePart()
                    + "-"
                    + generatePart()
                    + generatePart()
                    + generatePart();
            };
        })
       
        .factory("products", ["$rootScope", "$q", "$window", "$resource", function ($rootScope, $q, $window, $resource) {
            var key = ''; // Add your Bing Maps API key
            var url = 'http://labyrinthapi.kusanii.net/api/product/';

            return {
                getSearchResults: function (searchText) {
                    return $resource(url, {})
                        .query({ text: searchText })
                        .$promise.then(function (response) {
                            return response;
                        }, function (error) {
                            throw error;
                        //return "Error" + error;
                    });
                }
            }
        }])
        .factory("cordova", ['$q', "$window", "$timeout", function ($q, $window, $timeout) {
            var deferred = $q.defer();
            var resolved = false;

            document.addEventListener('deviceready', function () {
                resolved = true;
                deferred.resolve($window.cordova);
            }, false);

            $timeout(function () {
                if (!resolved && $window.cordova) {
                    deferred.resolve($window.cordova);
                }
            });

            return { ready: deferred.promise };
        }]);
})();