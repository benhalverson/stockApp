'use strict';
var app = angular.module('et.api.core', []);

app.constant('AJAX_TIMEOUT', function() {
	return 60000; // one minute timeout
});

app.value('getDomain', function (url, context, svr, pagecfg) {
	if (url.indexOf('http') === 0) {
		return '';
	} else if (url.indexOf('mock/') > 0) {
		if ((typeof pagecfg !== 'undefined') &&
			(typeof pagecfg.url !== 'undefined')) {
			var p = pagecfg.url;
			/*
			 The purpose of the condition is to return https://sit357w86m7.etrade.com for the mock json calls. This will enable teh calls to work in SIT
			 The ftl page will have to set  pageConfig.MOCKDATAURL to point to https://sit357w86m7.etrade.com
			 */
			if(typeof p.MOCKDATAURL !== 'undefined'){
				return p.MOCKDATAURL;
			}
			return p.AKAMAIURL;
		} else {
			return '';
		}
	}
	else {
		return svr + context;
	}
});

app.value('getSvr', function (pageconfig, url) {
	if (url.indexOf('mock/') > 0) {
		var p = pageconfig.url;
		/*
		 The purpose of the condition is to return https://sit357w86m7.etrade.com for the mock json calls. This will enable teh calls to work in SIT
		 The ftl page will have to set  pageConfig.MOCKDATAURL to point to https://sit357w86m7.etrade.com
		 */
		if(typeof p.MOCKDATAURL !== 'undefined'){
			return p.MOCKDATAURL;
		}
		return p.AKAMAIURL;
	}


	/*if(url.indexOf('challenge/') > 0 || url.indexOf('confirm') > 0) {
	 return pageconfig.url.CHALLENGEURL;
	 }*/

	if (typeof pageconfig.api.HOST !== 'undefined') {
		return pageconfig.api.HOST;
	} else {
		return '';
	}
});

app.value('getExpDomain', function (url, pageconfig) {
	if (url.indexOf('mock/') < 0)  {
		if ((typeof pageconfig.url !== 'undefined') &&
			(typeof pageconfig.url.EXPERIENCESVR !== 'undefined')) {
			return pageconfig.url.EXPERIENCESVR;
		}
	}
	return '';
});

export default app