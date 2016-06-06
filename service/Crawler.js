
let url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async");

let PaserUrl2 = require('./utils/UrlParse.js');
let PaserUrl = new PaserUrl2();


let doWork = function(pageUrl){

	let promise = new Promise(function(resove, reject){
		superagent.get(pageUrl).end(function(err, result){
		if(err){
			reject(new Error('error ...'));
		}

		let $ = cheerio.load(result.text);
		resove($);
		

		

		
		// let title = $('title').text();
		// let dec = $('meta[name="description"]').attr('content');
		// let keyword = $('meta[name="keywords"]').attr('content');
		
		// $('a[href!="javascript:;"][href!=""]').map(function(i, self){
		// 	let _this = $(self);
		// 	let href = _this.attr('href');
		// 	if(href.startsWith('/')){
		// 		href = domain + href;
		// 	}
		// 	if(!href.startsWith('http')){
		// 		href = domain + href;
		// 	}
		// 	urls.push(href);
		// });	
		// setTimeout(function () {
		//    count--;
		//    callback(null, pageUrl + ' title is:' + title);
	 //    }, delay);
	});

	promise.then(function(){

	});

	async.mapLimit(urls, 5, function (u, callback) {
	  fecthurl(u, callback);
	}, function (err, result) {
	  console.log('All url parse done .............................');
	  console.log(result);
	});

}
module.exports = doWork;


