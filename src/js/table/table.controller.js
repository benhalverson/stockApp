/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state) {
		'ngInject';

		this.appName = AppConstants.appName;
		// this.getToken = AppConstants.GETTOKEN;
		// this.coveredcalls = AppConstants.COVEREDCALLAPI;
		this.mockcoveredcalls = AppConstants.MOCKCOVEREDCALLAPI;
		this.coveredcalls = $state.current.data.coveredCalls.output;
		console.log('log message from table controller');
		// console.log('API Token Endpoint', this.getToken);
		console.log('API Covered Calls Endpoint', this.mockcoveredcalls);
		// console.log('$state data: ', $state.current.data.coveredCalls.output);
		// console.log('$state data: ', $state.current.data.coveredCalls.output[0].stock_price);
		console.log('this.coveredcalls: ', this.coveredcalls);
	}
	getData() {
		console.log('Clicked');
	}

}

export default TableCtrl;