/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this._CoveredCall = CoveredCall;
		this._mockdata = CoveredCall;
	}

	getData () {
		this._CoveredCall.getJSON().then(res => this.items = res);
		//console.log('JSON: ', this._CoveredCall.getJSON());
		// console.log('Mockdata: ', this._mockdata);
	}

}
export default TableCtrl;