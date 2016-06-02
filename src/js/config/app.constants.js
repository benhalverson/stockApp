'use strict';
const AppConstants = {
	// GETTOKEN: 'https://id.livevol.com:443/connect/token',
	// api: 'http://dev.etrade.api.livevol.com/v1/market/scans/options/covered-calls',
	appName: 'CoveredCallScanner POC',
	//api: 'https://sit369w86m7.etrade.com/webapiopt/optionAnalytics/ot/coveredCallScanner.json'
	//api: 'https://sit369w86m7.etrade.com/webapiopt/optionAnalytics/ot/test.json'
	// api: 'http://lxdm898m7.etrade.com:4000/build/data/CoveredCallScanner.json'
	//api: 'http://lxdm898m7.etrade.com:4000/build/CoveredCallScanner.json'
	// api: 'http://localhost:4000/data/CoveredCallScanner.json'
	//api:'https://us.sit.etrade.com/webapiusr/alerts/alertinbox/ACCOUNT.json'
	//api: 'https://dit65w220m7.etrade.com/webapiusr/alerts/alertinbox/ACCOUNT.json'
	api: 'http://localhost:3000/api/coveredcall'
};

export default AppConstants;