/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
function TableConfig($stateProvider) {
	'ngInject';

	$stateProvider
		.state('app.table', {
			url: '/',
			controller: 'TableCtrl',
			controllerAs: '$ctrl',
			templateUrl: 'table/table.html',
			title: 'Table data'
		});

};

export default TableConfig;