/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
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
			}

		})
		.state('app.error', {
			url: '/error',
			controller: 'TableCtrl',
			controllerAs: '$ctrl',
			template: '<h1> An Error has occured. </h1><br> <p>Please check the logs</p>',
			title: 'Error'
		});

};

export default TableConfig;