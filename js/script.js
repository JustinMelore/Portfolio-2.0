$(document).ready(function() {

    //Reveals the first section of the page once it loads
    $("section").eq(0).addClass("revealed");

    //Allows the page to get revealed the more you scroll
    $(window).on('scroll', reveal);
    function reveal(){
      for(let i = 1; i < $("section").length; i++){
        let $section = $("section").eq(i);
        if($section.offset().top - $("section").eq(i-1).height()/4 <= $(window).scrollTop()){
          $section.addClass("revealed");
        }
      }
      if($(".revealed").length === 5) {
        $(window).off("scroll",reveal);
      }
    }

    //Checks to see if the site is being displayed on a mobile device, in which case all of the site's section will be revealed
    if($(window).width() < 992) {
        $("section").addClass("revealed");
        $(window).off("scroll", reveal);
        //Removes all on hover effects for mobile and makes their changes default
        $("*").addClass("mobile");
    }

})
