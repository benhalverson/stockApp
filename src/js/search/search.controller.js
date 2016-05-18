/**
 * Created by bhalvers on 5/4/16.
 */
'use strict';
class SearchCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		console.log('Search Controller log', AppConstants.appName);
		this.appName = AppConstants.appName;
		this._CoveredCall = CoveredCall;
		this._formData = this.formData;
	}

	submitForm() {
		// this.isSubmitting = true;
		
		console.log('Form data: ', this._formData);
		this._CoveredCall.postData(this._formData)
	}
}

export default SearchCtrl;