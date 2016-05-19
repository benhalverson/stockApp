/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this._CoveredCall = CoveredCall;
		this._mockdata = CoveredCall;
		this._formData = this.formData;
	}

	getData () {
		console.log('clicked')
		console.log('form data', this._formData);
		this._CoveredCall.getJSON(); // success
	}

}
export default TableCtrl;