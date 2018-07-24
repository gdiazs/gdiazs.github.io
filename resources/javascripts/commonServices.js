var commonServices = (function(){
	var ABOUT =  "about";
	var CAREER =  "career";
	var CONTACT =  "contact";


	return {


		fetchDataHtml: function (type, callback) {
			var urlData = "";
			
			if (type == ABOUT){
				urlData = "/about.html";
			}else if (type == CAREER){
				urlData = "/career.html";
			}else if (type == CONTACT){
				urlData = "/contact.html";
			}
			


			$.ajax({
				url: urlData,
				success: function (result) {
					callback(result);
				},
				
			});
		},


	}
})($);