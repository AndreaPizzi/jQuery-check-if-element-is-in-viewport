/*********************************************** */
/**** Check if element with class is in viewport */
/*********************************************** */

/********************* 1° Function for check if lement is in viewport */
    
        $.fn.isInViewport = function() {
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();
          
              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();
          
              return elementBottom > viewportTop && elementTop < viewportBottom;
          };
          
/********************* 2° Call function on load */
   
          checkonScreen();
          
/********************* 3° Call function on scroll */   
   
          $(window).scroll(function() {
              checkonScreen();
          });
          
/********************* 4° function that add or remove class if element is on viewport */
   
          function checkonScreen(){
              $( ".fadeOnScreen" ).each(function( index ) {
                  if ($(this).isInViewport()) {
                      $(this).addClass('fadeOnScreen_active');
                  } else {
                      $(this).removeClass('fadeOnScreen_active');
                  }
              });
          }
