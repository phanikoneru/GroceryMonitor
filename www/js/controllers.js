angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  $scope.Items = [
  { id:1, title:'Juice', shop : 'FredMeyer', expirydate : '10/21/2014', returndate : '11/21/2014'},
  { id:2, title:'Eggs', shop : 'Costco', expirydate : '10/22/2014', returndate : '11/22/2014'},
  { id:3, title :'Milk', shop : 'FredMeyer', expirydate : '10/23/2014', returndate : '11/23/2014'},
  { id:4, title :'Yogurt', shop : 'FredMeyer', expirydate : '10/24/2014', returndate : '11/24/2014'},
  { id:5, title :'Bread', shop : 'Costco', expirydate : '10/21/2014', returndate : '11/21/2014'},
  { id:6, title :'Jam', shop : 'Apna Bazar', expirydate : '10/22/2014', returndate : '11/22/2014'},
  { id:7, title :'Spinash', shop : 'FredMeyer', expirydate : '10/23/2014', returndate : '11/23/2014'},
  { id:8, title :'Icecream', shop : 'Apna Bazar', expirydate : '10/24/2014', returndate : '11/24/2014'}
  ];

  $scope.RelatedUsers = [
  { id:1, title : 'Pavan', mobile : '1111111111'},
  { id:2, title : 'Kiran', mobile : '2222222222'},
  { id:3, title : 'Chitti', mobile : '3333333333'},
  { id:4, title : 'Dhillesh', mobile : '4444444444'}
  ];

  $scope.UserInfo = { id:5, title : 'Kartheek', mobile : '5555555555', dataretention : 20, notifyme : 7};


})

.controller('DashboardCtrl', function($scope, $state,$location) {

 $scope.expiryItems = $scope.Items
 $scope.returnedItems =$scope.Items
 $scope.gotoExpiredItems = function() {
  $state.go('app.expiredItems');

 }
 $scope.gotoReturnedItems = function() {
  $state.go('app.returnedItems');

 }
})
.controller('ReturnedItemsCtrl', function($scope) {
   $scope.returnedItems = $scope.Items
})
.controller('ExpiredItemsCtrl', function($scope) {
   $scope.expiryItems = $scope.Items;
 })

.controller('ItemCtrl', function($scope, $state, $stateParams, $filter) {
   
    // check if a new item
    if($stateParams.id == 0)
    {
      // new item
      $scope.isNew = true;
      $scope.isEdit = false;
      // fetch item from backend based on id
      $scope.title = ""
      $scope.shop = ""
      $scope.expirydate = ""
      $scope.returndate = ""
    
    }
    else
    {
      // existing item
      $scope.isNew  = false;
      $scope.isEdit = true;
      // fetch item from backend based on id
      $scope.title = "Jam"
      $scope.shop = "Fredmeyer"
      $scope.expirydate = '11/21/2014'
      $scope.returndate = '12/21/2015'

    }


    $scope.add = function(){
        // hook server side call to add item to db

        alert('Adding item  ' + $scope.title);
        alert('Adding item  ' + $scope.expirydate);


    };

    $scope.edit = function(){
       $scope.isEdit = true;
      
    };

    $scope.update = function(){
        // hook server side call to add item to db
      
      
    };

    $scope.delete = function(){
        // hook server side call to add item to db

      
    };
    
})
.controller('SettingsCtrl', function($scope) {

// hook method to update User settings
 $scope.updateSettings = function(){};

})

.controller('UsersCtrl', function($scope, $state) {
  $scope.addNewUser = function(){
      $state.go('app.user');

  }

})

 .controller('UserCtrl', function($scope, $state, $stateParams) {



  if($stateParams.id && $stateParams.id > 0)
  {
    $scope.isNew = false;
    $scope.isEdit = true;
  }
  else
  {
    $scope.isNew = true;
    $scope.isEdit = false;
  }
  
});
