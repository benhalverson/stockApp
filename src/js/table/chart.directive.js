
import DataService from '../services/coveredcall.service';


let ChartDirective = function (d3Service, ChartService) {

	function controllerFn (d3Service) {
		'ngInject';
	}

	function LinkFn (scope, el, attrs, controller) {
			var d3 = d3Service;
			var chartElement = d3.select(el[0]).append('svg')
				.attr('width', 700)
				.attr('height', 700);
			
		scope.$watch(function() {

			return scope.data
		}, function(newValue, oldValue){
			if (newValue.length){
				console.log('old', newValue, oldValue);

				ChartService.render(chartElement , newValue.replace('[', '').replace(']', '').split(','));

			}


		});


	}

	LinkFn.$inject = ['d3Service', 'ChartService'];
	controllerFn.$inject = ['d3Service'];
	return {
		scope : {data:'@'} ,
		restrict : 'EA' ,
		template: 'hi!!!!!' ,
		link : LinkFn,
		controller : controllerFn
	}
}
ChartDirective.$inject = ['d3Service', 'ChartService'];


export default ChartDirective;