// <<<<<<< HEAD
// /**
//  * Created by bhalvers on 5/4/16.
//  */
// import angular from 'angular';
//
// let searchModule = angular.module('app.search', []);
//
// import SearchConfig from './search.config';
// searchModule.config(SearchConfig);
//
// import SearchCtrl from './search.controller';
// searchModule.controller('SearchCtrl', SearchCtrl);
// console.log('Search Ctrl imports');
//
// export default searchModul
// =======
/**
 * Created by bhalvers on 5/4/16.
 */
import angular from 'angular';

let searchModule = angular.module('app.search', []);

import SearchConfig from './search.config';
searchModule.config(SearchConfig);

import SearchCtrl from './search.controller';
searchModule.controller('SearchCtrl', SearchCtrl);
console.log('Search Ctrl imports helloooooooo');

export default searchModule;
// >>>>>>> 55a98b12db20c51f24e8724c232b97e4a4c50674
