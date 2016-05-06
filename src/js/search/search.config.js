/**
 * Created by bhalvers on 5/4/16.
 */
'use strict';
function SearchConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('app.search', {
			url: '/',
			title: 'Search',
			views: {
				'search': {
					controller: 'SearchCtrl',
					controllerAs: '$ctrl',
					templateUrl: 'search/search.html'
				}
			}
		});
};

export default SearchConfig;