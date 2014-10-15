// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

  
    .state('app.dashboard', {

      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/dashboard.html",
          controller: 'DashboardCtrl'
        }
      }
    })
     .state('app.returnedItems', {
      url: "/returnedItems",
      views: {
        'menuContent' :{
          templateUrl: "templates/returnedItems.html",
          controller: 'ReturnedItemsCtrl'
        }
      }
    })
    .state('app.expiredItems', {
      url: "/expiredItems",
      views: {
        'menuContent' :{
          templateUrl: "templates/expiredItems.html",
          controller: 'ExpiredItemsCtrl'
        }
      }
    })
 
 .state('app.Item', {
      url: "/items/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/item.html",
          controller: 'ItemCtrl'
        }
      }
    })
 .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html",
          controller: 'SettingsCtrl'
        }
      }
    })
 .state('app.users', {
      url: "/users",
      views: {
        'menuContent' :{
          templateUrl: "templates/users.html",
          controller: 'UsersCtrl'
        }
      }
    })
.state('app.user', {
      url: "/users/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/user.html",
          controller: 'UserCtrl'
        }
      }
    })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});

