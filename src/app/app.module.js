
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

  app.value('apiEndPoint', 'https://gist.githubusercontent.com/arvin09/5168c9e5bf1636eed76d7c1efc2a9706/raw/65bb756341d329a80ed62c3badf2bf24febfefe2/parkingService.json');

  app.run(['apiDataFactory', '$rootScope', (apiDataFactory, $rootScope) => {
    apiDataFactory.fetchApiData().then((data)=> {
      $rootScope.appData = data;
    });
  }]);

export default app;