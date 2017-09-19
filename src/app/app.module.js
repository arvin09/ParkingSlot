
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

  app.value('apiEndPoints', {
    getSections : 'https://gist.githubusercontent.com/arvin09/2d4ce5112d8086eec23461a548a19478/raw/f4f4c04ab802f3320f6b768c39fce7c73040b4f4/getSections.json',
    getSlots: 'https://gist.githubusercontent.com/arvin09/4cc350e2526ca4a48e20c67eb16458d1/raw/dac470727d8f49bb884527487a71eacd36be5909/getSlots.json'
  });


  // app.run(['apiDataFactory', (apiDataFactory) => {
  //   apiDataFactory.getSelectedSlot(1).then((data)=> {
  //     console.log(data);
  //   });
  // }]);

export default app;