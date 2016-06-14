import BaseController from '../service/BaseController'
import T from './../service/T.js';
import isok from './../model/isok.js';
import table from './../model/datas.js';


export default class extends BaseController{
	reoutes(){

		this.router.get('/crawler/index', async function(ctx, next){
			ctx.state = {
				title: 'CRAWLER'
			};
			await ctx.render('master', {
			});
		});


		this.router.post('/mapsearch', async function(ctx, next){

			let data = {errno : 0, msg: 'success', data: [] };
			setTimeout(function(){
				ctx.body = data;
			}(ctx), 0);
			console.log("aaa")	
		});


		this.router.post('/crawler/start', async function(ctx, next){
				// let domain = ctx.request.body.domain;
				let domain = 'http://open.iot.10086.cn';
				// let url = ctx.request.body.url;
				let url = 'http://open.iot.10086.cn/bbs/forum.php';
				
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
			let url = 'http://open.iot.10086.cn';
			console.log('Get url: ' + url);

			let tableModel = new table();
			let data = null;
			await tableModel.find({indexurl: url}, function(err, result){
				if(err){
					console.log(err);
					console.log('mongodb find null by indexurl : ' + url);
				} else {
					data = result;
				}
			});

			ctx.state = {
				title: `crawler list data by url '${url}'`,
				url : url,
				data : data
			};
			await ctx.render('crawler/data', {
			});
		});
	};
}