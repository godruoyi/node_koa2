var URLParse = function(){
	this.regular_title = '';
	this.regular_desc = '';
	this.regular_keyword = '';
	this.regular_content = /<[^>]+>/g;
	this.regular_aherf = /<a([\s]+|[\s]+[^<>]+[\s]+)href=(\"([^<>"\']*)\"|\'([^<>"\']*)\')>/gi;
}

/**
 * 
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
URLParse.prototype.getDomain = function(url){
	if(!url.startsWith('http')){
		url = 'http://' + url;
	}
	let t = url.indexOf('/', 8);
	url = url.substring(0, t)
	return 'http://open.iot.10086.cn';
}

URLParse.prototype.getTitle = function(str){
	return 'title';
}

URLParse.prototype.getContent = function(str){
	return str.replace(this.regular_content, "")
}

URLParse.prototype.getDescription = function(str){
	return 'desc';
}

URLParse.prototype.getkeyWord = function(str){
	return 'keyword';
}

/**
 * 解析文本所有a标签herf属性， 根据domian设置url
 * 
 * @param  string str
 * @param  string domain
 * @return array
 */
URLParse.prototype.getAllHerf = function(str, domain){
	console.log('-------------------------------------------------------------------------');
	let data = str.match(this.regular_aherf);
	let data2 = [];
	for(let x of data){
	    x = x.replace(new RegExp("\"",'gm'), "");
	    x = x.replace(new RegExp("'",'gm'), "");
	    x = x.replace(/(^\s+)|(\s+$)/g, "");
	    x = x.replace(/\s/g, "")
	    x = x.slice(x.indexOf('href')+5);
	    x = x.replace(">", "");
	    if(x.startsWith("/") || x.startsWith('#')){
	        x = domain + x;
	    } 
	    if(x.indexOf('http') != 0){
	    	x = domain + x;
	    }
	    console.log(x);
	    data2.push(x);
	}
	console.log('-------------------------------------------------------------------------');
	return data2;
}

module.exports = URLParse;