/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q) {
		'ngInject';

		this._$http = $http;
		// Object to store coveredcalls
		this._mockdata= AppConstants.api;
		this._userData = null;

	}

	//Get data from api

	getJSON() {
		this._$http({
			method: 'POST',
			url: this._mockdata,
			settings: {
				crossDomain: true,
				async: true
			},
			// options: {
			// 	'Access-Control-Allow-Origin': 'mymacbookpro.etrade.com',
			// 	"content-type": "application/json",
			// 	'Access-Control-Request-Method': 'POST'
			// },
			headers: {
				'stk1': 'NetTRKuWWQv+b5i6/oUumTWg+UqNiGLisUhI4qGFZGYyYDUHd2ncYfzr+gWvRQoviLNNfw==',
				'Access-Control-Allow-Origin': 'mymacbookpro.etrade.com',
				"content-type": "application/json",
				'Access-Control-Request-Method': 'GET',
				'Access-Control-Allow-Credentials': true
			}
			// ,
			// data: {
			// 	'stockPriceMin': '10',
			// 	'stockPriceMax': '20'
			// }

		}).then(
			(res) => {
				this.data = res;
				console.log('data from service: ', this.data.data.data.coveredCallScanner);
			},
			(err) => {
				console.log('Config Object', err.config);
				console.log('Config Headers', err.config.headers);
				console.log('Method', err.config.method);
				console.log('Error data', err.config.data);
			}
		)
	}

	submitForm() {
		this._$http({
			method: 'POST',
			url: this._mockdata,
			headers: {
				'Access-Control-Allow-Credentials': true
			},
			data: {
				userdata: data
			}
		}).then(
			(res) => {
				this._userData = res.data.userdata;
			}
		)
	}

}