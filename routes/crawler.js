import BaseController from '../service/BaseController'
// import DatasModel from './../model/datas.js';
// import getStart from './../service/BaseCrawler.js';
import T from './../service/T.js';
import isok from './../model/isok.js';
import async from 'async';  
import table from './../model/datas.js';


export default class extends BaseController{
	reoutes(){

		this.router.get('/crawler/index', async function(ctx, next){
			ctx.state = {
				title: 'CRAWLER'
			};
			await ctx.render('crawler/index', {
			});
		});


		this.router.post('/crawler/start', async function(ctx, next){

				let domain = ctx.request.body.domain;
				let url = ctx.request.body.url;
				let isokModel = new isok();
				let data = {errno : 0, msg: 'success', data: [] };

				await isokModel.findOne({indexurl: url}, function(err, doc){
					console.log(doc);
					if(err)
					{
						console.log(err);
						data.msg = 'DB COUNT ERROR';
					} else if(!doc  ) {
						data.errno = 200;
					} else if(doc.isok === 'CONTINUE'){
						data.msg = '该URL正在爬取...';
					} else {
						data.msg = '该URL已经爬取过了， 你需要重新爬取吗';
					}
				});

				if (data.errno){
					T(url, domain);
				}

				ctx.body = data;
		});


		this.router.get('/crawler/list', async function(ctx, next){
			
			let isokModel = new isok();
			let data = null;
			await isokModel.find({}, function(err, res){
				if(err){
					console.log(err);
					data = null;
				} else {
					console.log('---===-----',res); 
					data = res;
				}
			});

			console.log(data);

			ctx.state = {
				title: 'crawler list data',
				data : data
			};
			await ctx.render('crawler/list', {
			});
		});


		this.router.get('/crawler/data', async function(ctx, next){
			// let url = ctx.request.url;
			let url = 'http://www.godruoyi.com';
			console.log('Get url: ' + url);

			let tableModel = new table();
			let data = null;
			await tableModel.find({indexurl: url}, function(err, result){
				if(err){
					console.log('mongodb find null by indexurl : ' + url);
				} else {
					data = result;
				}
			});
			console.log(data);

			ctx.state = {
				title: `crawler list data by url '${url}'`,
				url : url,
				data : data
			};
			await ctx.render('crawler/data', {
			});
		});



		// this.router.post('/crawler/start22', async function(ctx, next){
		// 	let u = ctx.request.body.url;
		// 	let deep = ctx.request.body.deep;

		// 	let image = 'F:/Zend/apps/node/koa22/public/img/yufenfen.jpg';

		// 	console.log('--------------  READ START --------------------\n');
		// 	let phantom = require("phantom");
		// 	let _ph, _page, _outObj, _url = u;

		// 	await phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
		// 	    _ph = ph;
		// 	    return _ph.createPage();
		// 	}).then(page => {
		// 	    _page = page;
		// 	    _page.property('viewportSize', { width: 1024, height: 768 });
		// 	    _page.property('zoomFactor', 1);
		// 	    _page.onResourceReceived = function(response){//当网页收到所请求的资源时，就会执行该回调函数
		// 			console.log('当网页收到所请求的资源时，就会执行该回调函数');
		// 		}
		// 		_page.onResourceRequested = function(requestData, networkRequest){//当页面请求一个资源时，会触发这个回调函数
		// 			console.log('当页面请求一个资源时，会触发这个回调函数');
		// 		}
		// 	    return _page.open(_url);
		// 	}).then(status => {
		// 	    console.log(status);
		// 	    if(status !== 'success')
		// 	    {
		// 	    	return false;
		// 	    } else {
		// 	    	_page.render(image);
		// 	    }
		// 	    return _page.property('content');
		// 	}).then(content  => {
		// 		if (!content) {
		// 			console.log('error ------------------------');
		// 			content = 'error ....';
		// 		}
		// 		ctx.body = content;
		// 		console.log('--------------------------success------------------------');
		// 		_page.close();
		// 	    _ph.exit();

		// 	}).catch(error => {
		// 		console.log(error);
		// 		_page.close();
		// 	    _ph.exit();
		// 	});

		// 	ctx.body = 'wo ri ni ma';
		// 	console.log('--------------------END-----------------------------');
		// });
	};

	// async getStart(_url, callbak, deep = 5)
	// {
	// 	let phantom = require("phantom");
	// 	let _ph, _page;
	// 	let _settings = {
	// 	  /*operation: "POST",
	// 	  encoding: "utf8",
	// 	  headers: {
	// 	    "Content-Type": "text/html"
	// 	  },
	// 	  data: JSON.stringify({
	// 	    some: "data",
	// 	    another: ["custom", "data"]
	// 	  })*/
	// 	};

	// 	try{
	// 		_ph = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']);
	// 		_page = _ph.createPage();

	// 		_page.property('viewportSize', { width: 1024, height: 768 });
	// 		_page.property('zoomFactor', 1);

	// 		_page.onResourceReceived = function(response){//当网页收到所请求的资源时，就会执行该回调函数
	// 			console.log('当网页收到所请求的资源时，就会执行该回调函数');
	// 		}

	// 		_page.onResourceRequested = function(requestData, networkRequest){//当页面请求一个资源时，会触发这个回调函数
	// 			console.log('当页面请求一个资源时，会触发这个回调函数');
	// 		}

	// 		await _page.open(_url, _settings, function(status){
	// 			console.log(status);
	// 		    if(status !== 'success')
	// 		    {
	// 		    	return false;
	// 		    } else {
	// 		    	_page.render(image);
	// 		    }
	// 		    let c = _page.property('content');
	// 		    console.log(c);
	// 		});

	// 	} catch (e) {
	// 		console.log(e);

	// 	} finally {
	// 		_page.close();
	// 	    _ph.exit();
	// 	}
	// }

}