$(document).ready(function() {

    //jquery tabs runner
    $( "#tabs" ).tabs({
        hide: true,
        show: true
    });
    $( "#tabs2" ).tabs({
        hide: true,
        show: true
    });
    $( "#tabs3" ).tabs({
        hide: true,
        show: true
    });
    //hiding all tabs and content on load
    $("#tabs").hide();
    $("#tabs2").hide();
    $("#tabs3").hide();

    //hide and show on click
    $(".buildsMainSection a").click(function(){
        if($(this).attr("id")==3){
            $("#tabs").show();
            $("#tabs2").hide();
            $("#tabs3").hide();
        }else if($(this).attr("id")==1){
            $("#tabs").hide();
            $("#tabs2").show();
            $("#tabs3").hide();
        }else if($(this).attr("id")==2){
            $("#tabs").hide();
            $("#tabs2").hide();
            $("#tabs3").show();
        }
        
    });

//changing the background color of divs based on tab coloer
$("#buttonsList li a, #buttonsList2 li a, #buttonsList3 li a").click(function(evt){

    //get the background color of button
    //change background color of entire div
    $("#tabs").css("background-image", $(this).css("background-image"))
    $("#tabs2").css("background-image", $(this).css("background-image"))
    $("#tabs3").css("background-image", $(this).css("background-image"))

   
});



}); 
