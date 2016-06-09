
let superagent = require("superagent");
let cheerio = require("cheerio");
let async = require("async");


let domain = 'http://open.iot.10086.cn';
let URLParse = require('./utils/UrlParse.js');
let UrlQueue = require('./utils/UrlQueues.js');
let Queue = new UrlQueue();
let Mydata = [];

// let count = 0;
// let phantom = require('./phantom.js');
let i = 0;

let dowork =  function(url){

	i ++;
	console.log(`开始第${i}次解析： ${url}`);

	if(i > 200)
	{
		console.log('解析次数大于200 。。。。。');
		console.log(Mydata);
		return false;
	}

	let promise = new Promise(function(resolve, reject){
		superagent.get(url).end(function(err, result){
			if(err) {
				console.log('--error---');
				reject(err);
			} else {
				let $ = cheerio.load(result.text);
				let urlInstance = new URLParse($, domain);
				let allA = urlInstance.getAllHerf();
				Queue.push(allA);
				resolve(urlInstance.getTitle());
			}
		});
	});

	promise.then(function(title){
		let nextu = Queue.next();
		Mydata.push(title);
		if(!nextu) {
			console.log('执行完成MyData。。。。。。。。', Mydata.length);
			console.log('执行完成Queue。。。。。。。。', Queue.getLength());
			return true;
		} else {
			console.log(`准备开始下一次解析. ${nextu}`);
			dowork(nextu);
		}
	}, function(err){
		console.log('Promise error , get next .........');

		let nextu = Queue.next();
		if(!nextu) {
			console.log('执行完成MyData。。。。。。。。', Mydata.length);
			console.log('执行完成Queue。。。。。。。。', Queue.getLength());
			return true;
		} else {
			console.log(`准备开始下一次解析. ${nextu}`);
			dowork(nextu);
		}

	});

}

module.exports = dowork;
