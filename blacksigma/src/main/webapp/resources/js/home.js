$(function(){
    $(document).ready(function(){
         
        /* 메인 슬라이더 */

        var pagerPlay = true;

        $(".main_slide_pager_next").click(function(){
            slideNext();
        })
        $(".main_slide_pager_prev").click(function(){
            slidePrev();
        })
        $(".main_slide_pager_view li").click(function(){
            if($(".main_slidebox li").is(":animated")){
                return false;
            }

            if($(this).index() == $(".main_slidebox li.on").index()){
                return false;
            }
            else{
                var clickIndex = $(this).index();
                var leftMove = $(".main_slidebox li.on").width(); // 뒤로 보내기 위해 가로너비를 알아냄
                var currentIndex = $(".main_slidebox li.on").index(); // 몇 번째 li를 보여주고 있는지도 알아냄
                var nextIndex = clickIndex; // currentIndex에다가 1을 더해주면 다음에 보여줄 li를 나타낼 수 있음
        
                if(nextIndex > $(".main_slidebox li").length - 1){ // length는 개수고, index는 0부터 시작하니까 1을 빼줌
                    nextIndex = 0;
                }
        
                $(".main_slidebox li").removeClass("on");
                $(".main_slide_pager_view li").removeClass("on");
                
                $(".main_slidebox li").eq(currentIndex).css({
                    "z-index" : 5
                })

                $(".main_slide_pager_view li").eq(nextIndex).addClass("on");
                $(".main_slidebox li").eq(nextIndex).addClass("on").css({
                        "z-index" : 9, // 앞에서 설정한 z-index 값보다 크게 설정
                        "left" : leftMove,
                        "display" : "block" 
                })
                .animate({
                    "left" : 0
                }, 500, function(){
                    $(".main_slidebox li").eq(currentIndex).css({
                        "display" : "none"
                    })
                })
            }
        })
        
        setInterval(function(){ // ※ 내가 지정한 시간의 간격으로, 계속해서 반복하게 만듬
            if(pagerPlay == true){
                slideNext();    
            }
            else{
                return;
            }
        }, 5000) // 내가 지정한 시간의 간격으로, 계속해서 반복하게 만듬(여기선 1500밀리초, 즉 1.5초) ※ 

        $(".pager_play").click(function(){
            if(pagerPlay == true){
                $(".pager_play").attr("class", "pager_pause")
                pagerPlay = false;    
            }
            else{
                $(".pager_pause").attr("class", "pager_play")
                pagerPlay = true;
            }
            
        })

        function slideNext(){
    
            if($(".main_slidebox li").is(":animated")){
                return false;
            }
            var leftMove = $(".main_slidebox li.on").width(); // 뒤로 보내기 위해 가로너비를 알아냄
            var currentIndex = $(".main_slidebox li.on").index(); // 몇 번째 li를 보여주고 있는지도 알아냄
            var nextIndex = currentIndex + 1; // currentIndex에다가 1을 더해주면 다음에 보여줄 li를 나타낼 수 있음
    
            if(nextIndex > $(".main_slidebox li").length - 1){ // length는 개수고, index는 0부터 시작하니까 1을 빼줌
                nextIndex = 0;
            }
    
            $(".main_slidebox li").removeClass("on");
            $(".main_slide_pager_view li").removeClass("on");
            
            $(".main_slidebox li").eq(currentIndex).css({
                "z-index" : 5
            })

            $(".main_slide_pager_view li").eq(nextIndex).addClass("on");
            $(".main_slidebox li").eq(nextIndex).addClass("on").css({
                    "z-index" : 9, // 앞에서 설정한 z-index 값보다 크게 설정
                    "left" : leftMove,
                    "display" : "block" 
            })
            .animate({
                "left" : 0
            }, 500, function(){
                $(".main_slidebox li").eq(currentIndex).css({
                    "display" : "none"
                })
            })

        }
    
        function slidePrev(){
            if($(".main_slidebox li").is(":animated")){
                return false;
            }
            
            var leftMove = $(".main_slidebox li.on").width() * -1;
            var currentIndex = $(".main_slidebox li.on").index();
            var prevIndex = currentIndex - 1;
    
            $(".main_slidebox li").removeClass("on");
            $(".main_slide_pager_view li").removeClass("on");

            $(".main_slidebox li").eq(currentIndex).css({
                "z-index" : 5
            })
            $(".main_slide_pager_view li").eq(prevIndex).addClass("on");
            $(".main_slidebox li").eq(prevIndex).addClass("on").css({
                "left" : leftMove,
                "z-index" : 9,
                "display" : "block"
            })
            .animate({
                "left" : 0
            }, 500, function(){
                $(".main_slidebox li").eq(currentIndex).css({
                    "display" : "none"
                })
            })
        }
    }) 
})