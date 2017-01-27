(function() {
  'use strict';

  angular
  .module('dailyMealApp')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.restaurants =[  
    {  
      "id":1,
      "name":"McDonalds",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "image":"https://unsplash.it/400/200/?random",
      "offers":[  
      {  
        "name":"Grilled Salmon",
        "category":"fish",
        "price":14
      },
      {  
        "name":"Steak",
        "category":"meat",
        "price":20
      }
      ],
      "address":{  
       "street":"Kulas Light",
       "suite":"Apt. 556",
       "city":"Gwenborough",
       "zipcode":"92998-3874",
       "geo":{  
        "lat":"-37.3159",
        "lng":"81.1496"
      }
    },
    "phone":"1-770-736-8031 x56442",
    "website":"hildegard.org",
    "company":{  
     "name":"Romaguera-Crona",
     "catchPhrase":"Multi-layered client-server neural-net",
     "bs":"harness real-time e-markets"
   }
 },
 {  
  "id":2,
  "name":"KFC",
  "username":"Antonette",
  "email":"Shanna@melissa.tv",
  "image":"https://unsplash.it/400/200/?random",
  "offers":[  
  {  
    "name":"Pasta Carbonara",
    "category":"pasta",
    "price":8
  },
  {  
    "name":" Griller Chicken",
    "category":"meat",
    "price":20
  }
  ],
  "address":{  
   "street":"Victor Plains",
   "suite":"Suite 879",
   "city":"Wisokyburgh",
   "zipcode":"90566-7771",
   "geo":{  
    "lat":"-43.9509",
    "lng":"-34.4618"
  }
},
"phone":"010-692-6593 x09125",
"website":"anastasia.net",
"company":{  
 "name":"Deckow-Crist",
 "catchPhrase":"Proactive didactic contingency",
 "bs":"synergize scalable supply-chains"
}
},
{  
  "id":3,
  "name":"Domionos",
  "username":"Samantha",
  "email":"Nathan@yesenia.net",
  "image":"https://unsplash.it/400/200/?random",
  "offers":[  
  {  
    "name":"Spicy Tuna Roll",
    "category":"fish",
    "price":10
  },
  {  
    "name":"Steak",
    "category":"meat",
    "price":20
  }
  ],
  "address":{  
   "street":"Douglas Extension",
   "suite":"Suite 847",
   "city":"McKenziehaven",
   "zipcode":"59590-4157",
   "geo":{  
    "lat":"-68.6102",
    "lng":"-47.0653"
  }
},
"phone":"1-463-123-4447",
"website":"ramiro.info",
"company":{  
 "name":"Romaguera-Jacobson",
 "catchPhrase":"Face to face bifurcated interface",
 "bs":"e-enable strategic applications"
}
},
{  
  "id":4,
  "name":"Burger King",
  "username":"Karianne",
  "email":"Julianne.OConner@kory.org",
  "image":"https://unsplash.it/400/200/?random",
  "offers":[  
  {  
    "name":"Hamburger",
    "category":"meat",
    "price":14
  },
  {  
    "name":" Cheesburger",
    "category":"meat",
    "price":20
  }
  ],
  "address":{  
   "street":"Hoeger Mall",
   "suite":"Apt. 692",
   "city":"South Elvis",
   "zipcode":"53919-4257",
   "geo":{  
    "lat":"29.4572",
    "lng":"-164.2990"
  }
},
"phone":"493-170-9623 x156",
"website":"kale.biz",
"company":{  
 "name":"Robel-Corkery",
 "catchPhrase":"Multi-tiered zero tolerance productivity",
 "bs":"transition cutting-edge web services"
}
},
{  
  "id":5,
  "name":"Caribic Pizza",
  "username":"Kamren",
  "email":"Lucio_Hettinger@annie.ca",
  "image":"https://unsplash.it/400/200/?random",
  "offers":[  
  {  
    "name":"Grilled Salmon",
    "category":"fish",
    "price":14
  },
  {  
    "name":"Salad",
    "category":"vegeterian",
    "price":5
  }
  ],
  "address":{  
   "street":"Skiles Walks",
   "suite":"Suite 351",
   "city":"Roscoeview",
   "zipcode":"33263",
   "geo":{  
    "lat":"-31.8129",
    "lng":"62.5342"
  }
},
"phone":"(254)954-1289",
"website":"demarco.info",
"company":{  
 "name":"Keebler LLC",
 "catchPhrase":"User-centric fault-tolerant solution",
 "bs":"revolutionize end-to-end systems"
}
}
]



    // $http.get('/src/assets/data/restaurants.json').success(function(data){
    //   vm.restaurants  = data;
    // });




  }
})();