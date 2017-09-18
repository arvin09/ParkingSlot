import appModule from './app.module.js'
// is the back end is restfull will use $resource
appModule.factory('apiDataFactory', ['$http', 'apiEndPoint', '$q', ($http, apiEndPoint, $q) => {

    var apiDataFactory = {};

    apiDataFactory.fetchApiData = () => {
        var defer = $q.defer();
        $http.get(apiEndPoint).then(
            (response) => {
                defer.resolve(response.data);
            }
        )
        return defer.promise;
    };

    return apiDataFactory;
}]);