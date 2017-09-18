import appModule from './app.module';
import apiDataFactory from './api-data.factory';
import appSignup from './app-signup.component';
import appSignin from './app-signin.component';
import appParkingSections from './app-parking-sections.component';

appModule.component('appRoot', {
  template: require('./app-root.component.html')
});