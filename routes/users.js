import BaseController from '../service/BaseController'
// import Crawler from './../service/Crawler.js';
// import doWork from './../service/Demo.js';
// import phantom2 from './../service/phantom.js';
import phantom3 from './../service/Test.js';


export default class extends BaseController{
	reoutes(){
		/*this.router.get('/crawler', async function(ctx, next){

			// Crawler('http://open.iot.10086.cn');
			
		});

		this.router.get('/doWork', async function(ctx, next){

			doWork('http://open.iot.10086.cn');
			
		});


		this.router.get('/doWork2', async function(ctx, next){

			let xxx = phantom2('http://open.iot.10086.cn');
			console.log(xxx);
		});*/

		this.router.get('/doWork3', async function(ctx, next){

			let xxx = phantom3('http://open.iot.10086.cn');
			console.log('-----------------route--------------------');
			console.log(xxx);
		});
	};
}
