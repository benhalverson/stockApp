function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
	'ngInject';

	//$httpProvider.defaults.timeout = 6000;
	//$httpProvider.defaults.headers.common['stk1'] = 'stk1';

	// $httpProvider.defaults.withCredentials = true;
	// $httpProvider.defaults.useXDomain = true;
	// delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider
		.state('app', {
			// abstract: true
			url : '/',
			templateUrl: 'layout/app-view.html'
			// views: {
			// 	'one': {
			// 		template : 'helloooooooo'
			// 		// controller: 'SearchCtrl',
			// 		// controllerAs: '$ctrl',
			// 		// templateUrl: 'search/search.html'
			// 	},
			// 	'two' : {
			// 		template : 'thereeee'
			// 		// controller: 'TableCtrl',
			// 		// controllerAs: '$ctrl',
			// 		// templateUrl: 'table/table.html'
			// 	}
			
		});
	$urlRouterProvider.otherwise('/')
}

export default AppConfig;