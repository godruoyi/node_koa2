import BaseController from '../service/BaseController'
import Crawler from './../service/Crawler.js';


export default class extends BaseController{
	reoutes(){
		this.router.get('/crawler', async function(ctx, next){

			Crawler('http://open.iot.10086.cn');
			
		});
	};
}
