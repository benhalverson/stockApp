
import DataService from '../services/coveredcall.service';


let ChartDirective = function (d3Service, ChartService) {

	function controllerFn (d3Service) {
		'ngInject'
		// console.log('d3Service: ', d3Service);
		// var d3 = d3Service;
	}

	function LinkFn (scope, el, attrs, controller) {
		var d3 = d3Service;
		var chartElement = d3.select(el[0]).append('svg')
			.attr('width', 700)
			.attr('height', 700);
		ChartService.render(chartElement);
		
		// var chartParams = {
		// 	width : 500,
		// 	height : 500,
		// 	marginTop : 20,
		// 	barHeight : 50,
		// 	barWidthIncrement : 100
		// }
		// var d3 = d3Service;
		// var chartElement = d3.select(el[0]).append('svg')
		// 	.attr('width', 700)
		// 	.attr('height', 700);
		// console.log(chartElement[0], '///', DataService.data, "Data");
		// var bars = chartElement
		// 	.selectAll('rect')
		// 	.data(DataService.data)
		// 	.enter()
		// 	.append('rect')
		// 	.transition().ease('elastic')
		// 	.attr('width', function(d, i) {
		// 		console.log('d',d);
		// 	return d * chartParams.barWidthIncrement
		// 	})
		// 	.attr('height', 50)
		// 	.attr('y', function (d, i){
		// 		return 	50 + (i * (chartParams.barHeight + chartParams.marginTop) );
		// 	})
		// 	.attr('x', 0)
		// 	.attr('fill', 'blue');
		// console.log('Show me the data: ', bars);
	}

	LinkFn.$inject = ['d3Service', 'ChartService'];
	controllerFn.$inject = ['d3Service'];
	return {
		scope : {} ,
		restrict : 'EA' ,
		template: 'hi!!!!!' ,
		link : LinkFn,
		controller : controllerFn
	}
}
ChartDirective.$inject = ['d3Service', 'ChartService'];


export default ChartDirective;