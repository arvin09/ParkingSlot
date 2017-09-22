import appModule from './app.module';

appModule.config( ($stateProvider, $urlServiceProvider) => {
    $urlServiceProvider.rules.otherwise({ state: 'blocks' });
    
    $stateProvider.state('blocks', {
      url: '/blocks',
      component: 'appParkingBlocks'
    });

    $stateProvider.state('slots', {
        url: '/blocks/{id}',
        component: 'appParkingSlots'
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