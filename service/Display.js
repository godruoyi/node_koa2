var Crawler = require('./BaseCrawler.js');
var urlqueue = require('./utils/UrlQueues.js');
var MyQueue = new urlqueue();


var display = function display(urls)
{
	console.log('--------------------- start display, start push url--------------------------------');
	MyQueue.push(urls);

	console.log('--------------------- Get MyQueue data ------------------------------');
	console.log(MyQueue.getData());


	console.log('--------------------- get next url -----------------------');
	let iii = MyQueue.next();
	console.log(iii);

	console.log('--------------------- get all length -----------------------------');
	let iii2 = MyQueue.getLength();
	console.log(iii2);

	console.log('----------------------Start Next ------------------------');

	let xxx = new Promise(function(resolve, reject){
		Crawler(iii);
	});
}

module.exports = display;
