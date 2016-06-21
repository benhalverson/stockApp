import angular from 'angular';
import D3Service from './d3.service'

let d3 = angular.module('d3' , []).factory('D3Service', D3Service.d3Lib);





export default d3