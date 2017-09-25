import appModule from './app.module'

function slotController(){
    var model = this;
    
    model.toggleParking = ()=> {
        model.parked = !model.parked;
    }
}

appModule.component('appSolt', {
    bindings: {
        parked: '=',
        name: '<'
    },
    template: require('./app-slot.component.html'),
    controller: [slotController],
    controllerAs: 'model'
});