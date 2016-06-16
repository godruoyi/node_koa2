import BaseController from '../service/BaseController'
import T from './../service/T.js';
import isok from './../model/isok.js';
import dataObj from './../model/datas.js';

export default class extends BaseController{
	reoutes(){

		this.router.get('/crawler/index', async function(ctx, next){

			let page = 0;
			let page_size = 15;


			let isokModel = new isok();
			let datas = null;
			let options = {
				where:{isok: 'SUCCESS'},
				fields: {},
				page_size: page_size,
				page: page
			};
			await isokModel.findByPage(options, function(err, doc){
				if(err){
					console.log('数据库查询失败。。。');
				} else {
					datas = doc;
				}
			});

			console.log('findByPage success ----', datas);

			let result = [];

			if ( datas ) {
				for( let d of datas){
					let indexurl = d.indexurl;

					let page_count = 0;
					let dataModel22 = new dataObj();
					await dataModel22.count({indexurl: indexurl}, function(err, countt){
						if(err) page_count = 0;
						else {
							page_count = countt;
						}
					});

					let dataModel2 = new dataObj();
					let mydatatatata = null;
					await dataModel2.findOne({url: indexurl}, function(err, res){
						if(err) mydatatatata = null;
						else {
							mydatatatata = res;
						}
					});
					let mydata = {
						page: page,
						page_size: page_size,
						page_count: page_count,
						data: mydatatatata
					};
					result.push(mydata);
				}
			}

			console.log('resultresultresultresult:', result);

			ctx.state = {
				title: 'CRAWLER',
				datas: result
			};
			await ctx.render('master', {
			});
		});


		this.router.post('/crawler/mapsearch', async function(ctx, next){

			ctx.set("Access-Control-Allow-Origin", "*");
			// -1 数据库查询失败  0 success  1 该URL还没怕去过  2正在爬取
			let data = {errno : 0, msg: 'success', data: [] };
			// let url = ctx.request.body.url;
			let url = 'http://open.iot.10086.cn/bbs/forum.php';
			let domain = 'http://open.iot.10086.cn';
			let page = ctx.request.body.page;
			if ( page ) page = 0;
			page = parseInt(page) <= 0 ? 0 : parseInt(page);
			let page_size = 5;


			let isokModel = new isok();
			await isokModel.findOne({indexurl: url}, function(err, doc){
				if(err)
				{
					data.msg = '数据库查询失败';
					data.errno = -1;
					console.log(err);
				} else if( !doc  ) {
					data.errno = 1;
					data.msg = '该URL还没爬取过...';
				} else if(doc.isok === 'CONTINUE'){
					data.errno = 2;
					data.msg = '该URL正在爬取...';
				} else {
					data.errno = 0;
					data.msg = '爬取已完成';
				}
			});
			console.log(data);

			if (data.errno === 0) {
				let ooptions = {
					where: {indexurl: url},
					fields: {}
				};

				let page_count = 0;
				let dataModel22 = new dataObj();
				await dataModel22.count(ooptions.where, function(err, countt){
					if(err) page_count = 0;
					else {
						page_count = countt;
					}
				});

				let dataModel2 = new dataObj();
				let mydatatatata = null;
				await dataModel2.findOne({url: url}, function(err, res){
					if(err) mydatatatata = null;
					else {
						mydatatatata = res;
					}
				});
				let mydata = {
					page: page,
					page_size: page_size,
					page_count: page_count,
					data: mydatatatata
				};
				data.data = mydata;
			}
			ctx.body = data;
		});


		this.router.post('/crawler/start', async function(ctx, next){

				let page_size = 5;
				ctx.set("Access-Control-Allow-Origin", "*");
			    // ctx.res.header("Access-Control-Allow-Headers", "X-Requested-With");
			    // ctx.res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");


				let domain = 'http://open.iot.10086.cn';
				// let url = ctx.request.body.url;
				let url = 'http://open.iot.10086.cn/bbs/forum.php';


				// -1 数据库查询失败  0 success  1 正在爬取  2爬取完成
				let data = {errno : -1, msg: 'success', data: null };


				if( url == '')
				{
					data.msg = 'URL不能为空';
				} else {
					let isokModel = new isok();
					await isokModel.findOne({indexurl: url}, function(err, doc){
						if(err)
						{
							data.msg = '数据库查询失败';
							data.errno = -1;
							console.log(err);
						} else if(!doc  ) {
							data.errno = 0;
							data.msg = '开始爬取';
						} else if(doc.isok === 'CONTINUE'){
							data.errno = 1;
							data.msg = '该URL正在爬取...';
						} else {
							data.errno = 2;
							data.msg = '该页面已经爬取过了，';
						}
					});

					if (data.errno === 0){
						T(url, domain);
					} 
					if (data.errno === 2) {
						data.data = {requestUrl: url}
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