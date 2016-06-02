import BaseController from './../service/BaseController';
import DatasModel from './../model/datas.js';

export default class extends BaseController{

	reoutes(){

		this.router.get('/', async function (ctx, next) {
			var dataModel = new DatasModel();


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