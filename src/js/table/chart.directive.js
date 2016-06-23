
import DataService from '../services/coveredcall.service';


let ChartDirective = function (d3Service, ChartService, $timeout) {

	function controllerFn (d3Service) {
		'ngInject';
	}

	function LinkFn (scope, el, attrs, controller) {

		var d3 = d3Service;

		scope.parseArray = function (arr) {
			arr =  arr.replace('[', '')
				.replace(']','')
				.split(',')
				.map(function (num){return +num} )
			return arr
		}

		scope.data = scope.parseArray(scope.data);
		scope.newData;
		scope.chartElement = d3.select(el[0]).append('svg')
					.attr('width', 700)
					.attr('height', 700);


		ChartService.render(scope.chartElement , scope.data);


		scope.submitData = function () {

				if( typeof +scope.newData == 'number' && +scope.newData >= 0 ) {

						if(typeof scope.data == "string"){
							scope.data = scope.parseArray(scope.data)
						}
						scope.newData = +scope.newData
						scope.data.push(scope.newData);

						console.log('new data entered ', scope.newData);
						console.log('dataset displayed: ', scope.data);

						ChartService.render(scope.chartElement, scope.data);
				}
		};






	}

	LinkFn.$inject = ['d3Service', 'ChartService'];
	controllerFn.$inject = ['d3Service'];
	
	return {
		scope : {data:'@'} ,
		restrict : 'EA' ,
		templateUrl: 'table/chart.directive.html' ,
		link : LinkFn,
		controller : controllerFn
	}
}
ChartDirective.$inject = ['d3Service', 'ChartService', '$timeout'];


export default ChartDirective;