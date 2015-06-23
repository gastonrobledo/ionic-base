(function (angular) {
  'use strict';

  angular.module('controller.home')
    .config(Config)
    .controller('HomeCtrl', HomeCtrl);

  Config.$inject = ['$stateProvider'];
  /*
   * Config the routes for Home Module
   *
   * @param stateProvider
   * @constructor
   */
  function Config(stateProvider) {
    stateProvider.state('home', {
      url: '/',
      views: {
        main: {
          controller: 'HomeCtrl',
          controllerAs: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      }
    });
  }

  HomeCtrl.$inject = ['titleService'];
  /*
   * Home Controller for main view
   *
   * @param titleService
   * @constructor
   */
  function HomeCtrl(titleService) {
    titleService.setTitle('Home');
  }

}(angular));
