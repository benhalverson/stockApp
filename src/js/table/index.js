/**
 * Created by bhalvers on 5/2/16.
 */
import angular from 'angular';

let tableModule = angular.module('app.table', []);

import TableConfig from './table.config';
tableModule.config(TableConfig);

import TableCtrl from './table.controller';
tableModule.controller('TableCtrl', TableCtrl);

export default tableModule;