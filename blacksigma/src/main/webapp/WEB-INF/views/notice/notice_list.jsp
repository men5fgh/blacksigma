<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<%@ include file="../head.jsp" %>

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/notice_list.css">
    <script src="${pageContext.request.contextPath}/js/notice_list.js"></script>
    
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
                        <li>번호</li>
                        <li>제목</li>
                        <li>파일</li>
                        <li>작성자</li>
                        <li>날짜</li>
                        <li>조회수</li>
                    </ul>
                    <c:forEach items="${noticeList}" var="notice">
						<ul class="board_list">
							<li>${notice.bno}</li>
							<li><a href="notice_view?index=${notice.bno}">${notice.title}</a></li>
							<li>
							</li>
							<li>${notice.writer}</li>
							<li><fmt:formatDate pattern="yyyy-MM-dd" value="${notice.regdate}" /></li>
							<li>${notice.cnt}</li>
						</ul>
					</c:forEach>
                </ul> <!-- board_table -->
                   
				<div class="board_button">
					<button class="list_button"><a href="http://localhost:8080/blacksigma/notice/notice_list?pageNum=1&amount=10"><span></span>목록</a></button>
					<button class="write_button"><a href="notice_write"><span></span>글쓰기</a></button>
				</div> <!-- .board_button -->
                
                <div class="board_pager">
					<ul>
						<c:if test="${pageMaker.prev}">
							<li class="paginate_button prev"><a href="notice_list?pageNum=${pageMaker.startPage-1}&amount=${pageMaker.cri.amount}">이전</a></li>
						</c:if>
						<c:forEach var="num" begin="${pageMaker.startPage}" end="${pageMaker.endPage}">
							<li class="paginate_button item"><a href="notice_list?pageNum=${num}&amount=${pageMaker.cri.amount}">${num}</a></li>
						</c:forEach>
						<c:if test="${pageMaker.next}">
							<li class="paginate_button next"><a href="notice_list?pageNum=${pageMaker.endPage+1}&amount=${pageMaker.cri.amount}">다음</a></li>
						</c:if>
					</ul>
				</div> <!-- .board_pager -->
				
				<div class="board_search">
					<form action="notice_list?pageNum=1&amount=10" method="get">
						<input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum}">
						<input type="hidden" name="amount" value="${pageMaker.cri.amount}">
						<select name="type">
							<option value="T">제목</option>
							<option value="C">내용</option>
							<option value="W">작성자</option>
							<option value="TCW">전체</option>
						</select>
						<input type="text" name="keyword" placeholder="검색어를 입력해주세요." class="search_textbar">
						<input type="submit" class="search_submit">
					</form>
				</div> <!-- board_search -->
           </div> <!-- .board -->           
    	</div> <!-- .main_contents -->
    </section> <!-- .main -->
</div> <!-- #container -->

<%@ include file="../aside.jsp" %>

<%@ include file="../footer.jsp" %>