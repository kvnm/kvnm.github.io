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

      $scope.current = null;

      $scope.setCurrent = function(index) {
        $scope.current = index;
      };

      $scope.isCurrent = function(index) {
        return index === $scope.current;
      };

      $scope.haveDetail = function() {
        if ($scope.current !== null) {
          return true;
        }
      };

      $scope.haveDetailAndSite = function(current) {
        if ((current !== null) && ($scope.projects[current].url)) {
          return true;
        }
      };

      $scope.goToSite = function(current) {
        window.open($scope.projects[current].url);
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