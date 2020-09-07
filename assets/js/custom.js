// js for load more blog



$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".cookie__right_bar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 680 && scroll < $('.cookie__area ').innerHeight()) {
        $(".cookie__right_bar").addClass("fixed-sec");

    }
    else {
       $(".cookie__right_bar").removeClass("fixed-sec");
    }
});




var list = $(".topHEadMedia");
var numToShow = 4;
var button = $("#next");
var numInList = list.length;
list.hide();
if (numInList > numToShow) {
	button.show();
}

list.slice(0, numToShow).show();

button.click(function () {
	var showing = list.filter(':visible').length;
	list.slice(showing - 4, showing + numToShow).fadeIn();
	var nowShowing = list.filter(':visible').length;
	if (nowShowing >= numInList) {
		button.hide();


	}
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a#return-to-top").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


    function myFunction(x) {
      x.classList.toggle("change");
    }
