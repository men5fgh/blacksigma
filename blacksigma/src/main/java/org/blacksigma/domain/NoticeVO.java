package org.blacksigma.domain;

import java.util.ArrayList;
import java.util.Date;

import org.blacksigma.domain.NoticeAttachVO;

public class NoticeVO {
		// 게시판번호
		private int bno;
		// 제목
		private String title;
		// 내용
		private String content;
		// 작성자
		private String writer;
		// 작성일자
		private Date regdate;
		// 수정일자
		private Date updatedate;		
		// 댓글건수
		private int cnt;
		
		private ArrayList<NoticeAttachVO> attachList;
		
		public int getBno() {
			return bno;
		}

		public void setBno(int bno) {
			this.bno = bno;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public String getWriter() {
			return writer;
		}

		public void setWriter(String writer) {
			this.writer = writer;
		}

		public Date getRegdate() {
			return regdate;
		}

		public void setRegdate(Date regdate) {
			this.regdate = regdate;
		}

		public Date getUpdatedate() {
			return updatedate;
		}

		public void setUpdatedate(Date updatedate) {
			this.updatedate = updatedate;
		}

		public int getCnt() {
			return cnt;
		}

		public void setCnt(int cnt) {
			this.cnt = cnt;
		}

		public ArrayList<NoticeAttachVO> getAttachList() {
			return attachList;
		}

		public void setAttachList(ArrayList<NoticeAttachVO> attachList) {
			this.attachList = attachList;
		}

		@Override
		public String toString() {
			return "NoticeVO [bno=" + bno + ", title=" + title + ", content=" + content + ", writer=" + writer
					+ ", regdate=" + regdate + ", updatedate=" + updatedate + ", cnt=" + cnt + ", attachList="
					+ attachList + "]";
		}
		
}
