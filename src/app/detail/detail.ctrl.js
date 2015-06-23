(function (angular) {
  'use strict';

  angular.module('controller.detail')
    .config(Config)
    .controller('DetailCtrl', DetailCtrl);

  Config.$inject = ['$stateProvider'];
  /*
   * Config the routes for Home Module
   *
   * @param stateProvider
   * @constructor
   */
  function Config(stateProvider) {
    stateProvider.state('detail', {
      url: '/detail',
      views: {
        main: {
          controller: 'DetailCtrl',
          controllerAs: 'DetailCtrl',
          templateUrl: 'detail/detail.tpl.html'
        }
      }
    });
  }

  DetailCtrl.$inject = ['titleService'];
  /*
   * Home Controller for main view
   *
   * @param titleService
   * @constructor
   */
  function DetailCtrl(titleService) {
    titleService.setTitle('Home');
  }

}(angular));
