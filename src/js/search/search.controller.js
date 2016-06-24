/**
 * Created by bhalvers on 5/4/16.
 */
'use strict';
class SearchCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		console.log('Search Controller asdfasdfasdfa', AppConstants.appName);
		this.appName = AppConstants.appName;
		this._CoveredCall = CoveredCall;
		this._formData = this.formData;
	}

	getData (data) {
		console.log('clicked');
		console.log('form data', this.formData);
		this._CoveredCall.neoJSON('http://lxdm1239m7.etrade.com:8443/webapiopt/optionAnalytics/ot/coveredCallScanner.json', data); // success
	}
}

export default SearchCtrl;