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


		this.router.post('/crawler/getcrawlerlist', async function(ctx, next){
			ctx.set("Access-Control-Allow-Origin", "*");
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

			let data_result = {errno : 0, msg: 'success', data: null };
			let result = [];
			let allCount = 0;

			if ( datas ) {
				allCount  = datas.length;
				for( let d of datas){
					let indexurl = d.indexurl;

					let paqu_count = 0;
					let dataModel22 = new dataObj();
					await dataModel22.count({indexurl: indexurl}, function(err, countt){
						if(err) paqu_count = 0;
						else {
							paqu_count = countt;
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
						count: paqu_count,
						title: mydatatatata.title,
						id: d._id,
						desc: mydatatatata.desc,
						img: mydatatatata.img,
						indexurl: mydatatatata.indexurl,
						keyword: mydatatatata.keyword,
						content: mydatatatata.content
					};
					result.push(mydata);
				}
			}

			let xxx = {
				page: page,
				page_size: page_size,
				page_count: allCount,
				data: result
			};

			data_result.data = xxx;
			console.log('data_result------>:', data_result);
			ctx.body = data_result;
		});

		this.router.post('/crawler/mapsearch', async function(ctx, next){

			ctx.set("Access-Control-Allow-Origin", "*");
			// -1 数据库查询失败  0 success  1 该URL还没怕去过  2正在爬取
			let data = {errno : 0, msg: 'success', data: [] };
			let url = ctx.request.body.url;
			// let url = 'http://open.iot.10086.cn/bbs/forum.php';
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
			ctx.body = data;
		});


		this.router.post('/crawler/start', async function(ctx, next){

				ctx.set("Access-Control-Allow-Origin", "*");
			    // ctx.res.header("Access-Control-Allow-Headers", "X-Requested-With");
			    // ctx.res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

				
				let url = ctx.request.body.url;
				// let url = 'http://open.iot.10086.cn/bbs/forum.php';

				// -1 数据库查询失败  0 success  1 正在爬取  2爬取完成
				let data = {errno : -1, msg: 'success', data: null };


				if( url == '')
				{
					data.msg = 'URL格式不正确';
				} else {

					//'http://open.iot.10086.cn/bbs/forum.php';
					//'http://open.iot.10086.cn/bbs';
					if (url.endsWith('/')) url = url.slice(0, url.length-1);
					let domain = url;


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

		this.router.post('/crawler/deletegroups', async function(ctx, next){
			ctx.set("Access-Control-Allow-Origin", "*");
			let id = ctx.request.body.id;
			// -1 数据库查询失败  0 success  1 参数错误
			let data = {errno : 1, msg: 'success', data: null };

			if(id) {
				let isokModel = new isok();
				let indexurl = '';
				await isokModel.findById(id, function(err, res){
					if(err){
						console.log(err);
						data.msg = '数据库查询失败';
						data.errno = -1;
					} else {
						if ( !res) {
							data.msg = '不存在';
						} else {
							data.errno = 0;
							indexurl = res.indexurl;
						}
					}
				});
				if(data.errno === 0) {
					let isokModel2 = new isok();
					await isokModel2.delete({}, function(err, success){
						if (err) {
							console.log('delete success table error:', err);
							data.msg = err;
							data.errno = -1;
						} else {
							data.errno = 0;
						}
					});
				}
				if(data.errno === 0) {
					let datamodel_ = new dataObj();
					await datamodel_.delete({indexurl: indexurl}, function(err, success){
						if(err) {
							data.msg = 'delete dataObj by ' + indexurl + 'error';
							data.errno = -1;
						} else {
							data.errno = 0;
						}
					});
				}
			} else {
				data.msg = 'ID不合法';
			}
			console.log('Satrt delete', data);
			ctx.body = data;
		});

		this.router.post('/crawler/deleteitem', async function(ctx, next){
			ctx.set("Access-Control-Allow-Origin", "*");
			let id = ctx.request.body.id;
			// -1 数据库查询失败  0 success  1 参数错误
			let data = {errno : 1, msg: 'success', data: null };


			if(id) {

				let indexurl = '';
				let datamodel_1 =  new dataObj();
				await datamodel_1.findById(id, function(err, res){
					if(err){
						data.msg = '数据库查询失败';
						data.errno = -1;
					} else {
						if ( !res) {
							data.msg = '不存在';
						} else {
							data.errno = 0;
							indexurl = res.indexurl;
						}
					}
				});

				if(data.errno === 0) {
					let datamodel_ = new dataObj();
					await datamodel_.findByIdAndRemove(id, function(err, success){
						if(err) {
							data.msg = 'delete dataObj by id:' + id + 'error';
							data.errno = -1;
						} else {
							data.errno = 0;
						}
					});
					if (data.errno === 0) {
						let dataModel22 = new dataObj();
						let paqu_count = 0;
						await dataModel22.count({indexurl: indexurl}, function(err, countt){
							if(err) paqu_count = -1;
							else {
								paqu_count = countt;
							}
						});
						if(paqu_count === 0) {
							let isok_model_delete = new isok();
							await isok_model_delete.delete({indexurl: indexurl}, function(err, success){
								if(err) {
									console.log('delete isok_model_delete by ' + indexurl + 'error');
									// data.errno = -1;
								} else {
									// data.errno = 0;
									console.log('DELETE ALL OK');
								}
							});
						}
					}
				}
			} else {
				data.msg = 'ID不合法';
			}
			console.log('Satrt delete', data);
			ctx.body = data;
		});

		this.router.post('/crawler/details', async function(ctx, next){
			ctx.set("Access-Control-Allow-Origin", "*");
			let page_size = 10;
			// -1 数据库查询失败  0 success  1 参数错误
			let data = {errno : 1, msg: 'success', data: null };
			let id = ctx.request.body.id;
			let page = ctx.request.body.page;
			let paqu_count = 0;
			let result_data = null;

			console.log('Page:', page, 'Id:', id);

			//page 默认从0开始
			if(!page || page <= 1) page = 0;
			else page --;

			if ( !id) {
				data.msg = 'ID不合法';
			} else {

				let indexurl = '';
				let isokModel = new isok();
				await isokModel.findById(id, function(err, res){
					if(err){
						data.msg = '数据库查询失败';
						data.errno = -1;
						console.log(err);
					} else {
						if ( !res) {
 							data.msg = '不存在';
						} else {
							data.errno = 0;
							indexurl = res.indexurl;
						}
					}
				});

				if(data.errno === 0) {
					
					let options = {
						where:{indexurl: indexurl},
						fields: {},
						page_size: page_size,
						page: page
					};


					let data_model22 = new dataObj();
					await data_model22.count({indexurl: indexurl}, function(err, countt){
						if(err) paqu_count = 0;
						else {
							paqu_count = countt;
						}
					});


					let data_model = new dataObj();
					await data_model.findByPage(options, function(err, doc){
						if(err){
							console.log('数据库查询失败。。。');
							data.msg = '数据库查询失败';
							data.errno = -1;
						} else {
							result_data = doc;
							doc = null;
						}
					});
				}
			}


			let MyData = {page_size: page_size, page: page, page_count: paqu_count, data: result_data };
			data.data = MyData; MyData = null; 


			ctx.body = data;
		});
	};
}