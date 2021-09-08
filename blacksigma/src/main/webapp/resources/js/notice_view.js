$(document).ready(function(){


	var bno = $("#bno").val();
	console.log(bno);
		
	$.getJSON("/blacksigma/notice/getAttachList", {bno: bno}, function(arr){
		console.log(arr);
		
		var str = "";
		var str2 = "";
		
		$(arr).each(function(i, attach){
			// image type
			if(attach.filetype){
				var fileCallPath=encodeURIComponent(attach.uploadpath+"/s_"+attach.uuid+"_"+attach.filename);
				
				str+="<li data-path='"+ attach.uploadpath +"'";
				str+="data-uuid='" + attach.uuid + "' data-filename='" + attach.filename + "' data-type='" + attach.filetype + "'><div>";
				str+="<img src='/blacksigma/display?filename="+fileCallPath+"'>";
				str+="</div></li>"; 
			}
			else{// 그렇지 않은 형태
				var fileCallPath=encodeURIComponent(attach.uploadpath+"/s_"+attach.uuid+"_"+attach.filename);
 				
				str2+="<li data-path='"+ attach.uploadpath +"'";
				str2+="data-uuid='" + attach.uuid + "' data-filename='" + attach.filename + "' data-type='" + attach.filetype + "'><div>";
				str2+="<img src='../img/diskette_blue.png'>";
				str2+=attach.filename;				
				str2+="</div></li>";
			}
		});
		$(".uploadResult ul").html(str);
		$(".uploadFile ul").html(str2);
	}); // end getJSON
	
	$(".uploadFile").on("click", "li", function(e){

	var liObj = $(this);

	var path = encodeURIComponent(liObj.data("path") + "/" + liObj.data("uuid") + "_" + liObj.data("filename"));
	
	self.location = "/blacksigma/download?fileName="+path;
	

	})
})