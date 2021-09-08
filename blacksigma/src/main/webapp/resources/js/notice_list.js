$(function(){
    $(document).ready(function(){
                
        /* 주소값 가져오기 */

        var getParameters = function (paramName) {
        	var returnValue;
        	var url = location.href;
        	var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        	
        	for (var i = 0; i < parameters.length; i++) {
        		var varName = parameters[i].split('=')[0];
        		if (varName.toUpperCase() == paramName.toUpperCase()) {
        			returnValue = parameters[i].split('=')[1];
        			return decodeURIComponent(returnValue);
        		}
        	}
        };

        for(var i=0; i<=11; i++){
        	if(getParameters('pageNum') == $(".board_pager .item").eq(i).text()){
        		$(".board_pager .item").eq(i).attr("class", "item_on")
        	}
        };
        
        for(var i=0; i<=11; i++){
        	if(getParameters('keyword') != null){
        		var url = $(".board_pager .paginate_button a").eq(i).attr('href');
        		url += '&type=' + getParameters("type") + '&keyword=' + getParameters("keyword");
        		
        		$(".board_pager .paginate_button a").eq(i).attr('href', url);
        	}

        	$(".board_search .search_textbar").val(getParameters('keyword'));
    
        };
        
		if(getParameters('type') != null){
			$(".board_search select").val(getParameters('type'));
		};
		
    }) 
})