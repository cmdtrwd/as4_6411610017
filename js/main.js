$(document).ready(function () {
    let lastScrollTop = 0;

    $(".hamburger").click(function () {
        if(!$(this).hasClass('active'))
        {
            $(this).addClass("active");    
            $(".menu").addClass("active");
            $(".overlay").addClass("active");
        }
        else{
            $(".hamburger.active").removeClass("active");
            $(".menu.active").removeClass("active");
            $(".overlay.active").removeClass("active");
        }
    });

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > lastScrollTop) {
            if ($("#navbar").hasClass("active")) {
                $("#navbar").removeClass("active")
            }
        }

        else {
            $("#navbar").addClass("active")
        }

        lastScrollTop = currentScrollTop

        if(currentScrollTop < 1){
            $("#navbar").addClass("top");
        }
        else{
            $("#navbar").removeClass("top");
        }
    });

});