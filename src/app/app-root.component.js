import appModule from './app.module';
import appValues from './app.values';
import appRouter from './app.router';
import apiDataFactory from './api-data.factory';
import appSignup from './app-signup.component';
import appSignin from './app-signin.component';
import appSolt from './app-slot.component';
import appParkingSlots from './app-parking-slots.component';
import appParkingBlocks from './app-parking-blocks.component';

appModule.component('appRoot', {
  template: require('./app-root.component.html')
});