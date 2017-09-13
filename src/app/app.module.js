
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

app.config( ($stateProvider, $urlServiceProvider) => {
    $urlServiceProvider.rules.otherwise({ state: 'home' });
    
    $stateProvider.state('home', {
      url: '/home',
      component: 'appParkingSections'
    });
      
    $stateProvider.state('signin', {
      url: '/signin',
      component: 'appSignin'
    });

    $stateProvider.state('signup', {
      url: '/signup',
      component: 'appSignup'
    });
  
  });

export default app;