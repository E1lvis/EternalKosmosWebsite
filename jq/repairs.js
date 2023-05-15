$(document).ready(function() {
    //hiding all options divs at the start
    $("#diagnosisContainer").hide();
    $("#softwareContainer").hide();
    $("#optimizationContainer").hide();
    
    //hide and show on click
$(".buildsMainSection a").click(function(){
    if($(this).attr("id")==1){
        $("#diagnosisContainer").show();
        $("#softwareContainer").hide();
        $("#optimizationContainer").hide();
    }else if($(this).attr("id")==2){
        $("#diagnosisContainer").hide();
        $("#softwareContainer").show();
        $("#optimizationContainer").hide();
    }else if($(this).attr("id")==3){
        $("#diagnosisContainer").hide();
        $("#softwareContainer").hide();
        $("#optimizationContainer").show();
    }
    
});

});