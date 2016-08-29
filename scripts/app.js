angular.module('controllersModule', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
    })
    .directive('helloWorld', function () {
        return {
            template: "<h1>Hello {{ message }} </h1>"
        };
    });







