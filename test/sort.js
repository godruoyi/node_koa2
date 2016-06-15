


function sortArr(array)
	{
		array.sort();
		var re = [array[0]];
		for(var i = 1; i < array.length; i++)
		{
			if( array[i] !== re[re.length-1])
			{
				re.push(array[i]);
			}
		}
		return re;
	}

var aa = [
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn',
	'http://open.iot.10086.cn4',
	'http://open.iot.10086.cn3',
	'http://open.iot.10086.cn2',
	'http://open.iot.10086.cn2',
	'http://open.iot.10086.cn1',
];
var xx = sortArr(aa);
console.log(xx);