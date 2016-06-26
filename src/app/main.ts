/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>


import 'angular';
import 'uiRouter';
import {UpgradeAdapter} from '@angular/upgrade';



angular.module('myApp' , ['ui.router'])
    .controller('appCtrl' , function ($scope , $element , $state) {
        console.log($state);
    })
    .config(function ($stateProvider , $urlRouterProvider) {
        $stateProvider
            .state('home' , {
                url : '/',
                controller : 'appCtrl',
                template: '<div></div>'
            });

        $urlRouterProvider.otherwise('/');
    });
var adapter = new UpgradeAdapter();

adapter.bootstrap(document.body , ['myApp' , 'ui.router']);

