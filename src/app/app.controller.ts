let  AppCtrl = function ( $scope , $state) {
    'ngInject';
    $scope.tabs = [
        {name: "Covered Call Backtester",  type : 'call' , active: true },
        {name: "Secured Put Backtester",  type : 'put' , active: false},
        {name: "Options Screener" ,  type : 'call', active: false}
    ];
    $scope.go = function (tab) {

        $scope.tabs.forEach( function ( navTab ) {
            if  ( tab.name === navTab.name ) {
                navTab.active = true;
            } else {
                navTab.active = false;
            }
        });

        if ( tab.name.indexOf('Screener') > -1 ) {
                $state.go('optionsIncomeTool.screener', {type : tab.type || "call"});
        } else {
            $state.go('optionsIncomeTool.backtester' , { type : tab.type} );

        }

    };



};
export default AppCtrl;