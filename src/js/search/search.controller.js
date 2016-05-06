/**
 * Created by bhalvers on 5/4/16.
 */
'use strict';
class SearchCtrl {
	constructor(AppConstants, $state) {
		'ngInject';
		console.log('Search Controller log', AppConstants.appName);
		this.appName = AppConstants.appName;
	}

}

export default SearchCtrl;