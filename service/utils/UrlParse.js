export default class {

	constructor(ssssss, domain = '')
	{
		this.document = ssssss;
		this.domain = domain;
		this.urlDatas = [];
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

		this.document('a[href!="javascript:;"][href!=""]').map(function(i, self){

			let _this = wocao(self);
			let _herf = _this.attr('href');
			if(_herf.startsWith('/')){
				_herf = doman + _herf;
			}
			if((_herf.startsWith(doman)) && (!_herf.endsWith('.apk'))){
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