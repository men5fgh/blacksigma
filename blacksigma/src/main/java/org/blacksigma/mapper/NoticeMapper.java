package org.blacksigma.mapper;

import java.util.ArrayList;

import org.blacksigma.domain.NoticeVO;
import org.apache.ibatis.annotations.Param;
import org.blacksigma.domain.Criteria;

public interface NoticeMapper {
	public ArrayList<NoticeVO> mapperNoticeList();
	
	public ArrayList<NoticeVO> mapperNoticeListWithPaging(Criteria cri);

	public int mapperNoticeGetTotalCount(Criteria cri);
	
	public NoticeVO mapperNoticeView(int bno);
	
	public void insert(NoticeVO notice);
	
	public void mapperNoticeWrite(NoticeVO notice);
	
	public boolean mapperNoticeDelete(int bno);
	
	public boolean mapperNoticeModify(NoticeVO notice);
	
	public void mapperNoticeUpdateCnt(int bno);
}
