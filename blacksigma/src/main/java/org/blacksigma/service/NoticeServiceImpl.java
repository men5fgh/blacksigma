package org.blacksigma.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.blacksigma.domain.NoticeVO;
import org.blacksigma.domain.Criteria;
import org.blacksigma.domain.NoticeAttachVO;

import java.util.ArrayList;

import org.blacksigma.mapper.NoticeAttachMapper;
import org.blacksigma.mapper.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {
	private static final Logger logger = LoggerFactory.getLogger(NoticeServiceImpl.class);
	
	@Autowired // @Autowired는 자바의 BoardMapper mapper = new BoardMapper와 같은 개념.
	private NoticeMapper mapper;
	
	@Autowired
	private NoticeAttachMapper attachMapper;
	
	// 게시판 상세페이지(get) 구현부
		@Transactional
		public NoticeVO serviceNoticeView(int bno) {
			logger.info("serviceNoticeView");
			mapper.mapperNoticeUpdateCnt(bno);
			return mapper.mapperNoticeView(bno);
		}
		
		
		// 게시판 글수정(modify) 구현부
		
		public boolean serviceNoticeModify(NoticeVO notice) {
			logger.info("serviceNoticeModify");
			return mapper.mapperNoticeModify(notice);
		}
		// 게시판 글삭제(remove) 구현부
		public boolean serviceNoticeDelete(int bno) {
			logger.info("serviceNoticeDelete");
			return mapper.mapperNoticeDelete(bno);
		}
		// 게시판 글목록 리스트(getList) 구현부
		public ArrayList<NoticeVO> serviceNoticeList() {
			logger.info("serviceNoticeList");
			return mapper.mapperNoticeList();
		}
		
		// 게시판 글목록 리스트+페이징 처리(getListWithPaing) 구현부
		public ArrayList<NoticeVO> serviceNoticeListWithPaging(Criteria cri) {
			return mapper.mapperNoticeListWithPaging(cri);
		}
		
		public int serviceNoticeGetTotalCount(Criteria cri) {
			return mapper.mapperNoticeGetTotalCount(cri);
		}
		
		@Transactional
		public void serviceNoticeWrite(NoticeVO notice) {
			logger.info("serviceNoticeWrite");
			mapper.mapperNoticeWrite(notice);
			
			// 사용자가 파일 선택을 하지 않았을 때는 
			// tbl_attach 테이블에 insert를 할 필요가 없으므로 
			if(notice.getAttachList()==null||notice.getAttachList().size()<=0) {
				return; // 밑으로 내려가서 실행하지 않도록 해야함
			}
			notice.getAttachList().forEach(attach->{
				// tbl_attach 테이블 insert
				attach.setBno(notice.getBno());
				attachMapper.attachMapperNoticeInsert(attach);
				
			});
		}
		
		// 게시판 상세페이지 파일업로드 한 이미지에 대한 데이터를 처리
		public ArrayList<NoticeAttachVO> serviceNoticeAttachList(int bno){
			logger.info("serviceNoticeAttachList");
			return attachMapper.attachMapperNoticeFindByBno(bno);
		}

		
}
