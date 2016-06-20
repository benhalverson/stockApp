

export default class LineChart {
    constructor (AppConstants, D3Service, CoveredCall) {
        'ngInject'

        this.AppConstants = AppConstants;
        this.CoveredCall = CoveredCall;
        this.D3Service = D3Service
        //grabs our component
        console.log(this.d3, '///')
        this.$element = 'antying'
        this.d3 = window.d3;

    }



    renderChart() {

        console.log('rendering' , this.D3Service)
    }
    
    
}