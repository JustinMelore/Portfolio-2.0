$(document).ready(function() {

    function revealSection() {
        $(this).addClass("revealed");
        $(this).off("mouseenter",revealSection);
    }

    $("#aboutMe").on("mouseenter",revealSection);
    $("#experience").on("mouseenter",revealSection);
})