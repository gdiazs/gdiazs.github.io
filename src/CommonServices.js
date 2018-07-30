import $ from 'jquery';

const ABOUT =  "about";
const CAREER =  "career";
const CONTACT =  "contact";

class CommonServices{

	fetchDataHtml (type, callback) {
		var urlData = "";
		
		if (type == ABOUT){
			urlData = "/about.html";
		}else if (type == CAREER){
			urlData = "/career.html";
		}else if (type == CONTACT){
			urlData = "/contact.html";
		}
		
		console.log(urlData);
		$.ajax({
			url: urlData,
			success: function (result) {
				callback(result);
			},
			
		});
	}
}

export default new CommonServices();

