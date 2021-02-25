$(function(){ 
        
        //슬라이드
        var auto='';
        $('.slide ul li:first').appendTo('.slide ul');
        function showfn(){
            clearInterval(auto);
            auto=setInterval(showfn,3000);
            $('.slide ul').stop().animate({'left':"-="+1920},function(){
                $('.slide ul li:first').appendTo('.slide ul');
                $('.slide ul').css('left',-1920);
            });
        }
        var auto=setInterval(showfn, 3000);
        $('.prev').click(function(){
            clearInterval(auto);
            $('.slide ul').stop().animate({'left':"+="+1920},function(){
                $('.slide ul li:last').prependTo('.slide ul');
                $('.slide ul').css('left',-1920);
            });
        });
        $('.next').click(function(){
            clearInterval(auto);
            $('.slide ul').stop().animate({'left':"-="+1920},function(){
                $('.slide ul li:first').appendTo('.slide ul');
                $('.slide ul').css('left',-1920);
            });
        });
        $('.prev').mouseleave(function(){
            auto=setInterval(showfn,3000);
        });
        $('.next').mouseleave(function(){
            auto=setInterval(showfn,3000);
        });
    
    
        //주메뉴
        $('nav > ul > li').click(function(){
            if($(this).attr('class')!='active'){
                $('nav > ul > li').removeClass('active');
                $(this).addClass('active');
                $('.sub').animate({'left':-700},300);
                $(this).find('.sub').animate({'left':0}, 300, 'easeOutExpo');
            }else{
                $(this).removeClass('active');
               $(this).find('.sub').animate({'left':-700},300);
            }
        });
    
    });