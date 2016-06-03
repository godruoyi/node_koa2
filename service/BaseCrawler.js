var phantom = require("phantom");

var test = async function getStart(url)
{
	let _ph, 
		_page, 
		_outObj, 
		_url = url, 
		image = 'F:/Zend/apps/node/koa22/public/img/yufenfendsadadsadadadadasdad.jpg';

	return await phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
	    _ph = ph;
	    return _ph.createPage();
	}).then(page => {
	    _page = page;
	    _page.property('viewportSize', { width: 1024, height: 768 });
	    _page.property('zoomFactor', 1);
	    // _page.onResourceReceived = function(response){//当网页收到所请求的资源时，就会执行该回调函数
		// 	console.log('当网页收到所请求的资源时，就会执行该回调函数');
		// }
		// _page.onResourceRequested = function(requestData, networkRequest){//当页面请求一个资源时，会触发这个回调函数
		// 	console.log('当页面请求一个资源时，会触发这个回调函数');
		// }
	    return _page.open(_url);
	}).then(status => {
	    console.log('----------------------------status: '+ status + '----------------------------------');
	    if(status !== 'success')
	    {
	    	return false;
	    } else {
	    	_page.render(image);
	    }
	    return _page.property('content');
	}).then(content  => {
		if (!content) {
			console.log('error ------------------------');
			return false;
		} else {
			return content;
		}
		_page.close();
	    _ph.exit();

	}).catch(error => {
		console.log(error);
		_page.close();
	    _ph.exit();
	});
}

module.exports = test;

/**
 * 
 */