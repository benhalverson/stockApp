/**
 * Created by bhalvers on 5/2/16.
 */


import data from './data';
import AppConstants from '../config/app.constants';
export default class CoveredCall {
	constructor(AppConstants, $http, $state, $q) {
		'ngInject';
        this.AppConstants = AppConstants
		this._$http = $http;
		// Object to store coveredcalls

	}
	doAThing () {console.log('hi')}
	//Get data from api

	getJSON() {

		return data



		// return this._$http({
		// 	method: 'POST',
		// 	url: this._mockdata,
		// 	data: formData,
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then(
		// 	(res) => {
		// 		this._data = res;
		// 	},
		// 	(err) => {
		// 		console.log('Error data', err);
		// 	}
		// )
	}
}

