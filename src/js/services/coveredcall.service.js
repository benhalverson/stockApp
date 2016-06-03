/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q) {
		'ngInject';

		this._$http = $http;
		// Object to store coveredcalls
		this._mockdata= AppConstants.api;

	}

	//Get data from api

	getJSON(formData) {
		return this._$http({
			method: 'POST',
			url: this._mockdata,
			data: formData,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(
			(res) => {
				this._data = res;
			},
			(err) => {
				console.log('Error data', err);
			}
		)
	}
}