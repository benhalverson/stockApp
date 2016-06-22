import angular from 'angular';

let servicesModule = angular.module('app.services', []);
// let neoModule = angular.module('app.neoservice', []);

// Services
import DataService from './coveredcall.service';
// import NeoResource from './neoservices';
console.log('log message from service file');
servicesModule.service('DataService', DataService);
// neoModule.service('neoservice', NeoResource);
export default servicesModule;