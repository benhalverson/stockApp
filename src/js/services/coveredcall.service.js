/**
 * Created by bhalvers on 5/2/16.
 */
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q) {
		'ngInject';

		this._$http = $http;
		// Object to store coveredcalls
		this._mockdata= AppConstants.api;
		// this._$log = $log;
		this._userData = null;
		this._obj = {
			"value": {
				"stockPriceMin": "10",
				"stockPriceMax": "20"
			}
		}

	}

	//Get data from api

	getJSON() {

		var reqData = new Object({
			"value": {
				"stockPriceMin": "10",
				"stockPriceMax": "20"
			}
		});


		return this._$http.post(this._mockdata, reqData, {withCredentials: true}, {'Content-Type': 'application/json;charset=UTF-8'}).then(
			(res) => {
				// this._$log.debug('data', this);
				// this.data = res;
				console.debug(res);
				console.log('success');
				//console.log('data from service: ', this.data.data.data.coveredCallScanner);
				return {};
				// console.log('res: ', res)
			},
			(err) => {
				// console.log('Config Object', err.config);
				console.log('Failed');
				// console.log('Config Headers', err.config.headers);
				//console.log('Method', err.config.method);
				console.log('Error data', err);

			}
		);


		// return this._$http({
		// 	method: 'POST',
		// 	url: this._mockdata,
		// 	data: reqData,
		// 	headers: {
		// 		// "content-type": "application/x-www-form-urlencoded",
		// 		// 'Access-Control-Request-Method': 'POST',
		// 		'Content-Type': 'application/json'
		// 		//'stk1': 'ssbd3kZzFFcwMbOe8CzIfC9IeXzvtUcvjx32/ZnKf6ahPq8wnmucfyS/vmA6zlkUGRNhbQ=='
		// 		// "Authorization": "Basic YmhhbHZlcnM6TWFyaW5lODI="
		// 		// "Access-Control-Allow-Origin": "*.etrade.com",
		// 	}
		// }).then(
		// 	(res) => {
		// 		// this._$log.debug('data', this);
		// 		// this.data = res;
		// 		console.log('data from service: ', this.data.data.data.coveredCallScanner);
		// 		return {};
		// 		// console.log('res: ', res)
		// 	},
		// 	(err) => {
		// 		// console.log('Config Object', err.config);
		// 		console.log('new test');
		// 		// console.log('Config Headers', err.config.headers);
		// 		console.log('Method', err.config.method);
		// 		console.log('Error data', err);
		//
		// 	}
		// )
	}

	submitForm(data) {
		this._$http({
			method: 'POST',
			url: this._mockdata,
			headers: {
				"content-type": "application/json",
				"access-control-allow-origin": "*.etrade.com",
				"cache-control": "no-cache",
				'Access-Control-Allow-Credentials': true
			},
			data: {
				userdata: data
			}
		}).then(
			(res) => {
				this._userData = res.data.userdata;
			},
			(err) => {
				console.log('Error: ', err);
			}
		)
	}

}