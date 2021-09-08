package org.blacksigma.service;

import java.util.ArrayList;

import org.blacksigma.domain.NoticeVO;
import org.blacksigma.domain.Criteria;
import org.blacksigma.domain.NoticeAttachVO;

public interface NoticeService {
	// 게시판 글쓰기(register)
	public void serviceNoticeWrite(NoticeVO notice);
	// 게시판 상세페이지(get)
	public NoticeVO serviceNoticeView(int notice);
	// 게시판 글수정(modify)

	public boolean serviceNoticeModify(NoticeVO notice);
	// 게시판 글삭제(remove)
	public boolean serviceNoticeDelete(int bno);
	// 게시판 글목록 리스트(getList)
	public ArrayList<NoticeVO> serviceNoticeList();
	
	public ArrayList<NoticeVO> serviceNoticeListWithPaging(Criteria cri);
	// 게시판 글목록 리스트+페이징처리하는데 필요한 전체데이터
	public int serviceNoticeGetTotalCount(Criteria cri);
	
	public ArrayList<NoticeAttachVO> serviceNoticeAttachList(int bno);

}