///<reference path="../../typings/index.d.ts"/>


import angular from  'angular';
import 'uiRouter';
import {UpgradeAdapter} from '@angular/upgrade';


import AppCtrl from 'app/app.controller';
import AppConfig from 'app/app.config';


import ScreenerCtrl from 'app/screener/screener.controller';
import BacktesterCtrl from 'app/backtester/backtester.controller';


angular.module( 'myApp' , ['ui.router'] )
    .controller( 'appCtrl' , AppCtrl )
    .controller('BacktestCtrl' , BacktesterCtrl)
    .controller('ScreenerCtrl' , ScreenerCtrl )
    .config( AppConfig );
var adapter = new UpgradeAdapter();

adapter.bootstrap(document.body , ['myApp' , 'ui.router']);

