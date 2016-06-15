// let superagent = require("superagent");
let cheerio = require("cheerio");
// let async = require("async");
let phantom = require("phantom");
let config  = require('./../config/config.js');
let mymd5 = require('./utils/md5.js');
let model = require('./../model/datas.js');
let isok = require('./../model/isok.js');

let tree = require('./tree.js');
let URLParse = require('./utils/UrlParse.js');
let UrlQueues2 = require('./utils/UrlQueues.js');
// let phantom = require('./phantom.js');
let UrlQueues = new UrlQueues2();
let whileTag = 5;





//待改进
let gotoanywhere =  function(url, domain2){

	if(!url) return; 

	let count = 0;
	const domain = domain2;
	let rekouurl = url;

	let checkModel = new isok();
	let checkModelOk =  checkModel.save({
		indexurl: rekouurl,
		isok : 'CONTINUE'
	});

	if (!checkModelOk) {
		console.log('First save is-success-table error \n');
		return;
	}

	let dogoto =  function(url){

		count ++;
		console.log(`第${count}次开始解析：${url} `);
		
		let errno = 500;
		let errdata = {};
		let errmsg = 'success';

		let dosomething = function(errno, errdata = null){
			if (errno === 200 ) { //ok
				//save data to mongodb
				let pachomgModel = new model();
				let pachomgModelIsok = pachomgModel.save({
					title : errdata.title,
					desc    : errdata.desc,
					url    : errdata.currentUrl,
					content  : errdata.content,
					img     : errdata.image,
					indexurl : rekouurl,
					keyword : errdata.keyword
				});
				if (pachomgModelIsok) {
					console.log('数据库保存成功， 继续下一个。。。。。\n\n');
				} else {
					console.log('数据库保存失败， 继续下一个。。。。。\n\n');
				}
			} else {
				console.log('Promise 解析出错， 继续下一个......:\n\n\n');
			}

			let nexturl = UrlQueues.next();
			if (!nexturl) {
				console.log('全部解析完成。。。。。\n\n\n\n');
				if (whileTag === 5 )
				{
					let MyisokModel = new isok();
					MyisokModel.update({ indexurl: rekouurl}, {isok: 'SUCCESS'});
					console.log('完成----------------------------\n\n\n\n\n\n');
				} else {
					console.log('等待其他事件完成调度。。。。。' + whileTag);
				}

			} else {
				console.log('下一个URL: ' + nexturl);
				console.log('剩余解析长度： ' + UrlQueues.getNoLength());

				switch(whileTag) {
					case 1: 
						dogoto(nexturl);
						break;
					case 2: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						break;
					case 3: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 4: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 5: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
				}

			}
		}


		let promise = new Promise(function(resovle, reject){
			whileTag --;
			let phantom_, sitepage_, image = config.phantom.saveimgpath + mymd5(url) + config.phantom.imagesuffix;
			phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
				phantom_ = ph;
				return phantom_.createPage();
			}).then(page => {
				sitepage_ = page;
				sitepage_.property('viewportSize', config.phantom.viewportSize);
				sitepage_.property('zoomFactor', config.phantom.zoomFactor);
				return sitepage_.open(url);
			}).then(status => {
				if(status !== 'success')
				{
					// console.log('phantom 解析出错。。。。。。。。');
					return false;
				} else {

					sitepage_.render(image);
				}
				return sitepage_.property('content');
			}).then(content  => {

				sitepage_.close();
				phantom_.exit();
				
				if(!content){
					image = false;
					reject('phantom 解析失败');
				} else {
					let keyword = tree.start(content);
					let $ = cheerio.load(content);
					let uparsedone = new URLParse($, domain);
					UrlQueues.push(uparsedone.getAllHerf());
					image = image.replace(config.phantom.saveimgpath, config.imagebase);
					let data = {
						title: uparsedone.getTitle(),
						currentUrl: url,
						image: image,
						desc : '',
						// content: uparsedone.getContent(),
						// content: content.replace(/<[^>]+>/g,""),
						content: '',
						keyword: keyword
					};
					resovle(data);
				} 
			}).catch(error => {
				sitepage_.close();
				phantom_.exit();
				reject('phantom未知错误' + error);
			});
		});

		whileTag ++;		

		promise.then(function(res){
			console.log('Promise + phantom 解析成功 \n\n');
			console.log(res);
			dosomething(200, res);
		}, function(err){
			console.log('Promise + phantom 解析成功ge chui zi .. \n\n');
			console.log(err);
			dosomething(500);
		});
	}
	dogoto(url);
}




module.exports = gotoanywhere;