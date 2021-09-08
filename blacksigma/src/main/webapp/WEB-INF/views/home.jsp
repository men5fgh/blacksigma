<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<%@ include file="head_home.jsp" %>

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/home.css">
    <script src="${pageContext.request.contextPath}/js/home.js"></script>
    
<%@ include file="header.jsp" %>

<%@ include file="aside_home.jsp" %>

<div id="container">
    <section class="main_slide">
        <div class="main_slide_pager">
            <div class="main_slide_pager_button">
                <p class="main_slide_pager_prev">이전 슬라이드</p>
                <p class="main_slide_pager_next">다음 슬라이드</p>
            </div>
            <ul class="main_slide_pager_view">
                <li class="on"></li>
                <li></li> 
                <p class="pager_play"></p>
            </ul>
        </div>
        <ul class="main_slidebox">
            <li class="main_slide1 on">
                <a href="#">
                    <div class="main_img">
                        <img src="img/mainslide1_img.jpg" alt="">
                        <div class="main_text_box">
                            <div class="main_text_innerbox">
                                <div class="main_text">
                                    <p class="mt_1">NOTICE</p>
                                    <p>BLACK ∑</p>
                                    <p class="mt_3">공연안내</p>    
                                </div> <!-- .main_text -->
                            </div> <!-- .main_text_innerbox -->
                        </div> <!-- .main_text_box -->
                    </div> <!-- .main_img -->
                </a>
            </li>

            <li class="main_slide2">
                <div class="main_img">
                    <a href="#"><img src="img/mainslide2_img.jpg" alt=""></a>
                    <div class="main_text_box">
                        <div class="main_text_innerbox">
                            <div class="main_text">
                                <p class="mt_1">NOTICE</p>
                                <p>BLACK ∑</p>
                                <p class="mt_3">모집안내</p>    
                            </div> <!-- .main_text -->
                        </div> <!-- .main_text_innerbox -->
                    </div> <!-- .main_text_box -->
                </div> <!-- .main_img -->
            </li>
        </ul>
    </section> <!-- main_slide -->

    <section class="main1">
        <div class="main_in">
            <div class="mark1"></div> <!-- .mark1 -->
            <h3>월별 공연정보</h3>
            <div class="calendar">
                <span class="prev_month">작년</span> <!-- .prev_month -->
                <p>2021년</p>
                <span class="next_month">내년</span> <!-- .next_month -->
                <ul>
                    <li><a href="#">1월</a></li>
                    <li><a href="#">2월</a></li>
                    <li><a href="#">3월</a></li>
                    <li><a href="#">4월</a></li>
                    <li><a href="#">5월</a></li>
                    <li><a href="#">6월</a></li>
                    <li><a href="#">7월</a></li>
                    <li><a href="#">8월</a></li>
                    <li><a href="#">9월</a></li>
                    <li><a href="#">10월</a></li>
                    <li><a href="#">11월</a></li>
                    <li><a href="#">12월</a></li>
                </ul>
            </div> <!-- .calendar -->
        </div> <!-- .main_in -->
    </section> <!-- .main1 -->

    <section class="main2">
        <div class="main_in">
            <div class="mark2"></div> <!-- .mark2 -->
            <h2>블랙시그마 소식</h2>
            <ul>
                <li>
                    <a href="#">
                        <h3>[공연안내]<span>2021.XX.XX</span></h3>
                        <p>2021.XX.XX ~ 2021.XX.XX : XXXX 공연안내</p>
                        <p>2021년 XX월 XX일부터 XX월 XX일까지 이루어지는 공연에 대한 안내입니다.</p>
                    </a>
                </li>
                <span></span>
                <li>
                    <a href="#">
                        <h3>[공지사항]<span>2021.XX.XX</span></h3>
                        <p>2021.XX.XX ~ 2021.XX.XX : XXXX 이용안내</p>
                        <p>2021년 XX월 XX일부터 XX월 XX일까지 이루어지는 시설물 이용에 대한 안내입니다.</p>
                    </a>
                </li>
                <span></span>
                <li>
                    <a href="#">
                        <h3>[언론보도]<span>2021.XX.XX</span></h3>
                        <p>[XX일보] - "기사제목"</p>
                        <p>2021년 XX월 XX일에 보도된 기사에 대한 안내입니다.</p>
                    </a>
                </li>
                <span></span>
                <li>
                    <a href="#">
                        <h3>[모집공고]<span>2021.XX.XX</span></h3>
                        <p>2021년도 블랙시그마 신입부원 모집안내</p>
                        <p>2021년도 블랙시그마 신입부원 모집에 대한 안내입니다.</p>
                    </a>
                </li>
            </ul>
            <div class="more"><a href="#">더보기</a></div> <!-- .more -->
        </div> <!-- .main_in -->
    </section> <!-- .main2 -->

    <section class="main3">
        <div class="main_in">
            <div class="mark3"></div> <!-- .mark3 -->
            <h2>블랙시그마 갤러리</h2>
            <div class="gallery">
                <div class="video">
                    <h3>공연영상</h3>
                    <iframe width="608" height="368" src="https://www.youtube.com/embed/59dEBcCVTig" wmode="Opaque" frameborder="0" allowfullscreen></iframe>
                    <div class="more"><a href="#">더보기</a></div> <!-- .more -->
                </div> <!-- .video -->
                <div class="photo">
                    <h3>사진</h3>
                    <img src="img/mainslide1_img.jpg" alt="">
                    <div class="more"><a href="#">더보기</a></div> <!-- .more -->
                </div> <!-- .photo -->
            </div> <!-- .gallery -->
            <div class="more"><a href="#">더보기</a></div> <!-- .more -->
        </div> <!-- .main_in -->
    </section> <!-- .main3 -->

</div> <!-- #container -->

<%@ include file="footer.jsp" %>
