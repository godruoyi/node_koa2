import BaseController from '../service/BaseController'
// import Crawler from './../service/Crawler.js';
// import doWork from './../service/Demo.js';
// import phantom2 from './../service/phantom.js';
// import phantom3 from './../service/Test.js';
import T from './../service/T.js';
import isok from './../model/isok.js';

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

		// this.router.get('/doWork3', async function(ctx, next){

		// 	let xxx = phantom3('http://open.iot.10086.cn');
		// 	console.log('-----------------route--------------------');
		// 	console.log(xxx);
		// });



		this.router.get('/getjd', async function(){

		});


		this.router.get('/test3', async function(ctx, next){

			let isokModel = new isok();

			let p = new Promise(function(resolve, reject) {
				let result = T('http://open.iot.10086.cn');
				if( result === 'SUCCESS'){
					resolve(true);
				} else {
					reject(false);
				}
			});

			p.then(function(res){
				console.log('-------------Promise Success---------------');
				console.log(res);

				console.log('------------ctx-------------------');
				console.log(ctx);

			}, function(err){
				console.log('-------------Promise Error---------------');
				console.log(err);
			});

			console.log('-----------------over--------------------');
		});
	};
}
