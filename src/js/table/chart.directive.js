let chartDirective = function () {
    function controllerFn (d3Service) {
        'ngInject'
        
        console.log(d3Service)
    }

    controllerFn.$inject = ['d3Service']
    
    
    return {
        scope : {},
        restrict : 'EA',
        controller : controllerFn,
        templateUrl : 'table/chart.directive.html'
    }
}


chartDirective.$inject = ['d3Service']

export default chartDirective;