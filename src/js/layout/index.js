import angular from 'angular';

let layoutModule = angular.module('app.layout', []);
console.log('index layout module');

import AppHeader from './header.component';
layoutModule.component('appHeader', AppHeader);
import TableConfig from '../layout/layout.config';
layoutModule.config(TableConfig);

import AppFooter from './footer.component';
layoutModule.component('appFooter', AppFooter);

export default layoutModule;