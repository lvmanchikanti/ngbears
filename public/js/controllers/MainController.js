
(function(){
  angular.module('ngbears') //getter that will be used in BearService.js
          .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    $scope.bears = BearService.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    getBears();

      function getBears(){
        BearService.readAll()
                    .then(function(){
                      $scope.bears = BearService.bears;
                      console.log($scope.bears);
                    });
      }

      function createBear(type, gender, size, diet){
        BearService.create(type, gender, size, diet)
                    .then(function(){
                      $scope.type= '';
                      $scope.gender= '';
                      $scope.size= '';
                      $scope.diet= '';
                      getBears();
                    });
      }


    function deleteBear(id){
      console.log(id);
      BearService.delete(id)
                  .then(function(){
                    getBears();
                  });
    }

    }
})();
