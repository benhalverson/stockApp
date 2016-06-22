

	
export default function ChartService(d3Service, DataService) {
	'ngInject';
	this.render = function(el) {
		var chartParams = {
			width : 500,
			height : 500,
			marginTop : 20,
			barHeight : 50,
			barWidthIncrement : 100
		}
		var d3 = d3Service;

		var bars = el
			.selectAll('rect')
			.data(DataService.data)
			.enter()
			.append('rect')
			.transition().ease('elastic')
			.attr('width', function(d, i) {
				console.log('d',d);
				return d * chartParams.barWidthIncrement
			})
			.attr('height', 50)
			.attr('y', function (d, i){
				return 	50 + (i * (chartParams.barHeight + chartParams.marginTop) );
			})
			.attr('x', 0)
			.attr('fill', 'blue');
		console.log('Show me the data: ', bars);
	}
	}

// export default class ChartService {
// 	constructor(d3Service, DataService ) {
// 		'ngInject';
//		
// 	}
// 	getData() {
//		
// 	}
//	
// }