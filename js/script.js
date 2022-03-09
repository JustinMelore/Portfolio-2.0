$(document).ready(function() {

    function revealSection() {
        $(this).addClass("revealed");
        $(this).off("mouseenter",revealSection);
    }

    $("section").on("mouseenter",revealSection);
})