import BaseController from './../service/BaseController';
// import DatasModel from './../model/datas.js';
import UrlQueue from './../service/utils/UrlQueues.js';

export default class extends BaseController{

	reoutes(){

		this.router.get('/', async function (ctx, next) {
			ctx.state = {
				title: 'HOME'
			};

			await ctx.render('index/index', {
				xxxx: 'ni hao'
			});
		});
	};
}