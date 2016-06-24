/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q, neoresource) {
		'ngInject';

		this._$http = $http;
		// Object to store coveredcalls
		this._mockdata= AppConstants.api;
		this._neoresource = neoresource;
		console.log('neo', this._neoresource);
	}

	//Get data from api


	neoJSON(url ,formData) {
		var data = {
			value: formData
		}
		this._neoresource.webapipost(url, data).then(function(res, err) {
			console.log('res', res)
			console.log('err', err);
		})


	}
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