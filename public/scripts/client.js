
// Copyright (c) 2018 Christopher J. Stanton
let myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips', 'ngAlertify']);

myApp.config(['$routeProvider', 'tooltipsConfProvider', function($routeProvider, tooltipsConfProvider) {


  // defining route provider
  $routeProvider
    // User routes
    .when ('/landing', {
      templateUrl: './views/landing.html',
      controller: 'LandingController',
      controllerAs: 'lc'
    })
    .when ('/sales', {
      templateUrl: './views/sales.html',
      controller: 'SalesController',
      controllerAs: 'sale'
    })
    .when ('/custom_build', {
      templateUrl: './views/custom-build.html',
      controller: 'CustombuildController',
      controllerAs: 'cbc'
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
    .when ('/shop', {
      templateUrl: './views/static/shop.html',
    })
    .when ('/about', {
      templateUrl: './views/static/about.html',
    })
    .when ('/resources', {
      templateUrl: './views/static/resources.html',
    })
    .when ('/warranty', {
      templateUrl: './views/static/warranty.html',
    })
    // admin routes
    .when ('/admin_dashboard', {
      templateUrl: './views/admin/admin.dashboard.html',
      controller: 'AdmindashboardController',
      controllerAs: 'adc'
    })
    .when ('/admin_gallary', {
      templateUrl: './views/admin/admin.gallary.html',
      controller: 'AdmingallaryController',
      controllerAs: 'agc'
    })
    .when ('/admin_gallaryImage/:id', {
      templateUrl: './views/admin/admin.gallaryImage.html',
      controller: 'AdmingallaryimageController',
      controllerAs: 'agic'
    })
    // else redirect
    .otherwise ({
        redirectTo: '/landing'
    });


  // angular-tooltips global config options
  tooltipsConfProvider.configure({
    'smart': true,
    'side': 'top',
    'size': 'small',
    'speed': 'slow',
    'tooltipTemplateUrlCache': false
  });



}]); // end myApp.config()
