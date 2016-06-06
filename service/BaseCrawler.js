var phantom = require("phantom");
var dbmodel = require('./../model/datas.js');
var mymd5 = require('./utils/md5.js');
var urlqueue = require('./utils/UrlQueues.js');
var MyQueue = new urlqueue();
var URLParse2 = require('./utils/UrlParse.js');
var URLParse = new URLParse2();
var cheerio = require('cheerio');



var test = function getStart(url)
{
	let domain = URLParse.getDomain(url);
	console.log('==== Domain:' + domain);

	if(url === false)
	{
		console.log('==== Parse done .....');
		return;
	} 
	let	image = 'F:/Zend/apps/node/koa22/public/downimage/'+ mymd5(url) +'.jpg';
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
		    if(status !== 'success')
		    {
		    	return false;
		    } else {
		    	sitepage_.render(image);
		    }
		    return sitepage_.property('content');

		}).then(content  => {
			if (!content)
	    	{
	    		reject(new Error('Error Parse this url error'));
	    	}
	    	else {

	    		console.log('==== START SAVE DATA TO MONGODO');
	    		let model = new dbmodel();
	    		$ = cheerio.load(content);

	    		let mo = {
	    		  title : $('title').text(),
			      desc    : $('meta[name="description"]').attr('content'),
			      url    : url,
			      keyword    : $('meta[name="keywords"]').attr('content'),
			      domian    : domain,
			      // content  : content,
			      img     : image,
	    		};
	    		console.log(mo);
	    		
	    		model.save(mo, function(err){
	    			if (err)
	    			{
	    				reject(new Error('save mongodb err'));
	    			} else {
	    				console.log('==== SAVE DATA TO MONGODO SUCCESS ');
	    				let aaaa = $('a').attr('href');
	    				let aaaa2 = [];
	    				for(let aurl of aaaa){
	    					if(aurl.startsWith("/") || aurl.startsWith('#')){
						        aurl = domain + aurl;
						        aaaa2.push(aurl);
						    } 
	    				}
	    				console.log(aaaa2);
	    				resolve(aaaa2);
	    			}
	    		});
	    	}
			sitepage_.close();
		    phantom_.exit();
		}).catch(error => {
			console.log('==== UNKONW ERROR');
			sitepage_.close();
		    phantom_.exit();
		    reject(new Error('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'));
		});
	});

	promise.then(function(d){
		console.log('==== Promise OK, get next start .... ');
		MyQueue.push(d);
		let p = MyQueue.next();
		console.log('---------------NEXT URL:' + p);
		test(p);
	}, function(e){	
		console.log('==============error==============');
		console.log(e);
		console.log('==== restart next parse ---------------------');
		let p = MyQueue.next();
		console.log('---------------NEXT URL:' + p);
		test(p);
	});
}

module.exports = test;
