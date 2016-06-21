/**
 * Created by bhalvers on 5/2/16.
 */
function TableConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('app.table', {
			url: '/',
			title: 'Table data',
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