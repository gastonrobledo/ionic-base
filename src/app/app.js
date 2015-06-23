var appName = 'fulbito';

(function (angular) {
  'use strict';


  angular.module(appName,
    [
      'ionic',
      'templates-app',
      'templates-common',
      'ui.bootstrap',
      'ui.router'
    ])
    .config(Config)
    .run(run);


  angular.registerModule = function (moduleName) {
    // Create angular module
    angular.module(moduleName, []);

    // Add the module to the AngularJS configuration file
    var exists = _.includes(angular.module(appName).requires, moduleName);
    if (!exists) {
      angular.module(appName).requires.push(moduleName);
    }
    return angular.module(moduleName);
  };

  Config.$inject = ['$httpProvider', '$urlRouterProvider'];
  /*
   * Configuration function for the app
   *
   * @param httpProvider
   * @param locationProvider
   * @param urlRouterProvider
   * @constructor
   */
  function Config(httpProvider, urlRouterProvider) {

    httpProvider.defaults.useXDomain = true;
    delete httpProvider.defaults.headers.common['X-Requested-With'];

    urlRouterProvider.otherwise('/');
  }


  run.$inject = ['$ionicPlatform', '$window'];
  function run($ionicPlatform, $window) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if ($window.cordova && $window.cordova.plugins.Keyboard) {
        $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if ($window.StatusBar) {
        $window.StatusBar.styleDefault();
      }
    });
  }


}(angular));


//Bootstraping angular app


//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_'){
    window.location.hash = '#!';
  }

  //Then init the app
  angular.bootstrap(document, [appName]);
});