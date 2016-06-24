import './apierrtable';
import './apicore';
import './pageconfigservice';

var Services=angular.module('et.shared.neoServices',['et.api.errtable', 'et.shared.pageconfig', 'et.api.core']);

Services.value('NEODOMAIN', {
	sit: 'https://us.sit.etrade.com',
	//sit: 'https://lxdm114m7.etrade.com:8843/app',
	local: ''
});

Services.factory('redirectUtil', ['$window', '$location', 'pageconfig',  function($window, $location, pageconfig) {

	var redirectObj = {
		redirect : function() {
			var host = function() {
				return pageconfig.url.ETRADE + '/e/t/user/login';
			};
			var getTarget = function () {
				var full = '',
					url= $location.absUrl();

				full = $location.protocol() + '://' + $location.host() + (($location.port()!== '') ? ':' + $location.port() : '');
				return ( url.split(full)[1]);
			};
			if (($window.location.href.indexOf('debug') < 0) &&
				($window.location.href.indexOf('.etrade.com') > 0)) {
				var _target = getTarget();
				if (_target == undefined) {
					$window.location.href = host();
				} else {
					$window.location.href= host() +  '?TARGET=' + getTarget();
				}
			}
		},

		needToRedirect:  function (code) {
			if (code === 302) {
				return true;
			} else {
				return false;
			}
		}


	}
	return  redirectObj;

}]);

Services.factory('et.api.spy', ['$rootScope', '$q', 'et.api.errtable', '$window', '$location','pageconfig', 'AJAX_TIMEOUT',  'redirectUtil', function ($rootScope, $q, errtable, $window, $location, pageconfig, AJAX_TIMEOUT, redirectUtil) {

	return {
		'request' : function(config) {
			config.timeout= AJAX_TIMEOUT();
			return config;
		},

		'requestError' : function(rejection) {
			return $q.reject(rejection);
		},

		'response': function(response) {
			/* temporary comment out redirect
			 if (response.status === 207) {
			 var apiresponse = response.data.ApiAggregatorResponse.Api;
			 angular.forEach(apiresponse, function(item) {
			 if (redirectUtil.needToRedirect(item.responseCode)) {
			 redirectUtil.redirect();
			 }
			 });
			 }
			 */


			// note the server does not respond when making an ajax in the same url espcially query an html from ng-include
			var rdata = response.data || '';

			if (( typeof(rdata)==='string' && rdata.indexOf('DOCTYPE') > -1 &&  rdata.indexOf('Log On') > -1) || (rdata === null)){
				redirectUtil.redirect();
			}

			return response;
		},

		'responseError': function(rejection) {

			var errCode = rejection.status,
				errMsg;

			if (errCode === 401) {
				redirectUtil.redirect();
			}

			return $q.reject(rejection);
		}

	};

}]);


Services.config(['$httpProvider',  function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.interceptors.push('et.api.spy');

}]);

Services.factory('et-session-manager', ['$rootScope', '$q','$window', function ($rootScope, $q, $window) {
	return {
		'request' : function(config) {
			if(config && config.data){
				var neoId,urlSplitArray,neoStateId,neoState;
				urlSplitArray=config.url.split(/[//]/);
				neoId=urlSplitArray[3];
				if(neoId && $window.sessionStorage[neoId]){
					neoStateId=$window.sessionStorage.getItem(neoId);
					config.data['neoId']=neoId;
					config.data[neoId+'_neoState']=neoStateId;
				}else{
					config.data['neoId']=neoId;
				}
			}
			return config;
		},

		'response': function(response) {

			if(response && response.data && response.data.data){
				var responseData=response.data.data;
				if(responseData.neoId && responseData[responseData.neoId+'_neoState']){
					if(responseData[responseData.neoId+'_neoState']!='DELETE'){
						//	$window.sessionStorage[responseData.neoId]=responseData[responseData.neoId+'_neoState'];
						$window.sessionStorage.setItem(responseData.neoId,responseData[responseData.neoId+'_neoState']);
					}else{
						$window.sessionStorage.removeItem(responseData.neoId);
					}
				}
			}
			return response;
		},
		'requestError': function(rejection) {
			//	  alert("Request Error--"+rejection);
		},
		'responseError': function(rejection) {
			//	   alert("Response Error--"+rejection);
		}
	};

}]);

Services.factory('et.neo.global', ['$http', '$location', 'NEODOMAIN', 'pageconfig', 'getDomain', function ($http, $location, NEODOMAIN, pageconfig, getDomain) {
	var domain = NEODOMAIN.sit,
		number = 0,
		headers = {},
		ie8 = ((navigator.appName.indexOf('Microsoft') >=0) && (navigator.appVersion.indexOf('4.0') === 0)),
		options = { 'get': {get: {withCredentials: true}},
			'post': {post: {method: 'POST', withCredentials: true}}
		},
		context = '/app',
		svr = NEODOMAIN.sit;

	if ((typeof pageconfig.api !== 'undefined') &&
		(typeof pageconfig.api.HOST !== 'undefined')) {
		svr= pageconfig.api.HOST;
	}

	return {
		http:  {
			'get':  function(url) {
				domain = getDomain(url, context, svr, pageconfig);
				if (ie8) {
					return $http({method: 'GET', url: domain + url,  headers: headers  });
				} else {
					return $http({method: 'GET', url: domain + url, withCredentials: true, headers: headers  });
				}
			},
			'post': function(url, data) {
				domain = getDomain(url, context, svr, pageconfig);
				if (ie8) {
					return $http({method: 'POST', url: domain + url, data: data, headers: headers });
				} else {
					return $http({method: 'POST', url: domain + url, data: data, withCredentials: true, headers: headers });
				}
			},
			'http': function(obj) {
				domain = getDomain(obj.url, context ,svr, pageconfig);
				obj.url = domain + obj.url;
				return $http(obj);
			}

		}
		//,
		//
		// resource: {
		// 	'get': function(url, param) {
		// 		domain = getDomain(url, context ,svr, pageconfig);
		// 		return ((typeof param  !== 'undefined') ?
		// 			$resource(domain + url, param, options.get) :
		// 			$resource(domain + url, '', options.get) );
		// 	},
		// 	'post': function(url, param, data) {
		// 		domain = getDomain(url, context, svr, pageconfig);
		// 		return ((typeof param  !== 'undefined') ?
		// 			$resource(domain + url, param, options.post) :
		// 			$resource(domain + url, '', options.post));
		// 	},
		// 	'resource': function() {
		// 		domain = getDomain(arguments[0], context, srvr, pageconfig);
		// 		arguments[0] = domain + arguments[0];
		// 		return $resource.apply(this, arguments);
		// 	}
		// }
	};


}]);


Services.factory('neoresource', [ '$http', '$location', 'NEODOMAIN',  'pageconfig', 'AGGREGATORSVR', 'AGGREGATORKEY', 'getSvr', 'getExpDomain', function ( $http,  $location, NEODOMAIN, pageconfig, AGGREGATORSVR, AGGREGATORKEY, getSvr) {
	var domain = NEODOMAIN.sit,
		number = 0,
		svr = '',
		headers =  {},
		ckey =  AGGREGATORKEY(),
		aggr_headers = { 'ConsumerKey':  ckey },
		ie8 = ((navigator.appName.indexOf('Microsoft') >=0) && (navigator.appVersion.indexOf('4.0') === 0)),
		options = { 'get': {get: {withCredentials: true}},
			'post': {post: {method: 'POST', withCredentials: true}}
		},
		AGGREGATORURL = AGGREGATORSVR();
	//AGGREGATORURL = 'https://dit293w104m7.etrade.com/webapi/aggregator';
	//AGGREGATORURL = 'https://us.dit.etrade.com/webapi/aggregator';

	if (typeof pageconfig.uaa_vt !== 'undefined') {
		angular.extend( aggr_headers, {'stk1': pageconfig.uaa_vt });
		angular.extend( headers, {'stk1': pageconfig.uaa_vt });
	}

	return {
		'aggregatorpost': function(data,queryParam) {
			var aggregatorServerUrl = '';
			if(queryParam) {
				aggregatorServerUrl = AGGREGATORURL + '?name=' + queryParam;
			}  else {
				aggregatorServerUrl = AGGREGATORURL;
			}
			if (ie8) {
				return $http({method: 'POST', url: aggregatorServerUrl, data: data, headers: aggr_headers });

			} else {
				return $http({method: 'POST', url: aggregatorServerUrl, data: data, withCredentials: true, headers: aggr_headers });
			}
		},
		'webapiget': function(url, params) {
			svr = getSvr(pageconfig, url);
			var paramObj = {}, defaultParamObj = {};
			if (ie8) {
				defaultParamObj = { method: 'GET', url: svr + url, headers: headers };
				//return $http({method: 'GET', url: svr +  url, headers: headers });
			} else {
				defaultParamObj = { method: 'GET', url: svr + url, withCredentials: true, headers: headers };
				//return $http({method: 'GET', url: svr +  url, withCredentials: true, headers: headers });
			}
			angular.extend(paramObj, defaultParamObj, params);
			return $http(paramObj);
		},
		'webapipost': function(url, data) {
			svr = getSvr(pageconfig, url);
			if (ie8) {
				return $http({method: 'POST', url: svr +  url, data: data, headers: headers });
			} else {
				return $http({method: 'POST', url: svr +  url, data: data, withCredentials: true, headers: headers });
			}

		}
		//,
		// 'webapiresourceget': function(url, param) {
		// 	svr = getSvr(pageconfig, url);
		// 	return $resource(svr+ url, param, options.get) ;
		//
		// },
		// 'webapiresourcepost': function (url, param, data) {
		// 	svr = getSvr(pageconfig, url);
		// 	return $resource(svr+ url, param, options.post);
		//
		// }
	};


}]);

export default Services;