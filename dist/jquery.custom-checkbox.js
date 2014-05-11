/*! custom-checkbox - v1.0.0 - 2014-05-11
* https://github.com/binarystash/custom-checkbox
* Copyright (c) 2014 BinaryStash; Licensed MIT */
(function ($) {

  $.fn.customCheckbox = function() {

    function handleClick(actual,dummy) {
       if ( dummy.hasClass("checked") ) {
          actual.prop("checked",false);
          dummy.removeClass("checked");
        }
        else {
          actual.prop("checked",true);
          dummy.addClass("checked");
        }
    }

    return this.each( function(i,v) {

      //Ensure that a checkbox element was passed
      if ( !$(v).is(':checkbox') ) {
        return false;         
      }

      //Add classes
      $(v).addClass("custom-checkbox");

      //Create dummy checkbox
      $(v).after("<span class='custom-checkbox-display'></span>");
      var dummy = $(v).next('.custom-checkbox-display');

      //Check for label
      var id = $(v).attr("id");
      var parentLabel = $(v).parent("label");
      var withinLabel = parentLabel.length;
      var label = withinLabel ? parentLabel : $("label[for='"+id+"']");

      //Add events
      label.click( function(e) {
        e.preventDefault();
        handleClick($(v),dummy);
      });

      if ( !withinLabel ) {
        dummy.click( function(e) {
          e.stopPropagation();
          handleClick($(v),dummy);
        });
      }

    });

  };

}(jQuery));
