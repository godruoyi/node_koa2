var phantom = require("phantom");
var dbmodel = require('./../model/datas.js');
var mymd5 = require('./utils/md5.js');
// var display = require('./Display.js');

// var Crawler = require('./BaseCrawler.js');
var urlqueue = require('./utils/UrlQueues.js');
var MyQueue = new urlqueue();



var test = function getStart(url)
{
	console.log('---------------------------------start read -------------------------------');
	console.log('==== parse url: ' + url);
	let	image = 'D:/www/nodeapps/koa2/public/img/'+ mymd5(url) +'.jpg';
	console.log('==== save image: ' + image);

	console.log('---------------------------------Reading promise ---------------------------');
	let promise = new Promise(function(resolve, reject){
		let tmpdata_, sitepage_, phantom_;

		tmpdata_ = phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
    		phantom_ = ph;
    		return phantom_.createPage();
		}).then(page => {
		    sitepage_ = page;
		    sitepage_.property('viewportSize', { width: 1024, height: 768 });
		    sitepage_.property('zoomFactor', 1);
		    return sitepage_.open(url);
		}).then(status => {
		    console.log('----------------------------status: '+ status + '----------------------------------');
		    if(status !== 'success')
		    {
		    	return false;
		    } else {
		    	console.log('--------------------------SAVE IMAGE OK-----------------------------');
		    	sitepage_.render(image);
		    }
		    return sitepage_.property('content');

		}).then(content  => {
			if (!content)
	    	{
	    		console.log('==== Error Parse this url error ');
	    		reject(new Error('Error Parse this url error'));
	    	}
	    	else {
	    		console.log('---------------------------START SAVE DATA TO MONGODO ---------------------------');
	    		let model = new dbmodel();
	    		model.save({
	    		  title : 'test title',
			      desc    : 'test desc',
			      url    : url,
			      content  : 'test content',
			      img     : image,
	    		}, function(err){
	    			if (err)
	    			{
	    				console.log('==== SAVE TO MONGODB ERROR');
	    				reject(new Error('save mongodb err'));
	    			} else {
	    				console.log('---------------------------SAVE DATA TO MONGODO SUCCESS ---------------------------');
	    				//save success
	    				//get all tag a href
	    				let aaaa = [
	    					'http://open.iot.10086.cn/',
	    					'http://open.iot.10086.cn/bbs/forum.php',
	    					'http://open.iot.10086.cn/bbs/forum.php?mod=viewthread&tid=563',
	    					'http://open.iot.10086.cn/case'
	    				];
	    				resolve(aaaa);
	    			}
	    		});
	    	}
			sitepage_.close();
		    phantom_.exit();
		}).catch(error => {
			console.log('==== UNKONW ERROR');
			console.log(error);
			sitepage_.close();
		    phantom_.exit();
		    reject(new Error('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'));
		});
	});

	promise.then(function(d){
		console.log('----------------------Promise OK,------------------------');
		console.log(d);
		MyQueue.push(d);
		test(MyQueue.next());
	}, function(e){	
		console.log('==============error==============');
		console.log(e);
		console.log('----------restart next parse ---------------------');
		test(MyQueue.next());
	});
}

module.exports = test;
