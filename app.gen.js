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
    .controller('PortfolioCtrl', function($scope, Projects) {
      $scope.projects = Projects.all();

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
    })
  ;
})();
(function(){
  angular.module('portfolio.services', [ ])

    .factory('Projects', function() {

      var projects = [
        { published: 1, nms: 1,
          name: 'American Friends Service Committee', path: 'afsc', url: 'http://www.afsc.org',
          images: [
            { full: 'angular/images/afsc.jpg', thumb: 'angular/images/afsc-thumb.jpg' },
          ],
          description: "<p>I've been working with AFSC once a week for about a year. We've made a good number of adjustments to their main site at <a href=\"http://www.afsc.org\" target=\"_blank\">AFSC.org</a> and done some cool micro-projects. The pic above is from <a href=\"http://www.afsc.org/boycott/\" target=\"_blank\">Boycott!</a>, a microsite devoted to a travelling poster exhibition.</p>",
          tags: [ 'Drupal', 'Bootstrap', 'Drupal 6' ]
        },
        { published: 1, nms: 0,
          name: 'Splash Block', path: 'splash-block', url: 'http://www.drupal.org/project/splash_block',
          images: [
            { full: 'angular/images/sb.jpg', thumb: 'angular/images/sb-thumb.jpg' },
          ],
          description: "<p>Splash Block is a small Drupal module I wrote that allows admins to \"splash\" popups by using the Blocks UI. It creates a new region in any theme (called Splash), to which blocks can be added. This allows for admins to pick and choose which splash content shows up on which pages, using Drupal core's block visibility rules.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Module' ]
        },
        { published: 1, nms: 1,
          name: 'Temple Health Professions & Social Work', path: 'temple-college-health-professions-social-work', url: 'http://chpsw.temple.edu',
          images: [
            { full: 'angular/images/chpsw.jpg', thumb: 'angular/images/chpsw-thumb.jpg' },
          ],
          description: "<p>Full Drupal 6 - Drupal 7 upgrade, with a brand new responsive theme.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Drupal 6', 'D6 - D7 Upgrade', 'Theming', 'Responsive' ]
        },
        { published: 1, nms: 1,
          name: 'Scattergood Foundation', path: 'scattergood', url: 'http://scattergoodfoundation.org',
          images: [
            { full: 'angular/images/sg.jpg', thumb: 'angular/images/sg-thumb.jpg' },
          ],
          description: "<p>We took this project over not long after its initial launch. It quickly became clear that the existing structure wasn't workable for us, so we re-architected content creation, and made the site responsive. Also, we've done some pretty cool micro-projects, including an interactive pledge wall.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Responsive', 'JavaScript', 'Theming' ]
        },
        { published: 1, nms: 1,
          name: 'Reconstructionist Rabbinical College', path: 'rrc', url: 'http://www.rrc.edu',
          images: [
            { full: 'angular/images/rrc.png', thumb: 'angular/images/rrc-thumb.png' },
          ],
          description: "<p>RRC is a long-time <a href=\"http://new-media-solutions.com\">New Media Solutions</a> client. Recently we did a full Drupal 6 - Drupal 7 upgrade and reworked their existing design to be responsive.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Drupal 6', 'D6 - D7 Upgrade', 'Theming', 'Responsive' ]
        },
        { published: 1, nms: 1,
          name: 'BALA', path: 'bala', url: 'http://bala.com',
          images: [
            { full: 'angular/images/bala.jpg', thumb: 'angular/images/bala-thumb.jpg' },
          ],
          description: "<p>Lots of jQuery stuff going on here, as the navigation scheme is totally unique.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Theming', 'jQuery' ]
        },
        { published: 1, nms: 1,
          name: 'Temple Health Giving', path: 'temple-health-giving', url: 'http://giving.templehealth.org/',
          images: [
            { full: 'angular/images/tuh.jpg', thumb: 'angular/images/tuh-thumb.jpg' },
          ],
          description: "<p>Site build and responsive theme.</p>",
          tags: [ 'Drupal', 'Drupal 7', 'Responsive', 'Theming' ]
        },
        { published: 1, nms: 1,
          name: 'Penn Medicine', path: 'penn-medicine', url: 'http://bigidea.med.upenn.edu/',
          images: [
            { full: 'angular/images/med.jpg', thumb: 'angular/images/med-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "<p>We've done a few sites for Penn Medicine. The pic above is from their internal Your Big Idea challenge.</p>",
          tags: [ 'Drupal', 'Drupal 6', 'Theming' ]
        },
        { published: 1, nms: 1,
          name: 'CharterScale', path: 'charter-scale', url: 'http://charterscale.org/',
          images: [
            { full: 'angular/images/cs.jpg', thumb: 'angular/images/cs-thumb.jpg' },
          ],
          description: "<p>An online tool for finding and comparing Charter Schools in the Chicago area.</p>",
          tags: [ 'Drupal', 'Drupal 7' ]
        },
        { published: 1, nms: 1,
          name: 'Women\'s World Banking Leadership Community', path: 'wwb',
          images: [
            { full: 'angular/images/wwb.jpg', thumb: 'angular/images/wwb-thumb.jpg' },
          ],
          description: "<p>Implemented a brand new theme for WWB's internal Leadership Community.</p>",
          tags: [ 'Drupal', 'Drupal 6', 'Theming' ]
        },
        { published: 0, nms: 1,
          name: 'Institute for Safe Families', path: 'insitute-for-safe-families', url: 'http://instituteforsafefamilies.org/',
          images: [
            { full: 'angular/images/isf.jpg', thumb: 'angular/images/isf-thumb.jpg' },
          ],
          description: "<p>Site build and theming.</p>",
          tags: [ 'Drupal', 'Drupal 6', 'Theming' ]
        },
      ];

      return {
        all: function() {
          return projects;
        },
        get: function(projectPath) {
          for (var i in projects) {
            if (projects[i].path === projectPath) {
              return projects[i];
            }
          }
        },
        getId: function(index) {
          return projects[index];
        }
      };
    })
  ;
})();