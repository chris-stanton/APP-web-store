
let myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips', 'ngAlertify']);

myApp.config(['$routeProvider', 'tooltipsConfProvider', function($routeProvider, tooltipsConfProvider) {


  // defining routes
  $routeProvider
    .when ('/landing', {
      templateUrl: './views/landing.html',
      controller: 'LandingController',
      controllerAs: 'lc'
    })
    .when ('/shop', {
      templateUrl: './views/shop.html',
      controller: 'ShopController',
      controllerAs: 'sc'
    })
    .when ('/parts', {
      templateUrl: './views/parts.html',
      controller: 'PartsController',
      controllerAs: 'pc'
    })
    .when ('/contact', {
      templateUrl: './views/contact.html',
      controller: 'ContactController',
      controllerAs: 'cc'
    })
    .when ('/about', {
      templateUrl: './views/about.html',
    })
    .when ('/warranty', {
      templateUrl: './views/warranty.html',
    })
    .when ('/resources', {
      templateUrl: './views/resources.html',
    })
    .otherwise ( {
        redirectTo: '/landing'
    });

  // angular-tooltips global config options
  tooltipsConfProvider.configure({
    'smart': false,
    'side': 'top',
    'size': 'small',
    'speed': 'slow',
    'tooltipTemplateUrlCache': false
  });



}]); // end myApp.config()
