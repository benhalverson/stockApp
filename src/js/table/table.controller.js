/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall, DataService, $scope) {
		'ngInject';
		this._CoveredCall = CoveredCall;
		console.log('CoveredCall: ', CoveredCall);
		console.log('this._CoveredCall: ', this._CoveredCall);
		this.chartData = DataService.data;
		this.newData = null;
		this.$scope = $scope;
	}

	getData () {
		console.log('clicked');
		console.log('form data', this.formData);
		this._CoveredCall.getJSON(this.formData); // success
	}




}
export default TableCtrl;

