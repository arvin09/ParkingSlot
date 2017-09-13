import appModule from './app.module';
import appParkingSections from './app-parking-sections.component';
import appSignup from './app-signup.component';
import appSignin from './app-signin.component';

appModule.component('appRoot', {
  template: require('./app-root.component.html')
});