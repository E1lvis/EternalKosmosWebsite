$(document).ready(function() {
    //creating json file to use by getting localstore json file value passed from pc builds page
    jsonFile = "json/" + localStorage["jsonFile"] + ".json";
    //Ajax call
     $.ajax({
        type: "get",
        url: jsonFile,
        beforeSend: function() {
    
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            //setting variable to overall build info and setting the information in card
            var buildInfo = data.buildInfo[0];
       
            $("#PCName").html(buildInfo.name);
            var priceHTML = "<a href=# class=tooltipText>Price </a>";
            $("#PCPrice").attr("class", "tooltipText");
            $("#PCPrice").attr("title", "Subject to change based on vendor pricing");
            $("#PCPrice").html("Price " + buildInfo.price);

            $("#description").html( buildInfo.description);

            //getting images object
            var images = data.images;
            
            $.each(images, function(){
                //creating li and img then appending to slider
                var tempImage = $("<img>").attr({src: "images/" + this.src, title: this.title, alt: this.title});
                var tempHTML = $("<li></li>");
                $(tempHTML).append(tempImage);
                $("#slider").append(tempHTML);

        
            });
            

            //getting parts information in variable below
            var parts = data.parts;
            //parsing through each part and creating card
            $.each(parts, function(){
                var tempDIV = "<div class=partSlider id=CPUSlider>"
                //parsing though each piece of information of part and placing information within card
                $.each(this, function(key,value){
                    tempDIV += "<h2 class=sliderH2>"+ value +"</h2>"
                    tempDIV += "<p>"+ key +"</p>"
                   
                 
                });
                //closing card div
                tempDIV += "</div>"
                //adding card to div in page
                $("#partsSlider").append(tempDIV);
                
            });
            

            
       
           
           
        }
        
    }).done(function(){
        $('.parts').slick({
            infinte: true,
            centerMode:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
        });
        $( function() {
            $( document ).tooltip();
          } );

          $("#slider").bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 500,
            pause: 4000,
    
            onSliderLoad: function(currentIndex) {
                $("#imageTitle").html($('#slider li').eq(currentIndex).find("img").attr("title"));
              },
           
            onSlideBefore: function($slideElement, oldIndex, newIndex){
                $("#imageTitle").html($slideElement.find("img").attr("title"));
              },
        });
    });
  
    

   
    });
