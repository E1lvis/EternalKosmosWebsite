$(document).ready(function() {

    //bxslider for runner index.html
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
    
    