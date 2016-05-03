/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http) {
		'ngInject';

		this._Appconstants = AppConstants;
		this._$http = $http;
		// Object to store coveredcalls
		this.coveredCalls = null;
		this.token = null;
	}

	//Try to get data from api service

	getToken() {
		return this._$http({
			url: this._Appconstants.GETTOKEN,
			method: 'POST',
			headers: {
				'Authorization': 'Basic ZXRyYWRlX2NsaWVudDo4MTV FQjRBNC0zOThDLTRGOTQtQTk0QS1FNUM5NUU4NEE3MTU=',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: {
				'grant_type': 'client_credentials',
				'scope': 'etrade_api_v1'
			}
		}).then((tokenRes) => {
			this.token = tokenRes.data;

		}).catch((error) => {
			console.log('Error: ', error);
		});

	}


	getData() {
		return this._$http({
			url: this._Appconstants.MOCKCOVEREDCALLAPI,
			method: 'GET'
		}).then(
			// on Success
			(res) => {
				//store the response info for easy lookup

			this.coveredCalls = res.data;
		});
	}

}