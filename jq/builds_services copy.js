$(document).ready(function() {

    $("#links a").click(function name(params) {
        console.log(this.id)
        localStorage["jsonFile"] = this.id;
     });

     //adding prices to each card
     //using an ajax call, we will get the price for each build
     //Getting all cards
     var test = $("#links a");
     //looping through each card, pulling its id which is used as the name of its corresponding JSON file.
     for(var temp of test){
        //console.log(temp);
        console.log("NEW RUN")
        //setting tempP to price p tag
        

        //getting price through functoin  with ajax call, passing the json file to read and the current a tag
        //the a tag is used to get the id of the JSON file and the p tag we want to modify
        setPrice("json/" + temp.id + ".json", temp);

        
        
        
    }
 


}); 

function setPrice(file, temp){
    $.ajax({
        type: "get",
        url: file,
        beforeSend: function() {
    
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            
            var buildInfo = data.buildInfo[0];
            var tempP = ($("#" + temp.id + " p:eq(1)"))
            console.log("call 1 " + tempP);
            console.log(tempP);
            tempP.html(buildInfo.price);
            
           
        }
        
    });
}