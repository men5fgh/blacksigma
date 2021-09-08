package org.blacksigma.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

import org.blacksigma.domain.Criteria;
import org.blacksigma.domain.NoticeAttachVO;
import org.blacksigma.domain.NoticeVO;
import org.blacksigma.domain.PageDTO;
import org.blacksigma.service.NoticeService;

@Controller
@RequestMapping("notice")
public class NoticeController {
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	@Autowired
	private NoticeService service;
	
	@GetMapping("notice_list")
	public void controllerNoticeList(Model model, Criteria cri) {
		logger.info("controllerNoticeList");
		
		int count=service.serviceNoticeGetTotalCount(cri);
		
		model.addAttribute("noticeList", service.serviceNoticeListWithPaging(cri));
		model.addAttribute("pageMaker", new PageDTO(cri, count));
	}
		
	@GetMapping("notice_view")
	public void controllerNoticeView(@RequestParam("index") int bno, Model model) {
		logger.info("controllerNoticeView");
		model.addAttribute("notice", service.serviceNoticeView(bno));
	}
	
	@GetMapping("notice_write")
	public void controllerNoticeWriteGet() {
		logger.info("controllerNoticeWriteGet");
	}
	
	@PostMapping("notice_write")
	public String controllerNoticeWritePost(NoticeVO notice) {
		logger.info("controllerNoticeWritePost");
		
		if(notice.getAttachList()!=null) {	
			// 그 파일에 대한 정보를 for문을 이용해서 가져와라
			notice.getAttachList().forEach(attach->logger.info("attach 값 : "+attach));
		}
		
		service.serviceNoticeWrite(notice);
		
		return "redirect:http://localhost:8080/blacksigma/notice/notice_list?pageNum=1&amount=10";
	}
	
	@GetMapping(value="getAttachList", produces=MediaType.APPLICATION_JSON_UTF8_VALUE) // select라서 get을 사용함
	@ResponseBody
	public ResponseEntity<ArrayList<NoticeAttachVO>> getAttachList(int bno){
		logger.info("getAttachList = " + bno);
		
		return new ResponseEntity<>(service.serviceNoticeAttachList(bno), HttpStatus.OK);
	}
}
