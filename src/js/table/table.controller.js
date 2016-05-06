/**
 * Created by bhalvers on 5/2/16.
 */
'use strict';
class TableCtrl {
	constructor(AppConstants, $state, CoveredCall) {
		'ngInject';

		this.appName = AppConstants.appName;
		// this.getToken = AppConstants.GETTOKEN;
		// this.coveredcalls = AppConstants.COVEREDCALLAPI;
		this.mockcoveredcalls = AppConstants.MOCKCOVEREDCALLAPI;
		this.coveredcalls = $state.current.data.coveredCalls.output;
		this.inputs = $state.current.data.coveredCalls.inputs;
		console.log('log message from table controller');
		// console.log('API Token Endpoint', this.getToken);
		console.log('API Covered Calls Endpoint', this.mockcoveredcalls);
		console.log('this.coveredcalls: ', this.coveredcalls);
		console.log('input defaults for covered calls', this.inputs);
	}
	getData() {
		return coveredCalls.geToken().then(
			(token) => token,
			(err) => err
		)
	}

}

export default TableCtrl;