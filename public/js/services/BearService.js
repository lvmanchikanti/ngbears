//building a data service: .factory, .service, .config, .provider
//immediately invoking functional expression
(function(){
  angular.module('ngbears')
          .factory('BearService', BearService);

  BearService.$inject = ['$http'];

  function BearService($http){
    //object o
    var o = {
        create: createBear, //function
        readAll: getAll, //function
        update: updateBear, //function
        delete: deleteBear, //function
        bears: [] //data
    };
    return o;

    function createBear(){
    }
    function getAll(){
      return $http.get('https://ancient-escarpment-18910.herokuapp.com/bears')
                  .then(function(response){
                  o.bears = response.data;
                  });
    };
    function updateBear(){};
    function deleteBear(){};
  }
})()
