//Tree
var tblRoot;
let tree = function(){


}

tree.propoty.maketree = function(){

	var strKeys = objKeys.value;
	var arrKeys = strKeys.split("");
	var tblCur = tblRoot = {};
	var key;

	for(var i=0,n=arrKeys.length; i<n; i++)
	{
		key = arrKeys[i];

		//完成当前关键字
		if(key == ';')
		{
			tblCur.end = true;
			tblCur = tblRoot;
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



tree.propoty.start = function( content ){

	var strContent = content;
	var arrMatch;
	var arrHTML = [];
	var strHTML;
	var mid;
	var p = 0;

	if(bKeyChanged)
	{
		makeTree();
		bKeyChanged = false;
	}

	/*
	 * 开始搜索! 
	 */
	var t = +new Date();

	arrMatch = search(strContent);

	/*
	 * 搜索用时
	 */
	$("spnTime").innerHTML = +new Date() - t;

	/*
	 * 标记关键字
	 */
	for(var i=0,n=arrMatch.length; i<n; i+=2)
	{
		mid = arrMatch[i];
		arrHTML.push(strContent.substring(p, mid),
					 "<em>",
					 strContent.substring(mid, p = arrMatch[i+1]),
					 "</em>");
	}
	arrHTML.push(strContent.substring(p));

	strHTML = arrHTML.join("").replace(/\n/g, "<br>");

	/*
	 * 显示结果
	 */
	objDisplay.innerHTML = strHTML;

	objContent.style.display = "none";
	objDisplay.style.display = "block";
}



/*
 * 函数: search
 * 注释: 标记出内容中关键字的位置
 */
tree.propoty.search = function( content){
	var tblCur;
	var i = 0;
	var n = content.length;
	var p, v;
	var arrMatch = [];

	while(i < n)
	{
		tblCur = tblRoot;
		p = i;
		v = 0;

		for(;;)
		{
			if(!(tblCur = tblCur[content.charAt(p++)]))
			{
				i++;
				break;
			}
			//找到匹配关键字
			if(tblCur.end)
				v = p;
		}

		//最大匹配
		if(v)
		{
			arrMatch.push(i-1, v);
			i = v;
		}
	}

	return arrMatch;
}