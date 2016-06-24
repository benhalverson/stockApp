/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this._CoveredCall = CoveredCall;
		console.log('CoveredCallsss: ', CoveredCall);
		console.log('this._CoveredCallaaaaff: ', this._CoveredCall);
	}

	getData () {
		console.log('clicked');
		console.log('form data', this.formData);
		this._CoveredCall.getJSON(this.formData); // success
	}

}
export default TableCtrl;

