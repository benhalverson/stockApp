/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';

import TableCtrl from '../table/table.controller'
import SearchCtrl from '../search/search.controller'
function TableConfig($stateProvider , $httpProvider) {
	'ngInject';
	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider
		.state('app.layout', {
			url: '/',
			title: 'Table data',
			views: {
				'table': {
					controller: TableCtrl,
					controllerAs: '$Tablectrl',
					templateUrl: 'table/table.html'
				},
				'search': {
					controller: SearchCtrl,
					controllerAs: '$Searchctrl',
					templateUrl: 'search/search.html'
				
				}
			}

		});

}

export default TableConfig;