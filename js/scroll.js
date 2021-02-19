$("a").click(function(event){
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $("#loremIpsum").offset().top
    }, 2500);
});