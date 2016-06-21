/**
 * Created by bhalvers on 5/1/16.
 */
import angular from 'angular';
// import config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';
import 'angular-ui-router';
// import templates file (generated by gulp)
import './config/app.templates';
import './layout';
import './components';
import { tableModule, chartModule} from './table';
import './services';
import d3 from './table/d3.module';
import './viz';

const requires = [
	'd3',
	'ui.router',
	'templates',
	'app.layout',
	'app.charts',
	'app.components',
	'app.table',
	'app.charts',
	'app.services',
	// 'app.search'
];

window.app = angular.module('app', requires);


angular.module('app').config(appConfig);

angular.module('app').constant('AppConstants', constants);


angular.module('app').run(appRun);





angular.bootstrap(document, ['app'], {
	strictDi: true
});