let urlQueen = [];

let doWork = function(url){

	let superagent = require("superagent");
	let cheerio = require("cheerio");
	let async = require("async");
	
	let urlqueue_two = [];
	let domain = 'http://open.iot.10086.cn';
	let URLParse = require('./utils/UrlParse.js');
	let count = 0;
	let phantom = require('./phantom.js');


	let fetchurl = function(url, callback){
		count ++;
		let delay = parseInt((Math.random() * 10000000) % 2000, 10);
		console.log('现在的并发数是', count, '，正在抓取的是', url, '，耗时' + delay + '毫秒');

		let promise2 = new Promise(function(resove, reject){
			superagent.get(url).end(function(err, result){
				if(err) {
					console.log('Get \'' + url + '\' Error,');
				} else {
					let $ = cheerio.load(result.text);
					let uparsedone = new URLParse($, domain);
					let data = {
						a_data: uparsedone.getAllHerf(),
						obj_data: {
							title: $('title').text(),
							currentUrl: url
						}
					};
					resove(data);
				}
			});
		});
		promise2.then(function(data){
			for(let dd of data.a_data){
				if((dd.startsWith(domain)) && (!urlQueen.includes(dd))){
					urlQueen.push(dd);
				}
			}

			count--;
			callback(urlQueen); 
			// setTimeout(function () {
			//    count--;
			//    callback(null, data.obj_data);
		 	//    }, delay);
		});
	}

	fetchurl(url, function(urlsssss){
		console.log('wo zai bei diao yong ...');
		async.mapLimit(urlsssss, 12, function(urlitem, cback){
			fetchurl(urlitem, cback);
		}, function(err, result){
			if (err) {
				console.log('Fainl result is Error ...');
				console.log(err);
			} else {
				console.log('--------------ok----------------');
				console.log(result.length);
				console.log(urlQueen.length);
			}
		});
	});
}

module.exports = doWork;