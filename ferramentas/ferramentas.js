
jQuery(document).ready(function () {

    var mouseX = 0;
    var mouseY = 0;

    $(document).mousemove(function (e) { 

        mouseX = e.pageX;
        mouseY = e.pageY;

        // console.log(mouseX);
        // console.log(mouseY);

        $("#regua").css({top: mouseY - 3 + 'px'});
        $("#overlayTop").css({top: mouseY - (35 + $(window).height()) + 'px'});
        $("#overlayBottom").css({bottom: -1*mouseY - 35 + 'px'});

    });

    $("#activate-rule").click(function(){
        $("#regua").toggleClass("regua");
        $("#overlayTop").toggleClass("overlayTop");
        $("#overlayBottom").toggleClass("overlayBottom");
    });
    $("#activate-rule-sem-overlay").click(function(){
        $("#regua").toggleClass("regua");
    });
    $("#activate-rule-2").click(function(){
        $("#regua").toggleClass("regua");
        $("#overlayTop").toggleClass("overlayTop");
        $("#overlayBottom").toggleClass("overlayBottom");
    });
    $("#activate-rule-sem-overlay-2").click(function(){
        $("#regua").toggleClass("regua");
    });
    

});