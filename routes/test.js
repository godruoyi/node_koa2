import BaseController from '../service/BaseController'
import table from './../model/datas.js';


export default class extends BaseController{
	reoutes(){
		this.router.get('/test', async function(ctx, next){

			let model = new table();
			let options = {
				where: {},
				fields: {}
			};
			let xxx = await model.findByPage(options);
			console.log('Test find by page result:' + xxx);

			ctx.body = 'OK';
		});
	
	};
}
