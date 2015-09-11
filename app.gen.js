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
    .directive('tagCheckbox', function() {
      return {
        restrict: 'E',
        templateUrl: 'angular/tag-checkbox.html'
      };
    })
  ;
})();
(function(){
  angular.module('portfolio.controllers', [ ])
    .controller('PortfolioCtrl', ['$scope', 'Projects', function($scope, Projects) {
      $scope.projects = Projects.query();
      $scope.projects.$promise.then(function(result) {
        $scope.allTags = [];
        angular.forEach(result, function(value, key) {
          $scope.allTags = uniqueTags($scope.allTags.concat(value.tags));
        });

        $scope.selectedTags = $scope.allTags;
      });

      $scope.detailRequested = false;
      $scope.getProjectDetail = function(projectId) {
        $scope.project = Projects.get({projectId: projectId});
        $scope.project.$promise.then(function(result) {
          $scope.project = result;
          $scope.detailRequested = true;
        });
      };

      $scope.unsetProjectDetail = function() {
        $scope.detailRequested = false;
        $scope.project = {};
      };

      $scope.nothingSelected = true;
      $scope.addTag = function($event, tag) {
        var action = ($event.target.checked ? 'add' : 'remove');
        if ($scope.nothingSelected) {
          $scope.selectedTags = [];
          $scope.nothingSelected = false;
        }

        if (action === 'add') {
          $scope.selectedTags.push(tag);
        } else {
          $scope.selectedTags.splice(tag, 1);
          if (!$scope.selectedTags.length) {
            $scope.selectedTags = $scope.allTags;
            $scope.nothingSelected = true;
          }
        }
      };

      $scope.hasTags = function(project) {
        for (var i = 0; i < project.tags.length; i++) {
          if ($scope.selectedTags.indexOf(project.tags[i]) !== -1) {
            return true;
          }
        }
        return false;
      };

      // StackOverflow: http://stackoverflow.com/a/1584377
      var uniqueTags = function(array) {
        var a = array.concat();
        for (var i = 0; i < a.length; i++) {
          for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) {
              a.splice(j--, 1);
            }
          }
        }
        return a;
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