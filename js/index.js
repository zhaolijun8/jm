// animate
    
    var  status,
         tooltip = $(".tooltip");
    $(".trigger").on("click",function(){
        if(status == 1){
            status = 0;
            $(this).addClass('trigger--close');
            $("body,html").addClass('no-scroll');
            $(".menu-main").css({ "opacity": "1", "display": "flex" }).removeClass('menu-main--hidden');
            $(".manu").hide();
            setTimeout(function(){
                $(".menu-main__item").addClass('animate');
            },100);
        }else{
           status = 1;
            $(this).removeClass('trigger--close');
            $("body,html").removeClass('no-scroll');
            $(".menu-main").css({ "opacity": "0", "display": "none" }).addClass('menu-main--hidden');
            $(".manu").show();
            setTimeout(function(){
                $(".menu-main__item").removeClass('animate');
            },100);
        }
    })

    $(".f-weixin").on("click",function(){
        tooltip.is(":hidden") ? tooltip.show() : tooltip.hide();
    })

    setTimeout(function() {
     $(".load-screen").hide();
     $(".swiper-container").fadeIn();
     $(".arr").removeClass('hide');
     $("body,html").removeClass("no-scroll");
    }, 2000);

    $(".brand-lang").click(function(){
        var china = $(this).find(".china"),
            en = $(this).find(".en");
        if(en.is(":hidden")){            
            china.hide();
            en.show().addClass("zoomIn animated"); 
        }else{            
            en.hide();
            china.show().addClass("zoomIn animated"); 
        }
    })
    window.onload = function(){
    }