<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<%@ include file="../head.jsp" %>

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/notice_write.css">
    <script src="${pageContext.request.contextPath}/js/notice_write.js"></script>
        
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
                        <form role="form" action="notice_write" method="post">
	                        <ul class="board_table">
	                            <ul>
	                            	<li>제목</li>
	                                <li><input type="text" name="title" placeholder="제목을 입력해주세요."></li>
	                            </ul>
	                            <ul>
	             	            	<li>파일</li>
	                            	<li>
	                            		<input type="file" name="uploadFile" multiple>
	                            		<div class="uploadResult">
											<ul>
											</ul>
										</div>
	                            	</li>
	                            </ul>
	             	            <ul class="areatext">
	             	            	<li>내용</li>
	                            	<li><textarea rows="10" cols="20" name="content" placeholder="내용을 입력해주세요."></textarea><li>
	                            </ul>
	                        </ul>
	                        <a href="http://localhost:8080/blacksigma/notice/notice_list?pageNum=1&amount=10" class="list_button"><span></span>목록</a>
	                        <input type="text" name="writer" value="운영자">
	                        <button type="submit"><span></span>등록</button>
                    	</form>
                    </div>
                    <button><a href="http://localhost:8080/blacksigma/notice/notice_list?pageNum=1&amount=10"><span></span>목록</a></button>
                </div>
            </section>
	
        </div> <!-- #container -->
        
<%@ include file="../aside.jsp" %>

<%@ include file="../footer.jsp" %>
      