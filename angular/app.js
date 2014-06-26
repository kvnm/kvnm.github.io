(function(){
  angular.module('portfolio', ['portfolio.controllers', 'portfolio.services', 'ngAnimate', 'ngSanitize'])
    .directive("portfolioItem", function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item.html'
      };
    })
    .directive("portfolioItemDetail", function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item-detail.html'
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
    

    ! include ngRoute above if using !
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
    */
  ;
})();