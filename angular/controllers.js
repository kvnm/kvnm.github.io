(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', function($scope, Projects) {
      $scope.projects = Projects.all();

      var current = null;

      $scope.setCurrent = function(index) {
        current = index;
      }

      $scope.isCurrent = function(index) {
        return index === current;
      };

      $scope.haveDetail = function() {
        if (current !== null) {
          return true;
        }
      }
    })
    /*
    .controller('ProjectCtrl', function($scope, $routeParams, Projects) {
      $scope.project = Projects.get($routeParams.projectPath);

      var current = 0;

      $scope.project.setCurrent = function(index){
        current = index;
      };

      $scope.project.getCurrent = function(images){
        return images[current];
      };
    })
    */
  ;
})();