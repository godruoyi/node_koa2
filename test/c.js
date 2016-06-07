
var array = [
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn2'
];


array.sort();
var re = [array[0]];
for(var i = 1; i < array.length; i++)
{
	if( array[i] !== re[re.length-1])
	{
		re.push(array[i]);
	}
}

console.log(re);
