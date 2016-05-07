/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q) {
		'ngInject';

		this._Appconstants = AppConstants;
		this._$http = $http;
		// Object to store coveredcalls
		this.coveredCalls = null;
		
		this._mockdata= AppConstants.api;
		console.log('this._mockdata in service: ', this._mockdata);
		this._data = null;

	}

	//Try to get data from api service

	getJSON() {
		this._$http({
			method: 'GET',
			url: this._mockdata

		}).then(
			(res) => {
				this._data = res;
				console.log('data', this._data.data.data.coveredCallScanner);
			},
			(err) => {
				console.log(err);
			}
		)
	}

}