import appModule from './app.module.js'
// is the back end is restfull will use $resource
appModule.factory('apiDataFactory', ['$http', 'apiEndPoints', '$q', ($http, apiEndPoints, $q) => {

    var apiDataFactory = {};

    apiDataFactory.fetchSections = () => {
        var defer = $q.defer();
        $http.get(apiEndPoints.getSections).then(
            (response) => {
                defer.resolve(response.data);
            }
        )
        return defer.promise;
    };

    apiDataFactory.fetchSlots = () => {
        var defer = $q.defer();
        $http.get(apiEndPoints.getSlots).then(
            (response) => {
                defer.resolve(response.data);
            }
        )
        return defer.promise;
    };

    apiDataFactory.getSelectedSlot = (blockId)=>{
        var defer = $q.defer();
        $http.get(apiEndPoints.getSlots).then(
            (response) => {
                for(var i=0; i< response.data.sections.length; i++){
                    var section = response.data.sections[i];
                    console.log("sections",section);
                    if(section.sectionId === blockId){
                        defer.resolve(section.map);
                        break;
                    }
                }
            }
        )
        return defer.promise;
    }

    return apiDataFactory;
}]);