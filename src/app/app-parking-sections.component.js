import appModule from './app.module';

function sectionController(apiDataFactory){
    var model = this;
    model.sectionData = null;
    model.$onInit = function(){
        apiDataFactory.fetchSections().then((data)=> {
            model.sectionData = data;
        });
    }
}

appModule.component('appParkingSections', {
    template: require('./app-parking-sections.component.html'),
    controller: ['apiDataFactory',sectionController],
    controllerAs: 'model'
});