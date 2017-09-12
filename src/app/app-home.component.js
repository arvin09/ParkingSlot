import appModule from './app.module';

appModule.component('appHome', {
  template: require('./app-home.component.html')
});


appModule.component('appAbout', {
  template: '<div>About</div>'
});


appModule.component('appLogin', {
  template: '<div>Login</div>'
});