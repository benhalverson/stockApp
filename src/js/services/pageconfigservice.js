'use strict';
/**
 * Set up default jqXHR object to include stk1 header
 */

if (typeof pageConfig != 'undefined' && typeof pageConfig.uaa_vt != 'undefined') {
	$.ajaxSetup({stk1: pageConfig.uaa_vt});
}

var app = angular.module('et.shared.pageconfig', []);

app.value('isValid', function(name) {
	var patt = /[%${]/g;
	return !patt.test(name);
});

app.constant('AGGREGATORKEY', function() {
	var isValid = function(name) {
		var patt = /[%${]/g;
		return !patt.test(name);
	};

	if ((typeof pageConfig !== 'undefined') &&
		(typeof pageConfig.api !== 'undefined')) {
		if ((typeof pageConfig.api.KEY !== 'undefined') &&
			(isValid(pageConfig.api.KEY)))  {
			return pageConfig.api.KEY;
		}
	}
	return '043a2e9ab8d457c5d9c222f5f805ab5c' ;

});

app.value('AKAMAISVR', function() {
	var isValid = function(name) {
			var patt = /[%${]/g;
			return !patt.test(name);
		},
		port = (window.location.port === '') ? '' : ':' + window.location.port;

	var p = pageConfig.url;

	if ((typeof p.AKAMAIURL !== 'undefined') &&
		(isValid(p.AKAMAIURL)) ) {
		return p.AKAMAIURL;
	} else {
		return window.location.protocol + '//' +  window.location.hostname + port;
	}

});

app.constant('AGGREGATORSVR', function() {
	var isValid = function(name) {
		var patt = /[%${]/g;
		return !patt.test(name);
	}, defaultSvr = '/webapi/aggregator';
	var port = (window.location.port === '') ? '' : ':' + window.location.port;
	if ((typeof pageConfig !== 'undefined') &&
		(typeof pageConfig.url !== 'undefined')) {
		//use user config one first
		if ((typeof pageConfig.url.AGGREGATORSVR !== 'undefined') &&
			(isValid(pageConfig.url.AGGREGATORSVR))) {

			return pageConfig.url.AGGREGATORSVR;
		}

		// use pageconfig api host
		if (typeof pageConfig.api !== 'undefined') {
			if ((typeof pageConfig.api.HOST !== 'undefined') &&
				(isValid(pageConfig.api.HOST)))  {
				return pageConfig.api.HOST + defaultSvr;
			}
		}


		return window.location.protocol + '//' + window.location.hostname +  port + defaultSvr;
	}
});

app.factory('pageconfig',  ['$window', function($window) {
	var port = (window.location.port === '') ? '' : ':' + window.location.port,
		defaultHost = window.location.protocol + '//' + window.location.hostname + port,
		defaultPageConfig =  {
			url: { ETRADE: defaultHost, AKAMAIURL: defaultHost },
			api :  { HOST: defaultHost , KEY: 'ecaca16cf3405d7a719efd2afec115a9' }
		};

	var isValid = function(name) {
		var patt = /[%${]/g;
		return !patt.test(name);
	};

	var AKAMAISVR = function () {
		var p = pageConfig.url;

		if ((typeof p.AKAMAIURL !== 'undefined') &&
			(isValid(p.AKAMAIURL)) ) {
			return p.AKAMAIURL;
		} else {
			return defaultHost;
		}

	};

	var APIHOST = function () {
		if ((typeof pageConfig.api.HOST !== 'undefined') &&
			(isValid(pageConfig.api.HOST)) ) {
			return pageConfig.api.HOST;
		} else {
			return defaultHost;
		}
	};


	if ($window.pageConfig === undefined)  {
		$window.pageConfig = defaultPageConfig;
	}

	if (typeof $window.pageConfig.url !== 'undefined') {
		var p = $window.pageConfig.url;

		p.AKAMAIURL = AKAMAISVR();
		$window.pageConfig.api.HOST = APIHOST();
	}

	$window.pageConfig.navData = ($window.etBellaNavData == undefined) ?
		null: $window.etBellaNavData;

	return  $window.pageConfig;
}]);

export default app;