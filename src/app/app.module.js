
// jquery is required for bootstrap
import $ from 'jquery'

// bootstrap
import 'bootstrap'

// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';

import uirouter from '@uirouter/core';

import '../style/app.css';

let app =  angular.module('app', [uirouter]);

export default app;