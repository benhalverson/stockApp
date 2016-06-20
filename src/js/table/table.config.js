/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
function TableConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('table', {
			title: 'table',
			views: {
				'table': {
					controller: 'TableCtrl',
					controllerAs: '$ctrl',
					templateUrl: 'table/table.html'
				}
				// 'search': {
				// 	controller: 'SearchCtrl',
				// 	controllerAs: '$ctrl',
				// 	templateUrl: '../search/search.html'
				//
				// }
			}

		});

}

export default TableConfig;