import appModule from './app.module';

appModule.component('appParkingSections', {
    template: require('./app-parking-sections.component.html'),
    controller: ['$rootScope', '$timeout', ($rootScope, $timeout) => {
        $timeout(function(){
            console.log($rootScope.appData);
        },500)
    }]
});