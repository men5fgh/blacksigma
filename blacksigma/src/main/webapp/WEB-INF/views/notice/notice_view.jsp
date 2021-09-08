<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<%@ include file="../head.jsp" %>

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/notice_view.css">
    <script src="${pageContext.request.contextPath}/js/notice_view.js"></script>
    
<%@ include file="../header.jsp" %>

<div id="container">
    <section class="main_image">
        <img src="${pageContext.request.contextPath}/img/mic-1132528.jpg" alt="">
        <p>공지사항</p>
    </section> <!-- main_slide -->

    <section class="main">
        <div class="main_aside_menu">
            <ul>
                <div>
                    <span></span>
                    <h3>NOTICE</h3>
                </div>
                <li class="main_aside_on">
                    <a href="http://localhost:8080/blacksigma/notice/notice_list?pageNum=1&amount=10">
                        공지사항
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        공연안내
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        언론보도
                        <span></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        모집공고
                        <span></span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main_contents">
            <p>
                <span class="span_home"></span>
                <span class="span_arrow"></span>
                <span>NOTICE</span>
                <span class="span_arrow"></span>
                <span>공지사항</span>
            </p>
            <div class="board">
                <h3>공지사항</h3>
                <ul class="board_table">
                    <ul>
                        <li>제목</li>
                        <li>${notice.title}</li>
                        <input type="text" id="bno" name="bno" value="${notice.bno}">
                        
                        
                    </ul>
                    <ul>
                        <li>작성자</li>
                        <li>${notice.writer}</li>
                        <li>날짜</li>
                        <li><fmt:formatDate pattern="yyyy-MM-dd" value="${notice.regdate}" /></li>
                        <li>시간</li>
                        <li><fmt:formatDate pattern="HH:mm" value="${notice.regdate}" /></li>
                        <li>조회수</li>
                        <li>${notice.cnt}</li>
                    </ul>
                    <ul>
                    	<li>파일</li>
                        <li class="uploadFile">
                        	<ul>
                        	</ul>
                        </li>
                    </ul>
                    <div>
                    	<div class="uploadResult">
                    		<ul>
                    		</ul>
                    	</div>
                    	${notice.content}
                    </div>
                </ul>
            </div>
        </div>
    </section>
</div> <!-- #container -->

<%@ include file="../aside.jsp" %>

<%@ include file="../footer.jsp" %>