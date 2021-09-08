$(function(){
    $(document).ready(function(){
        
        /* 헤더 아코디언 메뉴 */

        $("#header .gnb>ul>li").mouseenter(function(){
            $("#header").stop(true).animate({
                "background-color" : "white",
                "opacity" : 0.99
            }, "fast");

            $("#header .sublogo").attr("class", "sublogo_accordion");
            $("#header .mainlogo").attr("class", "mainlogo_accordion");

            $("#header .menu .util .search").attr("class", "search_accordion");
            $("#header .menu .util .login").attr("class", "login_accordion");
            $("#header .menu .util .alarm").attr("class", "alarm_accordion");

            $("#header .menu .gnb>ul>li a").stop(true).animate({
                "color" : "black"
            }, 100);

            $(".header_accordion").slideDown(300);
        })
        
        $("#header").mouseleave(function(){
            $("#header").stop(true).animate({
                "background-color" : "black",
                "opacity" : 0.95
            }, "fast");

            $("#header .sublogo_accordion").attr("class", "sublogo");
            $("#header .mainlogo_accordion").attr("class", "mainlogo");

            $("#header .menu .util .search_accordion").attr("class", "search");
            $("#header .menu .util .login_accordion").attr("class", "login");
            $("#header .menu .util .alarm_accordion").attr("class", "alarm");

            $("#header .menu .gnb>ul>li a").stop(true).animate({
                "color" : "white"
            }, 100);

            $(".header_accordion").slideUp(300);
        })
    }) 
})