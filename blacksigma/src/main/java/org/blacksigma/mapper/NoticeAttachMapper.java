package org.blacksigma.mapper;

import java.util.ArrayList;

import org.blacksigma.domain.NoticeAttachVO;

public interface NoticeAttachMapper {
	public void attachMapperNoticeInsert(NoticeAttachVO attach);
	public void attachMapperNoticeDelete(String uuid);
	public ArrayList<NoticeAttachVO> attachMapperNoticeFindByBno(int bno);
}
