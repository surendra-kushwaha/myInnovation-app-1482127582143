// angular.module is a global place for creating, registering and retrieving Angular modules

var app = angular.module('myInnovative', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
        .state('myinnovative-landing', {
            url: '/myinnovative-landing',
            templateUrl: 'views/myinnovative-home.html',
			controller: 'homeCtrl'
        });
	$urlRouterProvider.otherwise('/myinnovative-landing');
});
