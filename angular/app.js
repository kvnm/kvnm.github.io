(function(){
  angular.module("portfolio", [ ])
    .controller("PortfolioController", function(){
      this.items = [
        { name: 'American Friends Service Committee', price: 123.45,
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
        { name: 'BALA', price: 123.45,
          images: [
            { full: 'angular/images/bala.jpg', thumb: 'angular/images/bala-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'College of Health Professions & Social Work', price: 123.45,
          images: [
            { full: 'angular/images/chpsw.jpg', thumb: 'angular/images/chpsw-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Reconstructionist Rabbinical College', price: 123.45,
          images: [
            { full: 'angular/images/rrc.png', thumb: 'angular/images/rrc-thumb.png' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Scattergood Foundation', price: 123.45,
          images: [
            { full: 'angular/images/sg.jpg', thumb: 'angular/images/sg-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Temple Health Giving', price: 123.45,
          images: [
            { full: 'angular/images/tuh.jpg', thumb: 'angular/images/tuh-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Penn Medicine', price: 123.45,
          images: [
            { full: 'angular/images/med.jpg', thumb: 'angular/images/med-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
        { name: 'Institute for Safe Families', price: 123.45,
          images: [
            { full: 'angular/images/isf.jpg', thumb: 'angular/images/isf-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];
    })
    .directive("portfolioItem", function(){
      return {
        restrict: 'E',
        templateUrl: 'angular/portfolio-item.html',
      };
    })
  ; // END module(store)
})();