(function() {
    // var app = angular.module('gemStore', []);
    // all about product moved on product.js
    // and create dependency on the new module store-products
    var app = angular.module('gemStore', ['store-products']);

    //store controller
    /*app.controller('StoreController', function(){
        this.products = gems;
    });*/

    /*//receive data from an extern json
    //using http service
    app.controller('StoreController', [ '$http', function($http){//http service
        var store = this;
        store.products = [];
        // Pass our store controller the $http Service.
        //$http.get('/store-products.json');
        //Attach a success to our get call
        $http.get('/store-products.json').success(function(data){
            // give StoreController access to the products by setting products equal to the data
            // given to us with the http service's success promise
            store.products = data;
        });
    }]);*/

    app.controller('StoreController', function(){
        //var store = this;
        //.products = [];
        this.products = gems;

    });


    //review controller
    app.controller('ReviewController', function(){
        //inizialise review with ana empty object
        this.review = {};
        //add review on the reviews array of the product
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            products.reviews.push(this.review);
            //reset the review to an empty object after it's been added to product.reviews
            this.review = {};
        };
    });

    //array products (gems), moved on store-products.json
    var gems = [
        {
            name: 'Azurite',
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            shine: 8,
            price: 110.50,
            rarity: 7,
            color: '#CCC',
            faces: 14,
            images: [
                "images/gem-02.gif",
                "images/gem-05.gif",
                "images/gem-09.gif"
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        },
        {
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            images: [
                "images/gem-01.gif",
                "images/gem-03.gif",
                "images/gem-04.gif",
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        },
        {
            name: 'Zircon',
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            price: 1100,
            rarity: 2,
            color: '#000',
            faces: 6,
            images: [
                "images/gem-06.gif",
                "images/gem-07.gif",
                "images/gem-09.gif"
            ],
            reviews: [{
                stars: 1,
                body: "This gem is WAY too expensive for its rarity value.",
                author: "turtleguyy@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "BBW: High Shine != High Quality.",
                author: "LouisW407@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "Don't waste your rubles!",
                author: "nat@example.org",
                createdOn: 1397490980837
            }]
        }
    ];
})();
