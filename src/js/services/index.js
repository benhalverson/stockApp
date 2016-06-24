import angular from 'angular';

let servicesModule = angular.module('app.services', ['et.shared.neoServices']);
// let neoModule = angular.module('app.neoservice', []);

// Services
import CoveredCall from './coveredcall.service';
// import NeoResource from './neoservices';
console.log('log message from service file');
servicesModule.service('CoveredCall', CoveredCall);
// neoModule.service('neoservice', NeoResource);
export default servicesModule;