angular.module('coderFriends', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('login', {
		url: '/',
		template: "<a href='/auth/github'><button>Login With GitHub</button></a>"
	})
	.state('home', {
		url: '/home',
		templateUrl: '/templates/home.html'
	})
	.state('friend', {
		url: '/friend/:github_username',
		templateUrl: './templates/friend.html'
	});
});