
// jquery is required for bootstrap
import $ from 'jquery'

// bootstrap
import 'bootstrap'

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import '../style/app.css';

let app =  angular.module('app', [uiRouter]);

app.config(function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'about' });
    
    $stateProvider.state('about', {
      url: '/about',
      component: 'appAbout'
    });
      
    $stateProvider.state('login', {
      url: '/login',
      component: 'appLogin'
    });
  
  });

export default app;