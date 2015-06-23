describe('titleService', function() {
  var $document = null,
      titleService = null,
      title, suffix;

  beforeEach(module('service.common'));

  beforeEach(inject(function(_$document_, _titleService_) {
    $document = _$document_;
    titleService = _titleService_;
  }));

  it('should set a title without a suffix', function() {
    title = 'new title';

    titleService.setTitle(title);

    expect(titleService.getTitle()).toEqual(title);
  });

  it('should allow specification of a suffix', function() {
    suffix = ' :: new suffix';

    titleService.setSuffix(suffix);

    expect(titleService.getSuffix()).toEqual(suffix);
  });

  it('should set the title, including the suffix', function() {
    title = 'New Title';
    suffix = ' :: new suffix';

    titleService.setSuffix(suffix);
    titleService.setTitle(title);

    expect(titleService.getTitle()).toEqual(title + suffix);
  });
});
