describe('App Module', function () {

  var rootScope = null;

  beforeEach(module('fulbito'));

  describe('AppCtrl', function () {

    beforeEach(inject(function (_$rootScope_) {
      rootScope = _$rootScope_;
    }));

    it('must test something', function () {
      return true;
    });

  });
});
