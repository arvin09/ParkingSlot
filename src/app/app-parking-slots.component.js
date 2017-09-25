import appModule from './app.module';

function slotsController($stateParams, apiDataFactory){
    var model = this;
    model.id = $stateParams.id;

    model.$onInit = ()=> {
        apiDataFactory.getSelectedSlot($stateParams.id).then((data)=> {
            console.log(data);
            model.slotData = data;
            model.slotArray = data.slots.slice(0);

            model.times = (time)=> {
                return Array(time)
            }; 
            
            model.getSlots = (slotArray)=> {
                if(slotArray){
                    return slotArray.splice(0, model.slotData.cols)
                }
            }
        });
    };
}

appModule.component('appParkingSlots', {
    template: require('./app-parking-slots.component.html'),
    controller: ['$stateParams','apiDataFactory', slotsController],
    controllerAs: 'model'
});