import appModule from './app.module';

function blocksController(apiDataFactory){
    var model = this;
    model.blockData = null;
    model.$onInit = function(){
        apiDataFactory.fetchSections().then((data)=> {
            model.blockData = data;
        });
    }
}

appModule.component('appParkingBlocks', {
    template: require('./app-parking-blocks.component.html'),
    controller: ['apiDataFactory',blocksController],
    controllerAs: 'model'
});