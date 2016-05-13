/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this._CoveredCall = CoveredCall;
	}

	getData () {
		this._CoveredCall.getJSON();
		console.log('JSON: ', this._CoveredCall.getJSON());
	}

}
export default TableCtrl;