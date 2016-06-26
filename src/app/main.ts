///<reference path="../../typings/index.d.ts"/>


import angular from  'angular';
import 'uiRouter';
import {UpgradeAdapter} from '@angular/upgrade';



angular.module( 'myApp' , ['ui.router'] )
    .controller( 'appCtrl' , function ( $scope , $element , $state ) {
        $scope.tabs = [
            {name: "Covered Call Backtester"},
            {name: "Secured Put Backtester"},
            {name: "Options Screener"}
        ];
    })
    .controller('backtester' , function ($state) {
        console.log($state.params);
    })
    .controller('screener' , function (){
        console.log('screener!!!!' );
    })
    .config( function ( $stateProvider , $urlRouterProvider ) {
        $stateProvider
            .state( 'optionsIncomeTool' , {
                url          : '/livevol' ,
                controller   : 'appCtrl' ,
                templateUrl  : 'app.html',
                abstract     : true
            })
            .state('optionsIncomeTool.backtester' , {
                url : '/backtester/:type',
                controller : 'backtester',
                templateUrl: 'backtester.html'
            })
            .state('optionsIncomeTool.screener' , {
                url : '/screener/:type',
                controller : 'screener',
                templateUrl: 'screener.html'
            });
        $urlRouterProvider.otherwise('/livevol/screener/call');
    });
var adapter = new UpgradeAdapter();

adapter.bootstrap(document.body , ['myApp' , 'ui.router']);

