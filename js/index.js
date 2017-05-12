// animate
        var animateFm = {
            isVisiable:function(el,wh,st,delta){
                delta = delta || 130;
                return $(el).offset().top < wh+st - delta;
            },
            animations:{
                
                slideImg:function(wh,st){
                    var $el = $(".wrapper2");
                    if(animateFm.isVisiable($el,wh,st)){
                       $el.find('.img-L').addClass('openbig');
                       delete animateFm.animations.slideImg;
                    }
                },
                slideImg2:function(wh,st){
                    var $el = $(".wrapper2-1");
                    if(animateFm.isVisiable($el,wh,st)){
                       $el.find('.img-R').addClass('openbig');
                       delete animateFm.animations.slideImg2;
                    }
                }
                               
                
            }
        }
        // diaoyong

        $(window).on("scroll",function(){
            var animations,
                name,
                winHeight = $(window).height(),
                scrollTop = $(window).scrollTop();
            animations = animateFm.animations;
            for(name in animations){
                animations[name](winHeight,scrollTop);
            }
            if(scrollTop>=100){
                $(".header").addClass('up');
            }else{
                 $(".header").removeClass('up');
            }
        });

        if($(window).height()>500){
            $(window).trigger("scroll");
        }
