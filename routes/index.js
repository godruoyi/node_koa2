import BaseController from './../service/BaseController';
// import DatasModel from './../model/datas.js';
import UrlQueue from './../service/utils/UrlQueues.js';

export default class extends BaseController{

	reoutes(){

		this.router.get('/', async function (ctx, next) {

			let urlq = new UrlQueue();
			let data = [
			  'http://www.godruoyi.com/category/javascript',
			  'http://www.godruoyi.com/category/laravel',
			  'http://www.godruoyi.com/category/life',
			  'http://www.godruoyi.com/category/mysql',
			  'http://www.godruoyi.com/category/network',
			  'http://www.godruoyi.com/category/symfony',
			  'http://www.godruoyi.com/category/yaf',
			  'http://www.godruoyi.com/login',
			  'http://www.godruoyi.com/page/2',
			  'http://www.godruoyi.com/page/3',
			  'http://www.godruoyi.com/users/godruoyi',
			  'http://www.godruoyi.com/signup',
			  undefined,
			  'http://www.godruoyi.com/images/products/20160511143110.jpg',
			  'http://www.godruoyi.com/images/products/20160511145449.jpg',
			  'http://www.godruoyi.com/images/products/20160511145607.jpg'
			];
			urlq.push(data);
			console.log(urlq.getData());

			// var dataModel = new DatasModel();

			// let sssssssssss = 0;
			// await dataModel.count({domain: 'http://open.iot.10086.cn'}, function(err, resout){
			// 	if(err){
			// 		console.log(err);
			// 		console.log('------------count error ------------');
			// 	} else {
			// 		console.log('------------count success ------------');
			// 		console.log(resout);
			// 		sssssssssss = resout;
			// 	}
			// });
			// console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');

			// console.log('----------------------------------sssssssssss:', sssssssssss);


			// console.log('--------------------------------------------------------------\n');


			// dataModel.find({domain: 'http://open.iot.10086.cn'}, function(err, resout){
			// 	if(err){
			// 		console.log(err);
			// 		console.log('------------find error ------------');
			// 	} else {
			// 		console.log('------------find success ------------');
			// 		console.log(resout);
			// 	}
			// });



			/*dataModel.delete({_id: '574fc26011810fdc2b032bf0'}, function(err){
				if(err){
					console.log(err);
				} else {
					console.log('ok ok ok ok ok ok ok ok ok ok ok ');
				}
			});*/

			/*dataModel.find({title: 'tazhishiwodebabyababy'}, function(err, resout){
				if(err){
					console.log(err);
					console.log('------------find error ------------');
				} else {
					console.log('------------find success ------------');
					console.log(resout);
				}
			});*/

			//godruoyi
			/*await dataModel.update(
				{title: 'godruoyi'},
				{
					desc : 'tazhishiwodebabyababy',
					content: 'tazhishiwodebabyababy',
					title: 'tazhishiwodebabyababy'
				}, function(err){
					if(err){
						console.log('mei you geng xin cheng gong ......... ');
					}
				}
			);*/


			/*var doc = {
				title : 'lianbo',
				desc    : 'lianbo',
				url    : 'http://lianbo.com',
				content  : 'lianbo',
				img     : './lianbo/lianbo/asda/das/ssssss.jpg'
			};
			await dataModel.save(doc, function(err, doc){
				if (err) {
					console.log(err);
				} else {
					console.log('--------------SUCCESS-----------------');
					console.log(doc);
				}
			});*/

			ctx.state = {
				title: 'HOME'
			};

			await ctx.render('index/index', {
				xxxx: 'ni hao'
			});
		});
	};
}