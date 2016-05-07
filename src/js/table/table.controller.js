/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';
		this.api = AppConstants.api;
		this.appName = AppConstants.appName;
		this._CoveredCall = CoveredCall;


		console.log ('log message from table controller');

		console.log ('API Covered Calls Endpoint', this.api);

		console.log('Table $ctrl this: ', this);



	}

	getData ()
	{
		console.log('clicked');
		// this._CoveredCall.getJSON().then(
		// 	(res) => {
		// 		console.log('response: ', res)
		// 	},
		// 	(err) => {
		// 		console.log('Error: ', err)
		// 	}
		// )
		this._CoveredCall.getJSON();
	}

}
export default TableCtrl;