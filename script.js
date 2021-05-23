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

        $("#ghost-two-js").addClass("show");
    
});

$("#ghost-two-js").click(function() {
if($("#ghost-two-js").hasClass("show")){
        $("#ghost-two-js").addClass("move-ghost");
    }
});





}());