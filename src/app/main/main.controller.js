(function() {
  'use strict';

  angular
  .module('dailyMealApp')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.restaurants =[{
      "id": 1,
      "name": "McDonalds",
      "image": "assets/images/food_image_1.jpg",
      "open_status": {
        "open_now": true,
        "open_hours": "08:00 - 16:00"
      },
      "offers": [{
        "name": "Grilled Salmon",
        "category": "fish",
        "price": 14
      }, {
        "name": "Steak",
        "category": "meat",
        "price": 20
      }],
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough"
      }
    }, {
      "id": 2,
      "name": "KFC",
      "image": "assets/images/food_image_2.jpg",
      "open_status": {
        "open_now": true,
        "open_hours": "08:00 - 16:00"
      },
      "offers": [{
        "name": "Pasta Carbonara",
        "category": "pasta",
        "price": 8
      }, {
        "name": " Griller Chicken",
        "category": "meat",
        "price": 20
      }],
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh"
      }
    }, {
      "id": 3,
      "name": "Domionos",
      "image": "assets/images/food_image_3.jpg",
      "open_status": {
        "open_now": true,
        "open_hours": "08:00 - 16:00"
      },
      "offers": [{
        "name": "Spicy Tuna Roll",
        "category": "fish",
        "price": 10
      }, {
        "name": "Steak",
        "category": "meat",
        "price": 20
      }],
      "address": {
        "street": "Douglas Extension",
        "city": "McKenziehaven"
      }
    }, {
      "id": 4,
      "name": "Burger King",
      "image": "assets/images/food_image_4.jpg",
      "open_status": {
        "open_now": false,
        "open_hours": "08:00 - 16:00"
      },
      "offers": [{
        "name": "Hamburger",
        "category": "meat",
        "price": 14
      }, {
        "name": " Cheesburger",
        "category": "meat",
        "price": 20
      }],
      "address": {
        "street": "Hoeger Mall",
        "city": "South Elvis"
      }
    }, {
      "id": 5,
      "name": "Caribic Pizza",
      "image": "assets/images/food_image_5.jpg",
      "open_status": {
        "open_now": false,
        "open_hours": "08:00 - 16:00"
      },
      "offers": [{
        "name": "Grilled Salmon",
        "category": "fish",
        "price": 14
      }, {
        "name": "Salad",
        "category": "vegeterian",
        "price": 5
      }],
      "address": {
        "street": "Skiles Walks",
        "city": "Roscoeview"
      }
    }]



    // $http.get('/src/assets/data/restaurants.json').success(function(data){
    //   vm.restaurants  = data;
    // });




  }
})();
