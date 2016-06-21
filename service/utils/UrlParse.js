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
		this.urlDatas = [];
		this.url = require('url');
		this.urlObj = this.url.parse(domain);
		this.rekouurl = domain;

		this.protocol = this.urlObj.protocol;
		this.domain = this.protocol + '//' + this.urlObj.hostname;
		this.pathname = this.urlObj.pathname;
		this.startsWith = '';

		if(this.pathname) {
			if (this.pathname.endsWith('/')) this.pathname = this.pathname.slice(0, this.pathname.length-1);
			this.startsWith = this.pathname.slice(this.pathname.lastIndexOf('/')+1);
		}
	}

	getTitle (){
		return this.document('title').text();
	}

	getContent (){

		let $ = this.document;
		return $('table').text();
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
		let startsWith = this.startsWith;
		let pathname = this.pathname;
		let rekouurl = this.rekouurl;
		let protocol = this.protocol;

		console.log('startsWith: ------------->>>>>>>>>>>>>>>>>>>>>>>>>>', startsWith);

		this.document('a[href!="javascript:;"][href!=""]').map(function(i, self){
			let _this = wocao(self);
			let _herf = _this.attr('href');

			if(_herf.startsWith('//')){
				_herf = protocol + _herf;
			} else if (_herf.startsWith('/')) {
				_herf = doman + _herf;
			} else if (_herf.startsWith('http')) {

			} else {
				// pathname = pathname.slice(0, pathname.lastIndexOf(startwith))
				if (startsWith) {
					let xxx = pathname.substr(0, pathname.lastIndexOf(startsWith));
					// pathname = pathname.substr(0, pathname.lastIndexOf(startsWith));
					console.log('急缺后的xxx=================>>>>>>>',xxx);
					console.log('_herf=================>>>>>>>', _herf);
					if(xxx) {
						_herf = doman + xxx + _herf;
					} else {
						_herf = doman + _herf;
					}
				}
				console.log('这个url是=====>>>>', _herf);
			}

			if((_herf.startsWith(rekouurl))){
				if (_herf.endsWith('/')) _herf = _herf.slice(0, _herf.length-1);
				urlQueen.push(_herf);
			}
		});
		let d = this.sortArr(urlQueen);
		console.log('ParseUrl:\n\n\n', d)
		return d;
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