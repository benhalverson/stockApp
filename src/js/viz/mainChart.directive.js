// import CoveredCall from '../services/'

///////////////////////

//   **CLASS FORM**

////////////////////////

//  class MainChart {
//
//     constructor (D3Service) {
//         'ngInject'
//
//         this.d3 = D3Service;
//
//         this.scope = {};
//         this.restrict = 'EA';
//
//     }
//
//     controller () {
//         console.log('hello')
//     }
//
//
//    returnDirective () {
//        return {
//            scope : this.scope,
//            restrict : this.restrict,
//            controller : this.controller
//        }
//    }
//
//
// }
//
//
// MainChart.$inject = ['d3Service']
//
// var constructorFn = MainChart;
// var args  = constructorFn.$inject;
//
// var directiveFactory = (...args) => {
//        return new constructorFn(...args)

////////////////////////////////////////////
////////////////////////////////////////////

 let directiveFactory = function ( LineChart, AppConstants, CoveredCall) {
     'ngInject'

     let scope = {};
     let require = 'EA';

     let chartController  = function (LineChart , AppConstants, CoveredCall)  {

            console.log('anything')


     };

    chartController.$inject = ['LineChart', 'AppConstants', 'CoveredCall'];

     let myDirective =

        {
             scope      : scope,
             require    : require,
             controller : chartController

        };

     return myDirective;
}







 export default directiveFactory;













