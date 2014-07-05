(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', ['$scope', 'Projects', function($scope, Projects) {
      $scope.projects = Projects.query();

      $scope.detailRequested = false;

      $scope.getProjectDetail = function(projectId) {
        $scope.project = Projects.get({projectId: projectId});
        $scope.detailRequested = true;
      };

      $scope.unsetProjectDetail = function() {
        $scope.detailRequested = false;
        $scope.project = {};
      };
    }])
  ;
})();