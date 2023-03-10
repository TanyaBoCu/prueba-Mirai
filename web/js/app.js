$(document).ready(function() {
    $('.with-tooltip').click(function(e){
        const tooltip = $(this).next();
        const tooltip_height = tooltip.outerHeight() + 20;
        tooltip.css("top","-" + tooltip_height + "px");
        tooltip.toggle();
    });

    $(".close-tooltip").click(function(){
        $(this).parent().hide();
    });
});