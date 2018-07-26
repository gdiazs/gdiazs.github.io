var main = (function($, commonServices){
    
    function changeTabConent(idTabType){
        var content = $("#tab-content");

        commonServices.fetchDataHtml(idTabType, function(result){
            content.html(result)
        });

      
    }


    function changeTabEvent(event){
        $(".tabs li").removeClass("active");
        $(event.target).addClass("active");
        changeTabConent(event.target.id);
    }

    function addStyleOnScrollTop(scrollCount){
        if (scrollCount > 100){
            $("#main-menu").addClass("fixed");
        }else{
            $("#main-menu").removeClass("fixed");
        }
    }


    return {
        init: function(){
           $(".tabs li").click(changeTabEvent);

           //set selected first btn
           $("#about").click();

           //On scroll top
           $(window).scroll(function (){

                addStyleOnScrollTop($(window).scrollTop());
           });
           
        },
    }


})($, commonServices);