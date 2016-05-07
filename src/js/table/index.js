/**
 * Created by bhalvers on 5/2/16.
 */
import angular from 'angular';

let tableModule = angular.module('app.table', []);
let searchModule = angular.module('app.search', []);

import SearchCtrl from '../search/search.controller';
searchModule.controller('SearchCtrl', SearchCtrl);

import SearchConfig from '../search/search.config';
searchModule.config(SearchConfig);

import TableConfig from './table.config';
tableModule.config(TableConfig);

import TableCtrl from './table.controller';
tableModule.controller('TableCtrl', TableCtrl);

import CoveredCall from '../services/coveredcall.service';
tableModule.service('CoveredCall', CoveredCall);
console.log('Table Ctrl imports');

export default tableModule;