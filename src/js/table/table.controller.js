/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants) {
		'ngInject';

		this.appName = AppConstants.appName;
		this.coveredcalls = AppConstants.MOCKCOVEREDCALLAPI;
	}


}

export default TableCtrl;