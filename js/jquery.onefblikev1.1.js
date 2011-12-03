/*
  jQuery OneFBLike v1.1 - http://onerutter.com/open-source/jquery-facebook-like-plugin.html
  Copyright (c) 2010 Jake Rutter
  This plugin available for use in all personal or commercial projects under both MIT and GPL licenses.
*/

(function($){

  $.fn.onefblike = function(options) {
    //Set the default values, use comma to separate the settings
    var defaults = {
      appID: '102476223147670',
      buttonWidth: 450,
      showfaces: true,
      font: 'lucida grande',  // arial, lucida grande, segoe ui, tahoma, trebuchet ms, verdana
      layout: 'standard',     // standard, button_count, box_count
      action: 'like',         // like, recommend
      colorscheme: 'light',   // light, dark
      send: false,
      locale : 'en_US'
    };

    var options = $.extend(defaults, options);

    return this.each(function() {
      var o = options;
      var obj = $(this);
      var dynUrl = document.location;
      
      if (o.href) {
        dynUrl = o.href;
      }

      // Add #fb-root div - mandatory - do not remove
      $('body').append('<div id="fb-root"></div>');

      // setup FB Developers App Link - do not touch
      window.fbAsyncInit = function() {
        FB.init({appId: o.appID, status: true, cookie: true, xfbml: true});
      };

      (function() {
        var e = document.createElement('script');
        e.async = true;
        e.src = document.location.protocol + '//connect.facebook.net/'+o.locale+'/all.js';
        $('#fb-root').append(e);
      }());

      // Apply the like button to an element on the page and include all available options
      // If no options are passed in from the page, the defaults will be applied
      $(obj).html('<fb:like href="'+dynUrl+'" width="'+o.buttonWidth+'" show_faces="'+o.showfaces+'" font="'+o.font+'" layout="'+o.layout+'" action="'+o.action+'" colorscheme="'+o.colorscheme+'" send="'+o.send+'"/>');

    });
  };
})(jQuery);