import $ from 'jquery';
import commonServices from './CommonServices';

var SCROLL_TOP_COUNT = 190;

function mainController (){
    
    function changeTabConent(idTabType){
        var content = $("#tab-content");

        commonServices.fetchDataHtml(idTabType, function(result){
            content.html(result)
        });

        if ($("#main-menu").hasClass("fixed")){
          var scrollPos =  $(".content-data").offset();
          if(scrollPos){
            $(window).scrollTop(SCROLL_TOP_COUNT);  
          }
        }
     
    }


    function changeTabEvent(event){
        $(".tabs li").removeClass("active");
        $(event.target).addClass("active");
        changeTabConent(event.target.id);
    }

    function addStyleOnScrollTop(scrollCount){
        console.log(scrollCount)
        if (scrollCount >= SCROLL_TOP_COUNT){
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


}

export default mainController();
    