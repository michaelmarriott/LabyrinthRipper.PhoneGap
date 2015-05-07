(function () {
    'use strict';
    angular.module("mPlatform.controllers")
        .controller('ProductCtrl', ['$scope', 'products', function ($scope, products) {
            var refresh = function () {
            }

            var searchResult = function (item) {
                return products.getSearchResults(item)
                    .then(function (data) {
                        $scope.products = data;
                        $scope.error = "";
                        return data;
                    }, function (errorMessage,b,c) {
                    $scope.products = null;
                    $scope.error = errorMessage;
                        return errorMessage;
                    });
            }

            $scope.search = function () {
                var text = $scope.productsModel;
                if (!text) {
                    return;
                };
                searchResult(text);
                $scope.productsModel = '';
            }

            refresh();
        }]);
})();