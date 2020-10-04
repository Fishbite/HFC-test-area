/* function to initiate the scroll function */

$(window).scroll(function() {
    /* create a variable to catch the number of pixels scrolled from top */
    var scroll = $(window).scrollTop();
    
    /* now create the zoom effect */
    $(".zoom img").css({
        transform: 'translate3d(-50%, -'+(scroll/20) +'%, 0) scale('+(100 + scroll/10)/100+')',
        opacity: 1 - (scroll/750) //added to fade-out image
    });
});

