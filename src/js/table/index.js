/**
 * Created by bhalvers on 5/2/16.
 */
import angular from 'angular';

let tableModule = angular.module('app.table', []);
// let searchModule = angular.module('app.search', []);
//
// import SearchCtrl from '../search/search.controller';
// searchModule.controller('SearchCtrl', SearchCtrl);
//
// import SearchConfig from '../search/search.config';
// searchModule.config(SearchConfig);

import TableConfig from './table.config';
tableModule.config(TableConfig);

import TableCtrl from './table.controller';
tableModule.controller('TableCtrl', TableCtrl);

import CoveredCall from '../services/coveredcall.service';
tableModule.service('CoveredCall', CoveredCall);




  import chartDirective from './chart.directive';
// let chartModule = angular.module('app.charts' , [])
//  chartModule.directive('mainChart', chartDirective)

import d3 from './d3.module';
// console.log(d3Service)
let chartModule = angular.module('app.charts' , ['d3'])
                         .directive('mainChart' , chartDirective)
                         // .directive('mainChart' , function (d3Service) {
                         //     'ngInject'
                         //   return {
                         //     scope : {},
                         //     restrict : 'EA',
                         //     link : function (scope, el) {
                         //      console.log(d3Service)
                         //     }
                         //   }
                         // } )

export { tableModule , chartModule};
