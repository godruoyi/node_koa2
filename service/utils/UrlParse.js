/**
 * Document页面解析
 *
 */
export default class {

	/**
	 * @param Jquery document     jquery obj
	 * @param string domain     domain
	 * 
	 * @type Object
	 */
	constructor(document222, domain = '')
	{
		this.document = document222;
		this.domain = domain;
		this.urlDatas = [];
		// this.noallowsuifx = [
		// 	'.js',
		// 	'.jpg',
		// 	'.jpeg',
		// 	'.png',
		// 	'.apk',
		// 	'.gif',
		// 	'.exe'
		// ];
	}

	getTitle (){
		return this.document('title').text();
	}

	getContent (){
		return 'content';
	}

	getDescription (){
		return this.document('meta[name="description"]').attr('content');
	}

	getkeyWord (){
		return this.document('meta[name="keywords"]').attr('content');
	}


	getAllHerf (){
		let urlQueen = [];
		let wocao = this.document;
		let doman = this.domain;
		let tt = doman + '/bbs';

		// $ = this.document;
		this.document('a[href!="javascript:;"][href!=""]').map(function(i, self){
			let _this = wocao(self);
			let _herf = _this.attr('href');
			// let f = true;

			// if(!_herf ) return false;
			// for(let ii = 0, ll = this.noallowsuifx.length; ii < ll; ii ++){
			// 	if(_herf.endsWith(this.noallowsuifx[ii])) {
			// 		let f = false;
			// 		break;
			// 	}
			// }
			// if( !f ) return false;
			// if((_herf.endsWith('.jpg')) || (_herf.endsWith('.gif')) || (_herf.endsWith('.js')) || (_herf.endsWith('.apk'))) return false;

			if(_herf.startsWith('/bbs')){
				_herf = doman + _herf;// http://open.iot.10086.cn /bbs
			}

			if(_herf.startsWith('forum.php')){
				_herf = tt + '/' + _herf; //
			}

			if(_herf.startsWith('home.php')){
				_herf = tt + '/' + _herf; //
			}

			if((_herf.startsWith(tt))){
				urlQueen.push(_herf);
			}
		});
		return this.sortArr(urlQueen);
	}

	sortArr(array)
	{
		array.sort();
		let re = [array[0]];
		for(let i = 1; i < array.length; i++)
		{
			if( array[i] !== re[re.length-1])
			{
				re.push(array[i]);
			}
		}
		return re;
	}
}