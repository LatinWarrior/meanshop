/* clients/app/products/products.controller.js */

'use strict';

var errorHandler;

angular.module('meanshopApp')
    .controller('ProductsCtrl', function ($scope, Products) {
        //$scope.message = 'Hello';
        $scope.products = Products.query();
    })


    .controller('ProductViewCtrl', function ($scope, $state, $stateParams, Products) {

        $scope.product = Products.get({ id: $stateParams.id });

        $scope.deleteProduct = function () {
            console.log('In deleteProduct of ProductViewCtrl of products.controller.js');
            $scope.deleteProduct = function () {
                Products.delete({ id: $scope.product._id }, function success(/* value, responseHeaders */) {
                    $state.go('products');
                }, errorHandler($scope));
            };
            // Products.delete($scope.product);
            // $state.go('products');
        }
    })

    .controller('ProductNewCtrl', function ($scope, $state, Products) {

        $scope.product = {}; // create a new instance
        
        $scope.addProduct = function (product) {
            console.log('In addProduct of ProductNewCtrl of products.controller.js');
            $scope.addProduct = function () {
                Products.save($scope.product, function success(value /*, responseHeaders */) {
                    $state.go('viewProduct', { id: value._id });
                }, errorHandler($scope));
            };
            // Products.create($scope.product);
            // $state.go('products');
        }
    })

    .controller('ProductEditCtrl', function ($scope, $state, $stateParams, Products) {

        $scope.product = Products.get({ id: $stateParams.id });

        $scope.editProduct = function (product) {
            console.log('In editProduct of ProductEditCtrl of products.controller.js');
            Products.update({ id: $scope.product._id }, $scope.product, function success(value /*, responseHeaders */) {
                $state.go('viewProduct', { id: value._id });
            }, errorHandler($scope));
            // Products.update($scope.product);
            // $state.go('products');
        };
    });

errorHandler = function ($scope) {
    console.log('In errorHandler of products.controller.js');
    return function error(httpResponse) {
        $scope.errors = httpResponse;
    };
};

