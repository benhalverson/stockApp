

	
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
			.attr('width', 0)
			.attr('height', 50)
			.attr('y', function (d, i){
				return 	50 + (i * (chartParams.barHeight + chartParams.marginTop) );
			})
			.attr('x', 0)
			.attr('fill', 'blue')
			.transition()
			.duration(3000)
			.attr('width', function(d) {
				return d * chartParams.barWidthIncrement;
			});
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