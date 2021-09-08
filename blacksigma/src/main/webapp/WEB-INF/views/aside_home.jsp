<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<aside id="aside">
    <audio id="audio" src='audio/Sample 01.mp3' preload="metadata"></audio>
    <div class="aside_in">
        <div class="aside_top">
            <h3><span></span>뮤직 플레이어</h3>
        </div>
        <div class="aside_main">
            <div class="aside_main_top">
                <h3><span></span>현재 재생 트랙</h3>
                <button id="repeat_all"></button>
            </div>
            <div class="music_image"></div>
            <p id="now_pause"></p>
            <div class="aside_controls">
                <div class="aside_slidebar">
                    <div id="seekslider"></div>
                    <div class="volumeslider">
                        <div id="volumeslider"></div>
                    </div>
                    <div class= "music_time">
                        <p id="music_currenttime"></p>
                        <p id="music_duration"></p>
                    </div>
                </div>
                <div class="aside_buttons">
                    <button id="aside_prev">이전곡</button>
                    <button id="aside_play">재생</button>
                    <button id="aside_volume">음량</button>
                    <button id="aside_next">다음곡</button>
                </div>
            </div>
        </div>
        <div id="play_list">    
            <h3><span></span>재생목록</h3>
            <ul>
            </ul>
        </div>
        <div class="aside_accordion">
            <button id="aside_accordion">music</button>
        </div>
    </div>
</aside>