//Tree

let tree = function(){

	constructor()
	{
		this.tblRoot = null;
		this.bKeyChanged = true;
		// this.objDisplay =  document.getElementById('objDisplay');
		this.config = require('./../config/config.js');
	}
}

tree.prototype.maketree = function(){

	var strKeys = this.config.keyword;
	var arrKeys = strKeys.split("");
	var tblCur = this.tblRoot = {};
	var key;

	for(var i = 0, n = arrKeys.length; i < n; i ++)
	{
		key = arrKeys[i];

		//完成当前关键字
		if(key == ';')
		{
			tblCur.end = true;
			tblCur = this.tblRoot;
			continue;
		}

		//生成子节点
		if(key in tblCur)
			tblCur = tblCur[key];
		else
			tblCur = tblCur[key] = {};
	}

	//最后一个关键字没有分割符
	tblCur.end = true;
}




tree.prototype.start = function( content ){

	var strContent = content;
	var arrMatch;
	var arrHTML = [];
	var strHTML;
	var mid;
	var p = 0;

	if(this.bKeyChanged)
	{
		this.maketree();
		this.bKeyChanged = false;
	}

	/*
	 * 开始搜索! 
	 */
	var t = +new Date();

	arrMatch = this.search(strContent);

	/*
	 * 搜索用时
	 */
	var alltime = +new Date() - t;

	/*
	 * 标记关键字
	 */
	for(var i = 0,n = arrMatch.length; i < n;  i += 2)
	{
		mid = arrMatch[i];
		arrHTML.push(strContent.substring(mid, p = arrMatch[i+1]));
	}
	strHTML = this.sortArray(arrHTML).join(",").replace(/\n/g, "<br>");
	return strHTML;
}



/*
 * 函数: search
 * 注释: 标记出内容中关键字的位置
 */
tree.prototype.search = function( content){
	var tblCur;
	var i = 0;
	var n = content.length;
	var p, v;
	var arrMatch = [];
	var arrMatch2 = [];

	while(i < n)
	{
		tblCur = this.tblRoot;
		p = i;
		v = 0;

		for(;;)
		{
			if(!(tblCur = tblCur[content.charAt(p ++)]))
			{
				i++;
				break;
			}
			//找到匹配关键字
			if(tblCur.end) {
				v = p;
			}
		}

		//最大匹配
		if(v)
		{
			arrMatch.push(i-1, v);
			arrMatch2.push(tblCur);
			i = v;
		}
	}
	return arrMatch;
}



tree.prototype.sortArray = function(array)
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

let t = new tree();
module.exports = t;