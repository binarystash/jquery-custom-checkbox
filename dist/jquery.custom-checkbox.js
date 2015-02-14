/*! custom-checkbox - v1.0.1 - 2015-02-14
* https://github.com/binarystash/custom-checkbox
* Copyright (c) 2015 BinaryStash; Licensed MIT */
/*! custom-checkbox - v1.0.1 - 2015-02-14
* https://github.com/binarystash/custom-checkbox
* Copyright (c) 2015 BinaryStash; Licensed MIT */
(function ($) {

  $.fn.customCheckbox = function() {

    return this.each( function(i,v) {

      //Ensure that a checkbox element was passed
      if ( !$(v).is(':checkbox') ) {
        return false;         
      }

      //Add classes
      $(v).addClass("custom-checkbox");
        
      //If not wrapped within label tags, wrap it
      var parentLabel = $(v).parent("label");
      var withinLabel = parentLabel.length;

      if ( !withinLabel ){
          $(v).wrap("<label>");      
      }  
        
      //Create dummy checkbox
      var dummy = $("<span class='custom-checkbox-display'></span>");
      $(v).after(dummy);
        
      //Add/remove classes to checkbox whenever state changes
      $(v).change( function(e) {
          var checkbox = $(e.currentTarget);
          var state = checkbox.prop("checked");
          if ( state ) {
              dummy.addClass("checked");
          }
          else {
              dummy.removeClass("checked");
          }
      });
        
      //Make reset button aware of the custom checkboxes
      var form = $(v).parents("form");
      var reset = form.find("input[type='reset']");
      reset.each( function(ri,rv) {
          if ( !$(rv).hasClass("custom-checkbox-aware") ) {
              $(rv).addClass("custom-checkbox-aware");
              $(rv).click( function() {
                  form.find(".custom-checkbox:checked").trigger("click");
              });
          }
      });


    });

  };

}(jQuery));