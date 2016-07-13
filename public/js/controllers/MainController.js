
(function(){
  angular.module('ngbears') //getter that will be used in BearService.js
          .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearService'];

  function MainController($scope, BearService){
    $scope.message = 'Hey'
    console.log(BearService);
    var bears;
    BearService.readAll()
                .then(function(){
                  bears = BearService.bears;
                  console.log(bears);
                });
    }
})();
