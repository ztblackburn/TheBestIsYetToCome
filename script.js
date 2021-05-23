(function () {
    $("#hell-js").click(function() {
        if($("body").hasClass("hell")){
            $("body").removeClass("hell");
        }
        else {
            $("body").addClass("hell");
        }
    });

    $("#raise-js").click(function() {
        $("#ghost-two-js").finish().animate({
            opacity: "1"
        }, 1000);
        $("#ghost-two-js").addClass("shown");
        
    });

    $("#ghost-two-js").click(function() {
        if($("#ghost-two-js").hasClass("shown")){
            $("#ghost-two-js").addClass("move-ghost");
            $("#hell-js").addClass("move-ghost");
            $(".stage").fadeOut(6000);
            $("a").finish().animate({
                opacity: "1"
            }, 7000);
        };
    });
}());