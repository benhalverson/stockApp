/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this._CoveredCall = CoveredCall;
		console.log('CoveredCall: ', CoveredCall);
		console.log('this._CoveredCall: ', this._CoveredCall);
		
	}

	getData () {
		console.log('clicked');
		console.log('form data', this.formData);


	}

}
export default TableCtrl;

