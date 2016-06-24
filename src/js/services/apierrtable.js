'use strict';
var app = angular.module('et.api.errtable', []);

app.factory('et.api.errtable', function() {

	var defaultDescription = 'We are experiencing difficulties, please try later. ',
		_warnTable = {

			200: { statusText: 'OK', description: ''},
			201: { statusText: 'No data found', description: 'No data found'},
			202: { statusText: 'Accepted', description: 'Accepted'},
			203: { statusText: 'Non-Authoritative Information', description: 'Non-Authoritative Information'},
			204: { statusText: 'No Content', description: 'No Content'},
			205: { statusText: 'Reset Content', description: 'Reset Content'},
			206: { statusText: 'Partial Content', description: 'Partial Content'},
			207: { statusText: 'Multi-Status', description: 'Multi-Status'},
			208: { statusText: 'Already Reported', description: 'Already Reported'},
			226: { statusText: 'IM Used', description: 'IM Used'}

		}, _errTable = {
			0: { statusText: 'Unauthorized', description: ''},
			302:  { statusText: 'Move Temporarily', description: defaultDescription },
			400:  { statusText: 'Bad Request', description: defaultDescription },
			401:  { statusText: 'Unauthorized', description: defaultDescription },
			402:  { statusText: 'Payment Required', description: defaultDescription },
			403:  { statusText: 'Forbidden', description: defaultDescription },
			404:  { statusText: 'Resource Not Found', description: defaultDescription },
			405:  { statusText: 'Unsupported Format / Method Not Allowed', description: defaultDescription },
			408:  { statusText: 'Request Timeout', description: defaultDescription },
			409:  { statusText: 'Conflict', description: defaultDescription},
			410:  { statusText: 'Gone', description: defaultDescription },
			411:  { statusText: 'Length Required', description: defaultDescription },
			412:  { statusText: 'Precondition Failed', description: defaultDescription },
			413:  { statusText: 'Payload Too Large', description: defaultDescription },
			414:  { statusText: 'URI Too Long', description: defaultDescription },
			415:  { statusText:  'Unsupported Media Type', description: defaultDescription },
			416:  { statusText: 'Range Not Satisfiable', description: defaultDescription },
			417:  { statusText: 'Expectation Failed', description: defaultDescription },
			422:  { statusText: 'Unprocessable Entity', description: defaultDescription },
			423:  { statusText: 'Locked', description: defaultDescription },
			424:  { statusText: 'Failed Dependency', description: defaultDescription },
			426:  { statusText: 'Upgrade Required', description: defaultDescription },
			428:  { statusText: 'Precondition Required', description: defaultDescription },
			429:  { statusText: 'Too Many Requests', description: defaultDescription },
			431:  { statusText: 'Request Header Fields Too Large', description: defaultDescription },
			500:  { statusText: 'Internal Server Error', description: defaultDescription },
			502:  { statusText: 'Bad Gateway', description: defaultDescription },
			503:  { statusText: 'Service Unavailable', description: defaultDescription },
			504:  { statusText:  'Gateway Timeout', description: defaultDescription },
			505:  { statusText: 'HTTP Version Not Supported', description: defaultDescription },
			506:  { statusText: 'Variant Also Negotiates', description: defaultDescription },
			507:  { statusText: 'Insufficient Storage', description: defaultDescription },
			508:  { statusText: 'Loop Detected', description: defaultDescription },
			510:  { statusText: 'Not Extended', description: defaultDescription },
			511:  { statusText: 'Network Authentication Required', description: defaultDescription }

		}, emptyMsg = {
			statusText: '', description: ''
		};


	return {

		getWarning:   function(code) {
			if (typeof _warnTable[code] === 'undefined') {
				return emptyMsg;
			} else {
				return _warnTable[code];
			}
		},

		getError:  function(code) {
			if (typeof _errTable[code]  === 'undefined') {
				return emptyMsg;
			} else {
				return _errTable[code];
			}
		}


	};


});

export default app 