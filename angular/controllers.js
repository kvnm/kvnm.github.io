(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', function($scope, Projects) {
      $scope.projects = Projects.all();

      $scope.current = null;

      $scope.setCurrent = function(index) {
        $scope.current = index;
      }

      $scope.isCurrent = function(index) {
        return index === $scope.current;
      };

      $scope.haveDetail = function() {
        if ($scope.current !== null) {
          return true;
        }
      }

      $scope.goToSite = function(current) {
        window.open($scope.projects[current].url);
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