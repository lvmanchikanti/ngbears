//building a data service: .factory, .service, .config, .provider
//immediately invoking functional expression
(function(){
  angular.module('ngbears')
          .factory('BearService', BearService);

  BearService.$inject = ['$http'];

  function BearService($http){
    var baseUrl = 'https://ancient-escarpment-18910.herokuapp.com/';
    //object o
    var o = {
        create: createBear, //function
        readAll: getAll, //function
        update: updateBear, //function
        delete: deleteBear, //function
        bears: [] //data
    };
    return o;

    function createBear(typ, gend, siz, die){
      var info = {
        type: typ,
        gender: gend,
        size: siz,
        diet: die,
      };
      return $http.post(baseUrl + 'bears', info)
                  .then(function(response){
                    console.log('create', response);
                    getAll();
                  });
    }
    function getAll(){
      return $http.get(baseUrl + 'bears')
                  .then(function(response){
                  o.bears = response.data;
                  });
    }
    function updateBear(id, newBear){
      return $http.put(baseUrl + 'bears/' + id, newBear)
                  .then(function(response){
                    console.log('update', response);
                    getAll();
                  });
    }
    function deleteBear(id){
      return $http.delete(baseUrl + 'bears/' + id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll();
                  })

    }


  }
})()
