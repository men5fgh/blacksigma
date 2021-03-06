package org.blacksigma.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.blacksigma.domain.NoticeAttachVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnailator;

@Controller
public class UploadController {
	private static final Logger logger = LoggerFactory.getLogger(UploadController.class);
	@GetMapping("/display")
	@ResponseBody
	public ResponseEntity<byte[]> getFile(String filename){
		logger.info("fileName : "+filename);
		
		File file = new File("c:\\Eclipse\\upload\\"+filename);
		
		logger.info("file : "+file);
		
		ResponseEntity<byte[]>result = null;
		
		try {
			HttpHeaders header = new HttpHeaders();
			header.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file),header,HttpStatus.OK);
		}catch(IOException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@GetMapping(value="uploadForm")
	public void uploadForm() {
		logger.info("uploadForm");
	}
	@PostMapping(value="uploadFormAction")
	public void uploadFormAction(MultipartFile[] uploadFile) {
		String uploadFolder="c:\\Eclipse\\upload";
		// for(int i=0;i<uploadFile.length;i++)
		for(MultipartFile multipartFile : uploadFile) {
			logger.info("Upload File Name : "+multipartFile.getOriginalFilename());
			logger.info("Upload File Size : "+multipartFile.getSize());
			
			File saveFile = new File(uploadFolder, multipartFile.getOriginalFilename());
			
			try {
				multipartFile.transferTo(saveFile);
			}catch(Exception e) {
				logger.info(e.getMessage());
			}
		}
	}
	@GetMapping(value="uploadAjax")
	public void uploadAjax() {
		logger.info("uploadAjax");
	}
	
	// getFolder????????? ??????(page 508)
	private String getFolder() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date(); //import java.util.Date; import ???????????? : 20210819
		System.out.println("date : "+date);
		// Thu Aug 19 16:08:39 KST 2021 -> 2021-08-19
		String str= sdf.format(date);
		System.out.println("str : "+str);
		// 2021-08-19 -> 2021\08\19
		return str.replace("-", File.separator);
	}
	// checkImageType????????? ??????(page 513)
	private boolean checkImageType(File file) {
		try {
			String contentType=Files.probeContentType(file.toPath());
			// ??????????????? ??? ????????? ????????????????????? ??????
			return contentType.startsWith("image");
		}catch(IOException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	
	@PostMapping(value="uploadAjaxAction",produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	public ResponseEntity<ArrayList<NoticeAttachVO>> uploadAjaxAction(MultipartFile[] uploadFile) {
		logger.info("uploadAjaxAction");
		ArrayList<NoticeAttachVO> list=new ArrayList<>();
		// ?????? ????????? ??? ??????
		String uploadFolder="c:\\Eclipse\\upload";
		
		String uploadFolderPath=getFolder(); // 2021\08\19
		// c:\\upload\\2021\\08\\19
		File uploadPath=new File(uploadFolder,uploadFolderPath);
		// c:\\upload\\2021\\08\\19????????? ?????????(false)
		if(uploadPath.exists()==false) {
			// c:\\upload\\2021\\08\\19?????? ??????(mkdirs())??????!
			uploadPath.mkdirs();
		}
		
		for(MultipartFile multipartFile : uploadFile) {
			logger.info("Upload File Name : "+multipartFile.getOriginalFilename());
			logger.info("Upload File Size : "+multipartFile.getSize());
			
			NoticeAttachVO attachDTO = new NoticeAttachVO();
			// Internet Explorer??? ????????? ?????????????????? ?????????(uploadFileName=000.png)
			String uploadFileName=multipartFile.getOriginalFilename();
			// Internet Explorer?????????????????? ?????????(uploadFileName=C:\\Users\\GreenArt\\Pictures\\000.png)
			
			uploadFileName=uploadFileName.substring(uploadFileName.lastIndexOf("\\")+1);
			//System.out.println("uploadFileName="+uploadFileName);
			attachDTO.setFilename(uploadFileName);
			
			UUID uuid=UUID.randomUUID();
			System.out.println("uuid.toString()"+uuid.toString());
			// 5e90a722-5811-4e2e-80a3-d8a5459bd9e6_000.png
			uploadFileName=uuid.toString()+"_"+uploadFileName;
			
			
			
			try {
				//   c:\\upload\\2021\\08\\19\\5e90a722-5811-4e2e-80a3-d8a5459bd9e6_000.png
				
				File saveFile = new File(uploadPath, uploadFileName);
				multipartFile.transferTo(saveFile);
				logger.info("uploadAjaxAction uploadPath : "+uploadPath);
				attachDTO.setUuid(uuid.toString());
				attachDTO.setUploadpath(uploadFolderPath);
				
				if(checkImageType(saveFile)) {// ???????????? ????????? ????????? ????????????,
					attachDTO.setFiletype(true);
					// FileOutputStream :????????? ?????? ????????? ????????????. ???????????? ????????? ?????? ???????????????.
					//                                                         c:\\upload\\2021\\08\\19\\s_5e90a722-5811-4e2e-80a3-d8a5459bd9e6_000.png
					FileOutputStream thumbnail = new FileOutputStream(new File(uploadPath,"s_"+uploadFileName));
					Thumbnailator.createThumbnail(multipartFile.getInputStream(),thumbnail,100,100);
					thumbnail.close();
				}
				list.add(attachDTO);
					
			}catch(Exception e) {
				logger.info(e.getMessage());
			}
		}// end for
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@GetMapping(value = "download", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	@ResponseBody
	public ResponseEntity<Resource> downloadFile(@RequestHeader("User-Agent") String userAgent, String fileName) {
		Resource resource = new FileSystemResource("c:\\Eclipse\\upload\\" + fileName);
		
		if(resource.exists() == false) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		String resourceName = resource.getFilename();
		
		// remove UUID
		String resourceOriginalName = resourceName.substring(resourceName.indexOf("_") + 1);
		
		HttpHeaders headers = new HttpHeaders();
		try {
			String downloadName = null;
			
			if(userAgent.contains("Trident")) {
				logger.info("IE Browser");
				downloadName = URLEncoder.encode(resourceOriginalName, "UTF-8").replaceAll("\\+", " ");
			}
			else if(userAgent.contains("Edge")) {
				logger.info("Edge Browser");
				downloadName = URLEncoder.encode(resourceOriginalName, "UTF-8");				
			}
			else {
				logger.info("Chrome Browser");
				downloadName = new String(resourceOriginalName.getBytes("UTF-8"), "ISO-8859-1");
			}
			
		logger.info("downloadName: " + downloadName);
		
		headers.add("Content-Disposition", "attachment; filename=" + downloadName);
		}
		catch(UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Resource>(resource, headers, HttpStatus.OK);
	}
}
