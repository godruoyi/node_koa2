module.exports =  function(url){
  let phantom = require("phantom");
  let config  = require('./../config/config.js');
  let mymd5 = require('./utils/md5.js');


  let phantom_, 
	  sitepage_,
	  image = config.phantom.saveimgpath + mymd5(url) + config.phantom.imagesuffix;

	 phantom.create(['--ignore-ssl-errors=yes', '--load-images=yes']).then(ph => {
		phantom_ = ph;
		return phantom_.createPage();
	}).then(page => {
		sitepage_ = page;
		sitepage_.property('viewportSize', config.phantom.viewportSize);
		sitepage_.property('zoomFactor', config.phantom.zoomFactor);
		return sitepage_.open(url);
	}).then(status => {
		if(status !== 'success')
		{
			console.log('parse error .........');
			return false;
		} else {
			sitepage_.render(image);
		}
		return sitepage_.property('content');
	}).then(isok  => {
		if(!isok){
			console.log('then isok false......................');
			image = false;
		}
		sitepage_.close();
		phantom_.exit();
	}).catch(error => {
		sitepage_.close();
		phantom_.exit();
	});
	return image;
}