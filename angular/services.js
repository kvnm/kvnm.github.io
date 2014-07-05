(function(){
  angular.module('portfolio.services', ['ngResource'])

    .factory('Projects', ['$resource', function($resource) {

      return $resource('projects/:projectId.json', {}, {
        query: { method:'GET', params: {projectId:'projects'}, isArray:true }
      });

    }])
  ;
})();