//终极版
// let superagent = require("superagent");
let cheerio = require("cheerio");
let async = require("async");
let phantom = require("phantom");
let config  = require('./../config/config.js');
let mymd5 = require('./utils/md5.js');
let model = require('./../model/datas.js');
let isok = require('./../model/isok.js');

let URLParse = require('./utils/UrlParse.js');
let UrlQueues2 = require('./utils/UrlQueues.js');
// let phantom = require('./phantom.js');
let UrlQueues = new UrlQueues2();


module.exports = function (url){
	
	let count = 0;
	UrlQueues.push([
		'http://www.godruoyi.com',
	]);


	let fecthurl = function(url, callback){


	};

	async.mapLimit(urls, 5, function(url, callback){
		fecthurl(url, callback);
	}, function(){
		
	});


	let q = async.queue(function(tack, callback){
		console.log('--------------------------');
		console.log(tack.next());
		console.log('--------------------------');
		let as = [
			'http://www.godruoyi.com',
	    	'http://www.godruoyi.com2',
	    	'http://www.godruoyi.com3',
	    	'http://www.godruoyi.com4',
	    	'http://www.godruoyi.com5',
	    	'http://www.godruoyi.com6'
		];
		callback(null, as);
	}, 5);

	q.drain = function(){
		console.log('所有的都执行完了:  + ' + count);
	};

	// [{}, {}, {}, .... ]

	q.push(UrlQueues, function(err, as){
		console.log('push callback ------: ', as);
		UrlQueues.push(as);
		q.push();
	});

}