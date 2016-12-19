// angular.module is a global place for creating, registering and retrieving Angular modules

var app = angular.module('myInnovatiove', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
        .state('innovative-landing', {
            url: '/innovative-landing',
            templateUrl: 'views/innovative-home.html',
						controller: 'homeCtrl'
        })
        .state('innovative-details', {
            url: '/innovative-details',
            templateUrl: 'views/innovative-details.html',
						controller: 'homeCtrl'
        })
        .state('innovative-create-ideas', {
            url: '/innovative-createideas',
            templateUrl: 'views/innovative-createideas.html',
						controller: 'homeCtrl'
        })
        .state('innovative-implementations', {
            url: '/innovative-implementations',
            templateUrl: 'views/innovative-implementations.html',
						controller: 'homeCtrl'
        })
		.state('innovative-profile', {
            url: '/innovative-profile',
            templateUrl: 'views/innovative-profile.html',
			controller: 'homeCtrl'
        });
	$urlRouterProvider.otherwise('/innovative-landing');
});
