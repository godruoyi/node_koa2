import BaseController from '../service/BaseController'
import table from './../model/datas.js';
import tree from './../service/tree.js';
import url from 'url';


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

		this.router.get('/test/search', async function(ctx, next){
			let uuuu = ctx.request.query.url;
			let urlobj = url.parse(uuuu);

			

			let protocol = urlobj.protocol;
			let pathname = urlobj.pathname;
			let domain = protocol + '//' + urlobj.hostname;

			console.log('Domain======>>>>>>>>', domain);
			console.log('pathname======>>>>>>>>', pathname);


			let startsWith = '';

			if (pathname) {

				if (pathname.endsWith('/')) pathname = pathname.slice(0, pathname.length-1);
				startsWith = pathname.slice(pathname.lastIndexOf('/')+1);
			}

			console.log('startsWithstartsWithstartsWith->>', startsWith);

			let wwwwww = 'wwwwww.php?asdad=asdadaasdasd';
			if( startsWith && wwwwww.startsWith(startsWith)) {   //http://open.iot.10086.cn /bbs/dadaa/   dasda.phpsDfsfsdfdsfs
				let wocao = '';	
				wocao = wwwwww.slice(wwwwww.lastIndexOf(startsWith));
				wocao = domain + pathname +  wwwwww;
				console.log('wocao->>>>>>>>>>>>>>>>>>',wocao);	
			}


		});
	
	};
}
