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
			let isokModelOk = await isokModel.findOne({indexurl: url});
			isokModel = null;
			console.log(isokModelOk);

			if(isokModelOk === false) {

			} else {
				if (isokModelOk  === null) {
					data.errno = 500;
					data.msg = '该URL还没爬取过...';
				} else if (isokModelOk.isok === 'CONTINUE') {
					data.errno = 500;
					data.msg = '该URL正在爬取...';
				} else {
					data.errno = 200;
					data.msg = '爬取已完成';
					flag = 2;
				}
			}

			if (2 === flag) {
				let ooptions = {
					where: {indexurl: url},
					fields: {}
				};
				let page_count = 0;
				let dataModel = new dataObj();
				page_count = await dataModel.count(ooptions.where);
				dataModel = null;
				let dataModel2 = new dataObj();
				let mydata = {
					page: page,
					page_size: page_size,
					page_count: page_count,
					data: await dataModel2.findByPage(ooptions, page, page_size)
				};
				dataModel2 = null;
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
				// let url = ctx.request.body.url;
				let url = 'http://open.iot.10086.cn/bbs/forum.php';

				let page = +ctx.request.body.page;
				if (page) page = 1;
				page = page <= 0 ? 1 : page;

				let flag = 0;
				let page_size = 5;

				let data = {errno : 500, msg: 'success', data: {} };

				if( url == '')
				{
					data.msg = 'URL不能为空';
				} else {
					let isokModel = new isok();
					let isokModelIsOk = await isokModel.findOne({indexurl: url});
					isokModel = null;

					console.log('Get One:' + isokModelIsOk);

					if (isokModelIsOk === false) {
						console.log('find one error --');
					} else {
						if (isokModelIsOk === null) {
							data.errno = 200;
							flag = 1;
						} else if (isokModelIsOk.isok === 'CONTINUE') {
							data.errno = 500;
							data.msg = '该URL正在爬取...';
						} else {
							data.errno = 500;
							data.msg = '爬取已完成';
						}
					}
					if (1 === flag){
						T(url, domain);
					}
				}
				ctx.body = data;
		});
	};
}