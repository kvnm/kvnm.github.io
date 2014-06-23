(function(){
  angular.module('portfolio.services', [ ])

    .factory('Projects', function() {

      var projects = [
        { name: 'American Friends Service Committee', path: 'afsc',
          images: [
            { full: 'angular/images/afsc.jpg', thumb: 'angular/images/afsc-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [
            { body: "This product is awesome!", stars: 5, author: "fanboy@apple.com" },
            { body: "Would not buy again...", stars: 1, author: "hater@losers.com" },
          ],
        },
        { name: 'BALA', path: 'bala',
          images: [
            { full: 'angular/images/bala.jpg', thumb: 'angular/images/bala-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Temple Health Professions & Social Work', path: 'temple-college-health-professions-social-work',
          images: [
            { full: 'angular/images/chpsw.jpg', thumb: 'angular/images/chpsw-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Reconstructionist Rabbinical College', path: 'rrc',
          images: [
            { full: 'angular/images/rrc.png', thumb: 'angular/images/rrc-thumb.png' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Scattergood Foundation', path: 'scattergood',
          images: [
            { full: 'angular/images/sg.jpg', thumb: 'angular/images/sg-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Temple Health Giving', path: 'temple-health-giving',
          images: [
            { full: 'angular/images/tuh.jpg', thumb: 'angular/images/tuh-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Penn Medicine', path: 'penn-medicine',
          images: [
            { full: 'angular/images/med.jpg', thumb: 'angular/images/med-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Institute for Safe Families', path: 'insitute-for-safe-families',
          images: [
            { full: 'angular/images/isf.jpg', thumb: 'angular/images/isf-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];

      return {
        all: function() {
          return projects;
        },
        get: function(projectPath) {
          for (i in projects) {
            if (projects[i].path === projectPath) {
              return projects[i];
            }
          }
        }
      }
    })
  ;
})();