$(function(){
    $(document).ready(function(){
        
        /* 어사이드 아코디언 */

        var aAccordionViewing = false;

        $(".aside_accordion").on("click", function(){
            if(aAccordionViewing == false){
                $("#aside").stop(true).animate({
                    "left" : "0px"
                }, 300)
                aAccordionViewing = true;
            }
            else{
                $("#aside").stop(true).animate({
                    "left" : "-200px"
                }, 300)
                aAccordionViewing = false;
            }
        })

        // #aside 아코디언 메뉴 관련

        var nowPlaying = false;
        var musicSrc = ['../audio/Sample 01.mp3', '../audio/Sample 02.mp3', '../audio/Sample 03.mp3', '../audio/Sample 04.mp3', '../audio/Sample 05.mp3']; //곡 이름 순서대로 저장
        var musicSrcName = ["Sample_01", "Sample_02", "Sample_03", "Sample_04", "Sample_05"]
        var musicSrcNum = 0
        var musicHistoryPrev = [];
        var musicHistoryNext = [];
        
                
        $("#now_pause").html(musicSrcName[musicSrcNum], 300);

        // 뮤직 플레이어 기본설정

        for(var playlistCount = 0; playlistCount < musicSrcName.length; playlistCount++){
            $("#play_list ul").append("<li>" + musicSrcName[playlistCount] + "</li>");
        }

        $("#audio")[0].onloadedmetadata = function(){

            timeCheck();

            $("#seekslider").slider({
                orientation: "horizantal",
                animate: true, // 슬라이드 중간을 선택했을 때의 애니메이션
                value: 0, // 초기값
                range: "min", // 색강조 (여기서는 작은 숫자에 강조를 준다는 뜻)
                step: 1, // 20 단위로 움직임
                min: 0, // 최소값이 10
                max: 100, // 최대값이 90
    
                slide: function(event, ui){ // event가 발생할 때 그값을 ui로 받는다
                    var sliderControl = $("#audio")[0].duration * (ui.value / 100)
                    $("#audio")[0].currentTime = sliderControl;
                } 
            })
            
            $("#audio").on("timeupdate", function(){
                var sliderUpdate = $("#audio")[0].currentTime * (100 / $("#audio")[0].duration);
                $("#seekslider").slider("value", sliderUpdate);
            });

            $("#audio").on("timeupdate", timeCheck);
    
        }

        $("#volumeslider").slider({
            orientation: "horizantal",
            animate: true, // 슬라이드 중간을 선택했을 때의 애니메이션
            value: 0.51, // 초기값
            range: "min", // 색강조 (여기서는 작은 숫자에 강조를 준다는 뜻)
            step: 0.01, // 20 단위로 움직임
            min: 0, // 최소값이 10
            max: 1, // 최대값이 90

            slide: function(event, ui){ // event가 발생할 때 그값을 ui로 받는다
                $("#audio")[0].volume = ui.value;

                if(ui.value == 0){
                    $("#aside_volumesmall").attr("id", "aside_muted");
                }
                else if(ui.value > 0 && ui.value < 0.5){
                    $("#aside_muted").attr("id", "aside_volumesmall");
                    $("#aside_volume").attr("id", "aside_volumesmall");
                }
                else if(ui.value > 0.5){
                    $("#aside_muted").attr("id", "aside_volume");
                    $("#aside_volumesmall").attr("id", "aside_volume");
                }
            } 
        })
        
        // 재생목록 기본설정

        $("#play_list ul li").eq(musicSrcNum).css({
            borderTopColor : "rgba(255, 255, 255, 0.9)",
            borderTopWidth : "1px",
            borderBottomColor : "rgba(255, 255, 255, 0.9)",
            borderBottomWidth : "1px",
            backgroundColor : "rgba(50, 50, 50, 0.7)",
        })
        $("#play_list ul li").on("click", function(){            
            musicHistoryPrev.push(musicSrcNum);
            var playlistIndex = $(this).index("#play_list ul li");
            musicSrcNum = playlistIndex;
            musicPlay();
            playlistPlaying();
        })
        $("#play_list ul li").on("mouseover", function(){
            if($(this).index("#play_list ul li") != musicSrcNum){
                $(this).stop(true).animate({
                    borderTopColor : "rgba(255, 255, 255, 0.9)",
                    borderTopWidth : "1px",
                    borderBottomColor : "rgba(255, 255, 255, 0.9)",
                    borderBottomWidth : "1px",
                    backgroundColor : "rgba(50, 50, 50, 0.7)",
                }, 100)
            }
        })
        $("#play_list ul li").on("mouseout", function(){
            if($(this).index("#play_list ul li") != musicSrcNum){
                $(this).stop(true).animate({
                    borderTopColor : "rgba(255, 255, 255, 0.1)",
                    borderTopWidth : "1px",
                    borderBottomColor : "rgba(255, 255, 255, 0.1)",
                    borderBottomWidth : "1px",
                    backgroundColor : "transparent",
                }, 100)
            }
        })
        
        // 재생목록 재생설정

        var repeatAll = true;
        var repeatOne = false;
        var shuffle = false; 

        $(".aside_main_top button").on("click", repeatClick);

        function repeatClick(){
            if(repeatAll == true){
                $(this).attr("id", "repeat_one")
                repeatAll = false;
                repeatOne = true;
            }
            else if(repeatOne == true){
                $(this).attr("id", "shuffle")
                repeatOne = false;
                shuffle = true;
            }
            else{
                $(this).attr("id", "repeat_all")
                shuffle = false;
                repeatAll = true;
            }
        }

        $("#aside_play").on("click", playClick);
        
        function playClick(){
            if(nowPlaying == false){
                $("#audio")[0].play();
                $(this).attr("id", "aside_pause")
                $("#now_pause").attr("id", "now_playing")
                nowPlaying = true;
                playlistPlaying();
            }
            else{
                $("#audio")[0].pause();
                $(this).attr("id", "aside_play")
                $("#now_playing").attr("id", "now_pause")
                nowPlaying = false;
                playlistPlaying();
            }
        }

        // 셔플, 재생 관련

        $("#aside_volume").on("click", function(){
            $(".volumeslider").stop(true).fadeIn(300);
        })
        $(".aside_controls").on("mouseup", function(){
            $(".volumeslider").stop(true).fadeOut(300);
        })
        
        // 볼륨 관련
        
        $("#aside_prev").on("click", prevClick)
        
            function prevClick(){
                if($("#audio")[0].currentTime < 3){
                    if(repeatAll == true || repeatOne == true){
                        if(musicSrcNum == 0){
                            musicHistoryPrev.push(musicSrcNum);
                            musicSrcNum = musicSrc.length - 1;
                            musicPlay();
                            playlistPlaying();
                            console.log(musicSrcNum)
                        }       
                        else{
                            musicHistoryPrev.push(musicSrcNum);
                            musicSrcNum = musicSrcNum - 1;
                            musicPlay();
                            playlistPlaying();
                            console.log(musicSrcNum)
                        }
                    }
                    else{
                        if(musicHistoryPrev.length != 0){
                            var lastMusicPrev = musicHistoryPrev.pop();
        
                            musicSrcNum = lastMusicPrev;
                            musicPlay();
                            playlistPlaying();
                        }
                        else{
                            musicHistoryNext.push(musicSrcNum);
                            var originalMusicNum = musicSrcNum;
                            var exceptMusicSrc = musicSrc.splice(originalMusicNum, 1);
                            var exceptMusicName = musicSrcName.splice(originalMusicNum, 1);
                            var musicSrcRandom = Math.floor(Math.random() * (musicSrc.length - 0.1));
        
                            musicSrcNum = musicSrcRandom;
                            musicPlay();
                            
                            musicSrc.splice(originalMusicNum, 0, exceptMusicSrc);
                            musicSrcName.splice(originalMusicNum, 0, exceptMusicName);
                            
                            if(originalMusicNum <= musicSrcNum){
                                musicSrcNum = musicSrcNum + 1;
                            }
                            
                            playlistPlaying();
                        }
                    }
                }
                else{
                    $("#audio")[0].currentTime = 0;
                    $("#audio")[0].play();
                }    
                
            }

        $("#aside_next").on("click", nextClick)
        
        function nextClick(){
            if(repeatAll == true || repeatOne == true){
                musicHistoryPrev.push(musicSrcNum);
                musicSrcNum = (musicSrcNum + 1) % musicSrc.length;
                musicPlay();
                playlistPlaying();
            }
            else{
                if(musicHistoryNext.length != 0){
                    var lastMusicNext = musicHistoryNext.pop();

                    musicSrcNum = lastMusicNext;
                    musicPlay();
                    playlistPlaying();
                }
                else{
                    musicHistoryPrev.push(musicSrcNum);
                    var originalMusicNum = musicSrcNum;
                    var exceptMusicSrc = musicSrc.splice(originalMusicNum, 1);
                    var exceptMusicName = musicSrcName.splice(originalMusicNum, 1);
                    var musicSrcRandom = Math.floor(Math.random() * (musicSrc.length - 0.1));
    
                    musicSrcNum = musicSrcRandom;
                    musicPlay();
                    musicSrc.splice(originalMusicNum, 0, exceptMusicSrc);
                    musicSrcName.splice(originalMusicNum, 0, exceptMusicName);
                    
                    if(originalMusicNum <= musicSrcNum){
                        musicSrcNum = musicSrcNum + 1;
                    }
                    
                    playlistPlaying();
                }
            }
        }

        $("#audio").on("ended", musicEnded)

        function musicEnded(){
            if(repeatAll == true){
                musicHistoryPrev.push(musicSrcNum);
                musicSrcNum = (musicSrcNum + 1) % musicSrc.length;
                musicPlay();
                playlistPlaying();
            }
            else if(repeatOne == true){
                $("#audio")[0].currentTime = 0;
                $("#audio")[0].play();
            }
            else{
                musicHistoryPrev.push(musicSrcNum);
                var musicSrcRandom = Math.floor(Math.random() * (musicSrc.length + 0.9));
                musicSrcNum = musicSrcRandom;
                musicPlay();
                playlistPlaying();
            }
        }
        
        // 이전 곡, 다음 곡 재생 관련

        function musicPlay(){
            $("#audio").attr("src", musicSrc[musicSrcNum]);
            $("#audio")[0].play();
            $("#aside_play").attr("id", "aside_pause")
            $("#now_pause").attr("id", "now_playing")
            $("#now_playing").html(musicSrcName[musicSrcNum]);
            nowPlaying = true;
        }
        
        function playlistPlaying(){
            if(nowPlaying == false){
                $("#play_list ul").find("li:eq(" + musicSrcNum + ")").stop(true).animate({
                    borderTopColor : "rgba(255, 255, 255, 0.9)",
                    borderTopWidth : "1px",
                    borderBottomColor : "rgba(255, 255, 255, 0.9)",
                    borderBottomWidth : "1px",
                    borderRightColor : "",
                    borderRightWidth : "",
                    "color" : "rgba(255, 255, 255, 0.8)"
                }, 100);
                
                $("#play_list ul li span").remove();
            }
            else{
                $("#play_list ul li").stop(true).animate({
                    borderTopColor : "rgba(255, 255, 255, 0.1)",
                    borderTopWidth : "1px",
                    borderBottomColor : "rgba(255, 255, 255, 0.1)",
                    borderBottomWidth : "1px",
                    borderRightColor : "",
                    borderRightWidth : "",
                    backgroundColor : "transparent",
                    "color" : "rgba(255, 255, 255, 0.8)"
                }, 100);
                
                $("#play_list ul li span").remove();
                
                $("#play_list ul").find("li:eq(" + musicSrcNum + ")").stop(true)
                .animate({
                    borderTopColor : "rgba(255, 255, 255, 0.9)",
                    borderTopWidth : "1px",
                    borderBottomColor : "rgba(255, 255, 255, 0.9)",
                    borderBottomWidth : "1px",
                    borderRightColor : "#2dcafe",
                    borderRightWidth : "10px",
                    backgroundColor : "rgba(50, 50, 50, 0.7)",
                    "color" : "#2dcafe"
                }, 100)
                .append("<span class:'playlist_playing'>재생중</span>");
            }
        }

        function timeCheck(){
            var audioCurrentTime = $("#audio")[0].currentTime;
            var currentTimeMinute = Math.floor(audioCurrentTime / 60);
            var currentTimeSecond = Math.floor(audioCurrentTime % 60);

            if(currentTimeSecond < 10){
                currentTimeSecond = "0" + currentTimeSecond;
            }

            $("#music_currenttime").text(currentTimeMinute + ":" + currentTimeSecond);
            
            var audioDuration = $("#audio")[0].duration;
            //alert(typeof(audioDuration));
            var durationMinute = Math.floor(audioDuration / 60);
            var durationSecond = Math.floor(audioDuration % 60);

            if(durationSecond < 10){
                durationSecond = "0" + durationSecond;
            }

            
            $("#music_duration").text(durationMinute + ":" + durationSecond);
        }
    }) 
})