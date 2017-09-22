
// jquery is required for bootstrap
import $ from 'jquery'

// bootstrap
import 'bootstrap'

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import uiRouterResolve from 'angular-ui-router-resolve';

import '../style/app.css';

let app = angular.module('app', [uiRouter, uiRouterResolve]);

// app.run(['apiDataFactory', (apiDataFactory) => {
//   apiDataFactory.getSelectedSlot(1).then((data)=> {
//     console.log(data);
//   });
// }]);

export default app;