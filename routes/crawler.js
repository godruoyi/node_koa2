import BaseController from '../service/BaseController'

export default class extends BaseController{
	reoutes(){

		this.router.get('/crawler/index', async function(ctx, next){
			ctx.state = {
				title: 'CRAWLER'
			};
			await ctx.render('crawler/index', {
			});
		});

		this.router.post('/crawler/start', async function(ctx, next){
			console.log('--------------  READ START --------------------\n');

			let phantom = require("phantom");
			let _ph, _page, _outObj;
			await phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
			    _ph = ph;
			    return _ph.createPage();
			}).then(page => {
			    _page = page;
			    _page.property('viewportSize', { width: 1024, height: 768 });
			    // _page.paperSize = {width: size[0], height: size[1], margin: '0px' };
			    // _page.zoomFactor = '1024x768';
			    return _page.open('http://www.baidu.com');
			}).then(status => {
			    console.log(status);
			    if(status !== 'success')
			    {
			    	ctx.body = 'Loding error ....';
			    } else {
			    	_page.render('F:/Zend/apps/node/koa22/public/img/aaa44.jpg');
				    //return _page.property('content');
				    let title = _page.evaluate(function(){
				    	return window.document.title;
				    });
				    console.log(title);
			    }
			    _page.close();
			    _ph.exit();
			});
		});
	};
}