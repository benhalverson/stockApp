///<reference path="../../typings/index.d.ts"/>


import angular from  'angular';
import 'uiRouter';
import {UpgradeAdapter} from '@angular/upgrade';



angular.module( 'myApp' , ['ui.router'] )
    .controller( 'appCtrl' , function ( $scope , $state) {
                $scope.tabs = [
                    {name: "Covered Call Backtester",  url : 'call' , active: false},
                    {name: "Secured Put Backtester",  url : 'put' , active: false},
                    {name: "Options Screener" ,  url : 'call', active: true}
                ];
                $scope.go = function (tab) {
                    $scope.tabs.forEach( function (navTab) {
                        if  ( tab.name === navTab.name ) {
                            navTab.active = true;
                        } else {
                            navTab.active = false;
                        }
                    });
                    $state.go('optionsIncomeTool.backtester' , { type : tab.url});
                };
        })
    .controller('backtester' , function ($state) {
        console.log($state.params);
    })
    .controller('screener' , function ($scope){
            console.log($scope.tabs);

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
                url : '/screener/{type}',
                controller : 'screener',
                templateUrl: 'screener.html'
            });
        $urlRouterProvider.otherwise('/livevol/screener/call');
    });
var adapter = new UpgradeAdapter();

adapter.bootstrap(document.body , ['myApp' , 'ui.router']);

