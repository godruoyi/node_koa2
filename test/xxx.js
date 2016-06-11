

var data = [
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

var queue = [];

for(var a of data){
	if(a.endsWith('.jpg') || a.endsWith('.gif')) continue;
	if(typeof(a) === 'undefined') continue;
	if(typeof(a) === undefined) continue;
	
	queue.push(a);
}

console.log(queue);