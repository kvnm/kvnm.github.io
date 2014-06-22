(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', function($scope, Projects) {
      $scope.projects = Projects.all();
    })
    .controller('ProjectCtrl', function($scope, $routeParams, Projects) {
      $scope.project = Projects.get($routeParams.projectPath);
    })
  ;
})();