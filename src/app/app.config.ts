
import ScreenerCtrl from 'app/screener/screener.controller';
import BacktesterCtrl from 'app/backtester/backtester.controller';


let AppConfig = function ( $stateProvider , $urlRouterProvider ) {
    $stateProvider
        .state( 'optionsIncomeTool' , {
            url          : '/livevol' ,
            controller   : 'appCtrl' ,
            templateUrl  : 'app/app.html',
            abstract     : true
        })
        .state('optionsIncomeTool.backtester' , {
            url : '/backtester/{type}',
            controller : BacktesterCtrl,
            templateUrl: 'backtester.html'

        })
        .state('optionsIncomeTool.screener' , {
            url : '/screener/{type}',
            controller : ScreenerCtrl,
            templateUrl: 'screener.html'
        });
    $urlRouterProvider.otherwise('/livevol/backtester/call');
};

export default AppConfig;