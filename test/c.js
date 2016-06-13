



var dogoto = function(url){

	console.log('url: ' + url);

	var nexturl = 'http://godruoyi.com?id=' + Math.random();
	setTimeout(function(){
		dogoto(nexturl);
	},1000);
}

dogoto('http://www.godruoyi.com3');