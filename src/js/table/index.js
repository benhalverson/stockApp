/**
 * Created by bhalvers on 5/2/16.
 */
import angular from 'angular';

let tableModule = angular.module('app.table', []);


import TableConfig from './table.config';
tableModule.config(TableConfig);

import TableCtrl from './table.controller';
tableModule.controller('TableCtrl', TableCtrl);

import CoveredCall from '../services/coveredcall.service';
tableModule.service('CoveredCall', CoveredCall);
console.log('Table Ctrl imports');

import ChartDirective from './chart.directive'

import ChartService from '../services/chart.service';
let chartModule = angular.module('app.charts' , ['d3', 'app.services'])
							.directive('mainChart' , ChartDirective)
							.service('ChartService', ChartService);
export default {tableModule , chartModule};