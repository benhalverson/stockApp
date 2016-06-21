import angular from 'angular';
import directiveFactory from './mainChart.directive'
import LineChart from './LineChart.service'

import '../d3';

var charts = angular.module('app.charts', ['d3'])
                    .directive('mainChart' , directiveFactory)
                    .service('LineChart' , LineChart)



export default charts;