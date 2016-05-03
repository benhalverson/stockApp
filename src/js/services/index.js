import angular from 'angular';

let servicesModule = angular.module('app.services', []);


// Services
import CoveredCall from './coveredcall.service';
console.log('log message from service file');
servicesModule.service('CoveredCall', CoveredCall);
export default servicesModule;