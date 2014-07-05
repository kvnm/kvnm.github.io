(function(){
  angular.module('portfolio', ['portfolio.controllers', 'portfolio.services', 'ngAnimate', 'ngSanitize'])
    .directive('portfolioItem', function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item.html'
      };
    })
    .directive('portfolioItemDetail', function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item-detail.html'
      };
    })
  ;
})();
(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', ['$scope', 'Projects', function($scope, Projects) {
      $scope.projects = Projects.query();

      $scope.detailRequested = false;

      $scope.getProjectDetail = function(projectId) {
        $scope.detailRequested = true;
        $scope.project = Projects.get({projectId: projectId});
      };

      $scope.unsetProjectDetail = function() {
        $scope.detailRequested = false;
      };
    }])
  ;
})();
(function(){
  angular.module('portfolio.services', ['ngResource'])

    .factory('Projects', ['$resource', function($resource) {

      return $resource('projects/:projectId.json', {}, {
        query: { method:'GET', params: {projectId:'projects'}, isArray:true }
      });

    }])
  ;
})();