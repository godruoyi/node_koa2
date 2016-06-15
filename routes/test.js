import BaseController from '../service/BaseController'
import table from './../model/datas.js';
import tree from './../service/tree.js';

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
			let wodeneir = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="description" content="城市也叫城市聚落，是以非农业产业和非农业人口集聚形成的较大居民点。人口较稠密的地区称为城市，一般包括了住宅区、工业区和商业区并且具备行政管辖功能。城市的行政管辖功能可能涉及较其本身更广泛的区域，其中有居民区、街道、医院、学校、公共绿地、写字楼、商业卖场、广场、公园等...">
<title>城市（地理学名词）_百度百科</title>

<meta name="keywords" content="城市 城市定义 城市形成 城市发展 城市中国情况">
<meta name="image" content="http://baike.bdimg.com/cms/static/baike.png">
中国移动

<p>物联网</p>
<body class="wiki-lemma normal">

</body>
</html>
`;
			let content = tree.start(wodeneir);
			ctx.body = content;
		});
	
	};
}
