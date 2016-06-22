



let ChartDirective = function () {

	function controllerFn (d3Service) {
		'ngInject'
		console.log('d3Service: ', d3Service);
	}
	controllerFn.$inject = ['d3Service']
	return {
		scope : {} ,
		restrict : 'EA' ,
		template: 'hi!!!!!' ,
		link : function (scope, el, attrs) {
			console.log('chart DIrective!!!!')
		},
		controller : controllerFn
	}
}
ChartDirective.$inject = ['d3Service']
export default ChartDirective;