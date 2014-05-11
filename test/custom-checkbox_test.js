(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#custom-checkbox', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').find("input[type='checkbox']");
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.customCheckbox(), this.elems, 'should be chainable');
  });

  test('creates dummies', function() {
    expect(1);
    
    this.elems.customCheckbox();
    strictEqual($('.custom-checkbox-display').length, 3, 'should create dummies');
  });

  test('add classes', function() {
    expect(3);
    
    this.elems.customCheckbox();

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), true, 'should add  "checked" to dummy 1');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), true, 'should add  "checked" to dummy 2');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), true, 'should add  "checked" to dummy 3');
  });

  test('remove classes', function() {
    expect(3);
    
    this.elems.customCheckbox();

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), false, 'should remove "checked" to dummy 1');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), false, 'should remove "checked" to dummy 2');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), false, 'should remove "checked" to dummy 3');
  });

  test('activate checkboxes', function() {
    expect(3);
    
    this.elems.customCheckbox();

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    strictEqual($('#first').prop("checked"), true, 'should activate checkbox 1');
    strictEqual($('#second').prop("checked"), true, 'should activate checkbox 2');
    strictEqual($('#third').prop("checked"), true, 'should activate checkbox 3');
  });

  test('deactivate checkboxes', function() {
    expect(3);
    
    this.elems.customCheckbox();

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    $('.custom-checkbox-display').eq(0).trigger('click');
    $('#qunit-fixture label').eq(1).trigger('click');
    $('.custom-checkbox-display').eq(2).trigger('click');

    strictEqual($('#first').prop("checked"), false, 'should deactivate checkbox 1');
    strictEqual($('#second').prop("checked"), false, 'should deactivate checkbox 2');
    strictEqual($('#third').prop("checked"), false, 'should deactivate checkbox 3');
  });


}(jQuery));