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
let whileTag = 5;


//待改进
let gotoanywhere = function(url, domain2){

	let count = 0;
	const domain = domain2;
	let rekouurl = url;

	let checkModel = new isok();
	checkModel.save({
		indexurl: rekouurl,
		isok : 'CONTINUE'
	}, function(err, id){
		if(err){
			// console.log('ISOK表保存出错。。。。。' + err);
		}
	});

	let dogoto =  function(url){

		count ++;
		console.log(`第${count}次开始解析：${url} `);
		// let image = await phantom(url); 

		let promise = new Promise(function(resolve, reject){
			whileTag --;
			let phantom_, 
			sitepage_,
			image = config.phantom.saveimgpath + mymd5(url) + config.phantom.imagesuffix;

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
					reject(new Error('phantom 解析出错。。。。。。。。'));
				} else {
					let $ = cheerio.load(content);
					let uparsedone = new URLParse($, domain);
					UrlQueues.push(uparsedone.getAllHerf());
					let data = {
						title: uparsedone.getTitle(),
						currentUrl: url,
						image: image,
						desc : uparsedone.getDescription(),
						content: uparsedone.getContent(),
					};
					resolve(data);
				}
			}).catch(error => {
				sitepage_.close();
				phantom_.exit();
				reject(new Error(error));
			});
			
		});

		promise.then(function(result){
			whileTag ++;
			let pachomgModel = new model();
			pachomgModel.save({
				title : result.title,
				// desc    : result.desc,
				desc    : '描述信息',
				url    : result.currentUrl,
				content  : result.content,
				img     : result.image,
				indexurl : rekouurl,
			}, function(err, id){
				if(err){
					console.log('数据库保存失败， 继续下一个。。。。。');
				} else {
					console.log('数据库保存成功， 继续下一个。。。。。');
				}
			});

			let nexturl = UrlQueues.next();
			if(!nexturl){
				console.log('全部解析完成。。。。。');

				let pachomgModelcount = new model();
				pachomgModelcount.count({indexurl: rekouurl}, function(err, c){
					if(err){
						console.log('Find mongodb count error ......');
						console.log(err);
					} else {
						console.log('结果数据长度： ' + c);
					}
				});
				console.log('Url队列长度： ' + UrlQueues.getLength());
				console.log(UrlQueues.getData());
				
				let isokModel = new isok();
				isokModel.update(
					{ indexurl: rekouurl}, 
					{
						isok: 'SUCCESS'
					}, function(err, id){
						if(err){
							// console.log('ISOK表保存出错。。。。。' + err);
						}
					}
				);
			} else {
				console.log('下一个URL: ' + nexturl);

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
		}, function(err){
			console.log('Promise 解析出错， 继续下一个......');
			let pachomgModel = new model();
			let nexturl = UrlQueues.next();
			if(!nexturl){
				console.log('全部解析完成。。。。。');
				pachomgModel.count({indexurl: rekouurl}, function(err, c){
					if(err){
						console.log(err);
					} else {
						console.log('结果数据长度： ' + c);
					}
				});
				console.log('Url队列长度： ' + UrlQueues.getLength());
				console.log(UrlQueues.getData());
				
				let isokModel = new isok();
				isokModel.update(
					{ indexurl: rekouurl}, 
					{
						isok: 'SUCCESS'
					}, function(err, id){
						if(err){
							// console.log('ISOK表保存出错。。。。。' + err);
						}
					}
				);
			} else {
				console.log('下一个URL: ' + nexturl);
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
		});
	}
	dogoto(url);
}


module.exports = gotoanywhere;