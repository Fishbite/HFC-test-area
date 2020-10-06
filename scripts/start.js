/* 
The Document Ready Event...prevents any jQuery code running before the document is fully loaded

$(document).ready(function(){

  // All jQuery methods go here...  

});

We have a shorthand version:

$(function(){

  // All jQuery methods go here...

});
*/
/* So, when the document is loaded ! */
$(function () {
  /* Basic syntax is: $(selector).action()

    A $ sign to define/access jQuery
    A (selector) to "query (or find)" HTML (DOM) elements
    A jQuery action() to be performed on the element(s)

    */
  /* function to initiate the scroll function */
  /* selector = the window object. Action = when user scrolls(run this function) */
  $(window).scroll(function () {
    /* create a variable to catch the number of pixels scrolled from top */
    var scroll = $(window).scrollTop();

    /* now create the zoom effect */
    /* selector = CSS class of .zoom with child element of image */
    $(".zoom img").css({
      /* Now we manipulate the CSS style 'scale' I'm using scale within transform: translate3d. This forces the device processor to be used for the transform, rather than leaving the rendering to the browser - which would result in stuttered, non-smooth scrolling */
      /* I've turned this into a template litteral which I think is easier to read than a concatenated string. The scroll varialbe is now called in curly braces with a $ sign to signify that this is a variable: ${scroll} */
      /* now we just play around with the numbers untill we get the desired scroll/image scale effect */
      /* We alter the x position by -50% and dynamically alter the y position based on the var scroll value in %,  we don;t alter the z value */
      transform: `translate3d(-50%, -${scroll / 20}%, 0) scale(${
        /* Then we manipulate the actuale scale of the image based on the variable 'scroll' value */
        (100 + scroll / 10) / 100
      })`,
      /* I then went a step further and fade the image out as it zooms and scrolls. This reveals the underlying image and the parallax overlay that moves up the screen as the user continues to scroll. */
      opacity: 1 - scroll / 750, //added to fade-out image
    });
  });
});

/* *** Notes ***
translate3d()
CSS

The translate3d() CSS function moves the position of the element in the 3D space. This transformation is characterized by a 3-dimension vector whose coordinates define how much it moves in each direction.

translate3d(tx, ty, tz)
*/
