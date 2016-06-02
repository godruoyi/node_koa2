var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) 
{
  console.log('Please input some url');
  phantom.exit();
}

t = Date.now();
address = system.args[1];

page.open(address, function(status){
  if (status !== 'success')
  {
  	console.log('load page fail .....');
  } else {
	var title = page.evaluate(function(){
	  return document.title;		
	}); 
	console.log('Godruoyi title is:' + title);
  	t = Date.now() - t;
  	console.log('Loading timr ' + t + ' msec');
  }
  phantom.exit();
});