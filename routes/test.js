import BaseController from '../service/BaseController'
// import Crawler from './../service/Crawler.js';
// import doWork from './../service/Demo.js';
// import phantom2 from './../service/phantom.js';
// import phantom3 from './../service/Test.js';
import fainl from './../service/Fainl.js';

export default class extends BaseController{
	reoutes(){
		this.router.get('/test', async function(ctx, next){

				fainl('http://godruoyi.com');
		});
	
	};
}
