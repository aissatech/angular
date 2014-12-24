(function(){
    var app = angular.module('store-products', []);

    //tabs controller, moved down on the directive
    /*app.controller('TabController', function(){
     this.tab = 1;

     //tab was clicked
     this.setTab = function(newValue){
     this.tab = newValue;
     };
     //tab is active
     this.isSet = function(tabName){
     return this.tab === tabName;
     };
     });*/


    //all the tabs in a directive
    app.directive('productTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){ //we moved also the tabs controller here
                this.tab = 1;

                //tab was clicked
                this.setTab = function(newValue){
                    this.tab = newValue;
                };
                //tab is active
                this.isSet = function(tabName){
                    return this.tab === tabName;
                };
            },
            controllerAs: 'tab'
        };
    });

    //gallery controller
    /*app.controller('GalleryController', function(){
     this.current = 0;
     this.setCurrent = function(newGallery){
     this.current = newGallery || 0;
     };
     });
     */

    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });


    //directive for product descriptiuon
    app.directive('productDescription', function(){
        return {
            restrict: 'E', //directive as element
            templateUrl: 'product-description.html'
        };
    });

    //directive for product reviews
    app.directive('productReviews', function(){
        return {
            restrict: 'E', //directive as element
            templateUrl: 'product-reviews.html'
        };
    });

    //directive for product specs
    app.directive('productSpecs', function(){
        return {
            restrict: 'A', //directive as attribute
            templateUrl: 'product-specs.html'
        };
    });
})();