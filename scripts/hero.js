

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("#heroImg").css({
      width: (100 + scroll/inputFunction()) + "%"
    })
  })

function inputFunction() {
  return 5;
}


/* The Original Code:

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $("#js-hero img").css({
    width: (100 + scroll/5) + "%"
  })
})

*/
/* let's try to write the above function in pure JS ***

function myFunction() {
  var elmnt = document.getElementById("myDiv");
  var y = document.window.scrollTop;
  var y = elmnt.scrollTop;
    
  //document.getElementById ("demo").innerHTML = "Vertically: " + y + "px";
  document.getElementById("heroImg").style.width = 100 + y +"%";
  document.getElementById("heroImg").style.opacity = 100 - y +"%";
}

*/