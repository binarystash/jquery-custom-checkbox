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
    strictEqual($('.custom-checkbox-display').length, 4, 'should create dummies');
  });

  test('add classes', function() {
    expect(2);
    
    this.elems.customCheckbox();

    $('.custom-checkbox').eq(0).trigger('click');
    $('#qunit-fixture label').eq(2).add($('#qunit-fixture label').eq(2).find("input")).trigger('click');
    $('.custom-checkbox').eq(2).trigger('click');

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), true, 'should add  "checked" to dummy 1');
    //strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), true, 'should add  "checked" to dummy 2');
	strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), true, 'should add  "checked" to dummy 3');
  });

  test('remove classes', function() {
    expect(3);
    
    this.elems.customCheckbox();

    $('.custom-checkbox').eq(0).trigger('click');
    $('#qunit-fixture label').eq(2).trigger('click');
    $('.custom-checkbox').eq(2).trigger('click');

    $('.custom-checkbox').eq(0).trigger('click');
    $('#qunit-fixture label').eq(2).trigger('click');
    $('.custom-checkbox').eq(2).trigger('click');

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), false, 'should remove "checked" from dummy 1');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), false, 'should remove "checked" from dummy 2');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), false, 'should remove "checked" from dummy 3');
  });

  test('test reset button', function() {
    expect(3);
    
    this.elems.customCheckbox();
	
	$('.custom-checkbox').trigger('click');
    $("input[type='reset']").trigger("click");

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), false, 'should remove "checked" from dummy 1');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), false, 'should remove "checked" from dummy 2');
    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), false, 'should remove "checked" from dummy 3');
  });
  
  test('recognize "checked" attribute', function() {
    expect(4);
    
    this.elems.customCheckbox();

    strictEqual($("#qunit-fixture .custom-checkbox-display").eq(0).hasClass("checked"), false, 'must not be checked');
	strictEqual($("#qunit-fixture .custom-checkbox-display").eq(1).hasClass("checked"), false, 'must not be checked');
	strictEqual($("#qunit-fixture .custom-checkbox-display").eq(2).hasClass("checked"), false, 'must not be checked');
	strictEqual($("#qunit-fixture .custom-checkbox-display").eq(3).hasClass("checked"), true, 'must be checked');
  });


}(jQuery));
