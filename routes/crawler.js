import BaseController from '../service/BaseController'
import T from './../service/T.js';
import isok from './../model/isok.js';
import dataObj from './../model/datas.js';

export default class extends BaseController{
	reoutes(){

		this.router.get('/crawler/index', async function(ctx, next){
			ctx.state = {
				title: 'CRAWLER'
			};
			await ctx.render('master', {
			});
		});


		this.router.post('/crawler/mapsearch', async function(ctx, next){

			ctx.set("Access-Control-Allow-Origin", "*");
		 //    ctx.res.header("Access-Control-Allow-Headers", "X-Requested-With");
			// ctx.res.header("Access-Control-Allow-Origin", "*");
		 //    ctx.res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

			let data = {errno : 500, msg: 'success', data: [] };
			
			let url = ctx.request.body.url;
			let domain = 'http://open.iot.10086.cn';
			let page = +ctx.request.body.page;
			if ( page ) page = 1;
			page = page <= 0 ? 1 : page;
			let flag = 0;
			let page_size = 5;

			let isokModel = new isok();
			await isokModel.findOne({indexurl: url}, function(err, doc){
				if(err)
				{
					data.msg = 'DB COUNT ERROR';
					console.log(err);
				} else if( !doc  ) {
					data.errno = 500;
					data.msg = '该URL还没爬取过...';
				} else if(doc.isok === 'CONTINUE'){
					data.errno = 500;
					data.msg = '该URL正在爬取...';
				} else {
					data.errno = 200;
					data.msg = '爬取已完成';
					flag = 2;
				}
			});
			if (2 === flag) {
				let ooptions = {
					where: {indexurl: url},
					fields: {}
				};
				let page_count = 0;
				let dataModel = new dataObj();
				await dataModel.count(ooptions.where, function(err, countt){
					if(err) page_count = 0;
					else {
						page_count = countt;
					}
				});
				let dataModel2 = new dataObj();
				let mydata = {
					page: page,
					page_size: page_size,
					page_count: page_count,
					data: await dataModel2.findByPage(ooptions, page, page_size)
				};
				data.data = mydata;
			}
			ctx.body = data;
		});


		this.router.post('/crawler/start', async function(ctx, next){

				ctx.set("Access-Control-Allow-Origin", "*");
			    // ctx.res.header("Access-Control-Allow-Headers", "X-Requested-With");
			    // ctx.res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

				// let domain = ctx.request.body.domain;
				let domain = 'http://open.iot.10086.cn';
				let url = ctx.request.body.url;
				let page = +ctx.request.body.page;
				page = page <= 0 ? 1 : page;
				let flag = 0;
				let page_size = 5;

				let data = {errno : 500, msg: 'success', data: {} };

				console.log(url);

				if( url == '')
				{
					data.msg = 'URL不能为空';
				} else {
					let isokModel = new isok();
					await isokModel.findOne({indexurl: url}, function(err, doc){
						if(err)
						{
							data.msg = 'DB COUNT ERROR';
							console.log(err);
						} else if(!doc  ) {
							data.errno = 200;
							flag = 1;
						} else if(doc.isok === 'CONTINUE'){
							data.errno = 500;
							data.msg = '该URL正在爬取...';
						} else {
							data.errno = 500;
							data.msg = '爬取已完成';
							flag = 2;
						}
					});

					if (1 === flag){
						T(url, domain);
					}
					
				}
				console.log(data);
				ctx.body = data;
		});


		// this.router.get('/crawler/list', async function(ctx, next){
			
		// 	let isokModel = new isok();
		// 	let data = null;
		// 	await isokModel.find({}, function(err, res){
		// 		if(err){
		// 			console.log(err);
		// 			data = null;
		// 		} else {
		// 			console.log('---===-----',res); 
		// 			data = res;
		// 		}
		// 	});

		// 	console.log(data);

		// 	ctx.state = {
		// 		title: 'crawler list data',
		// 		data : data
		// 	};
		// 	await ctx.render('crawler/list', {
		// 	});
		// });


		// this.router.get('/crawler/data', async function(ctx, next){
		// 	// let url = ctx.request.url;
		// 	let url = 'http://open.iot.10086.cn';
		// 	console.log('Get url: ' + url);

		// 	let tableModel = new table();
		// 	let data = null;
		// 	await tableModel.find({indexurl: url}, function(err, result){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('mongodb find null by indexurl : ' + url);
		// 		} else {
		// 			data = result;
		// 		}
		// 	});

		// 	ctx.state = {
		// 		title: `crawler list data by url '${url}'`,
		// 		url : url,
		// 		data : data
		// 	};
		// 	await ctx.render('crawler/data', {
		// 	});
		// });
	};
}