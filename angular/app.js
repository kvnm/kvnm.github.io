(function(){
  angular.module('portfolio', ['portfolio.controllers', 'portfolio.services', 'ngRoute'])
    .directive("portfolioItem", function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item.html'
      };
    })
    /*
    .filter('pathify', function() {
      return function (input) {
        if (input) {
          return input.replace(/\s+/g, '-').toLowerCase()
          }
        }
    })
    */
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'angular/portfolio-page.html',
          controller: 'PortfolioCtrl'
        })
        .when('/project/:projectPath', {
          templateUrl: 'angular/project-page.html',
          controller: 'ProjectCtrl'
        });
    })
  ;
})();