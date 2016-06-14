var a = `
<!DOCTYPE html><html><head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1">
    <meta name="renderer" content="webkit">

    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">

    <title>Godruoyi</title>

    <meta name="description" content="Godruoyi, 全站PHP交流社区，YAF,LARAVEL,SYMFONY学习频道，一个让你想到即可学到的PHP社区.">

    <meta name="keywords" content="godruoyi">

    <!-- setting icon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">

    <!-- start global css -->
            <link rel="stylesheet" href="/static/css/bs.css">
        <link rel="stylesheet" href="/static/css/icon.css">
        <link rel="stylesheet" href="/static/css/common.css">
        <link rel="stylesheet" href="/static/css/link.css">
        <link rel="stylesheet" href="/static/css/style.css">
        <!-- end global css -->

    <!-- start global js -->
        <script type="text/javascript" src="/static/js/jquery-1.11.1.min.js"></script>
    <script src="/static/plugins/layer/layer.js"></script><link rel="stylesheet" href="http://www.godruoyi.com/static/plugins/layer/skin/layer.css" id="layui_layer_skinlayercss" style="">
    <script src="/static/plugins/layer/extend/layer.ext.js"></script><link rel="stylesheet" href="http://www.godruoyi.com/static/plugins/layer/skin/layer.ext.css" id="layui_layer_skinlayerextcss" style="">
    <script type="text/javascript">
        var _basePath = '';
        var _defaultImage = '/images/avatar-max-img-no.png';
                    var _user = {};
            </script>
        <!-- end global js -->

    
</head>
<body>
            <script type="text/javascript">

</script>

<div class="aw-top-menu-wrap">
	<div class="container">

		<!-- logo -->
		<div class="aw-logo hidden-xs">
			<a href="/"></a>
		</div>
		<!-- end logo -->

		<!-- 搜索框 -->
		<div class="aw-search-box  hidden-xs hidden-sm">
			<form class="navbar-search" action="#" id="global_search_form" method="post">
				<input class="form-control search-query" type="text" placeholder="搜索问题、话题或人" autocomplete="off" name="q" id="aw-search-query">
			</form>
		</div>
		<!-- end 搜索框 -->

		<!-- 导航 -->
		<div class="aw-top-nav navbar">
			<div class="navbar-header">
			  <button class="navbar-toggle pull-left">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			</div>
			<nav role="navigation" class="collapse navbar-collapse bs-navbar-collapse">
			  <ul class="nav navbar-nav">
				<li><a href="#" class="active"><i class="icon icon-list"></i> 文章</a></li>

				<!-- <li><a href="#question/" class="">问题</a></li>

				<li><a href="#article/" class="">文章</a></li> -->

				<li><a href="/category/yaf"><i class="icon icon-topic"></i> 一揽子</a></li>
				<li><a href="#"><i class="icon icon-bulb"></i> Help</a></li>
				<li><a href="/aboutme"><i class="icon icon-contact"></i> About</a></li>
									
				<li>
					<a style="font-weight:bold;" title="more...">· · ·</a>
					<div class="dropdown-list pull-right">
						<ul id="extensions-nav-list"></ul>
					</div>
				</li>
			  </ul>
			</nav>
		</div>
		<!-- end 导航 -->

				<!-- 用户栏 -->
		<div class="aw-user-nav">
			<!-- 登陆&注册栏 -->
			<a class="login btn btn-normal btn-primary" href="/login">登录</a>
			<a class="register btn btn-normal btn-success" href="/account/register">注册</a>								<!-- end 登陆&注册栏 -->
		</div>
		<!-- end 用户栏 -->

		<!-- 发起 -->
			</div>
</div>

    
    <div class="aw-container-wrap">
    <div class="container category">
                <div class="row">
            <div class="col-sm-12">
                <ul class="list">
                    <li class="active"><a href="/">全部</a></li>
                                                                                                                   <li><a href="/category/laravel">LARAVEL</a></li>
                                                                                               <li><a href="/category/symfony">SYMFONY</a></li>
                                                                                               <li><a href="/category/javascript">JAVASCRIPT</a></li>
                                                                                               <li><a href="/category/mysql">MYSQL</a></li>
                                                                                               <li><a href="/category/life">LIFE</a></li>
                                                                                               <li><a href="/category/network">NETWORK</a></li>
                                                                                                                                                                                                </ul>
            </div>
        </div>
             
    </div>
    <div class="container">
        <div class="row">
            <div class="aw-content-wrap clearfix">
                <div class="col-sm-12 col-md-9 aw-main-content">
                    
                    <!-- 新消息通知 -->
                    <div class="aw-mod aw-notification-box hide" id="index_notification">
                        <div class="mod-head common-head">
                            <h2>
                                <span class="pull-right">
                                    <a href="" class="text-color-999"><i class="icon icon-setting"></i> 通知设置</a>
                                </span>
                                <i class="icon icon-bell"></i>新通知<em class="badge badge-important" name="notification_unread_num"></em>
                            </h2>
                        </div>
                        <div class="mod-body">
                            <ul id="notification_list"></ul>
                        </div>
                        <div class="mod-footer clearfix">
                            <a href="javascript:;" onclick="AWS.Message.read_notification(false, 0, false);" class="pull-left btn btn-mini btn-gray">我知道了</a>
                            <a href="#notifications/" class="pull-right btn btn-mini btn-success">查看所有</a>
                        </div>
                    </div>
                    <!-- end 新消息通知 -->

                    <!-- tab切换 -->
                    <ul class="nav nav-tabs aw-nav-tabs active hidden-xs">

                        <li><a href="#" id="sort_control_hot">热门</a></li>
                        <li><a href="#is_recommend-1">推荐</a></li>
                        <li class="active"><a href="#">最新</a></li>

                        <h2 class="hidden-xs"><i class="icon icon-list"></i> 文章</h2>
                    </ul>
                    <!-- end tab切换 -->

                    
                    <div class="aw-mod aw-explore-list">
                        <div class="mod-body">
                            <div class="aw-common-list">
                                                                                                <div class="aw-item active" data-topic-id="30">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/30">Mysql Command Used</a>
                                            </h4>
                                            <a href="/artiles/details/30#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/mysql">mysql</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-25 12:59 • 1 人评论 • 0 人点赞 • 0 人推荐 • 19 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="29">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/29">Cannot add foreign key constraint in laravel</a>
                                            </h4>
                                            <a href="/artiles/details/29#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/laravel">laravel</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-23 17:30 • 1 人评论 • 1 人点赞 • 0 人推荐 • 18 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="28">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/28">Linux CRON PROFILE</a>
                                            </h4>
                                            <a href="/artiles/details/28#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/laravel">laravel</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-18 15:00 • 0 人评论 • 0 人点赞 • 0 人推荐 • 17 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="27">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/27">UDP/TCP套接字编程</a>
                                            </h4>
                                            <a href="/artiles/details/27#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-12 15:32 • 1 人评论 • 0 人点赞 • 0 人推荐 • 40 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="26">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/26">SMTP AND DNS</a>
                                            </h4>
                                            <a href="/artiles/details/26#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-12 11:42 • 1 人评论 • 0 人点赞 • 0 人推荐 • 28 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="25">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/25">热妮娅鲁勉采娃</a>
                                            </h4>
                                            <a href="/artiles/details/25#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/life">life</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-11 22:54 • 1 人评论 • 0 人点赞 • 0 人推荐 • 23 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="24">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/24">The Conditional GET</a>
                                            </h4>
                                            <a href="/artiles/details/24#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-11 15:19 • 0 人评论 • 0 人点赞 • 0 人推荐 • 23 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="23">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/23">HTTP WEB CACHE SERVER</a>
                                            </h4>
                                            <a href="/artiles/details/23#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-11 14:58 • 0 人评论 • 0 人点赞 • 0 人推荐 • 38 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="22">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/22">进程通线</a>
                                            </h4>
                                            <a href="/artiles/details/22#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-11 10:53 • 0 人评论 • 0 人点赞 • 0 人推荐 • 25 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                    <div class="aw-item active" data-topic-id="21">
                                        <a class="aw-user-name hidden-xs" data-id="7" href="/users/godruoyi" rel="nofollow">
                                            <img src="/images/avatar-max-img.png" alt="">
                                        </a>    
                                        <div class="aw-question-content">
                                            <h4>
                                                <a href="/artiles/details/21">COMPUTER NETWORKS AND THE INTERNET, pakcet switching</a>
                                            </h4>
                                            <a href="/artiles/details/21#pinglun" class="pull-right text-color-999">评论</a>
                                            <p>
                                                <a class="aw-question-tags" href="/category/network">network</a>
                            •                   <a href="/users/godruoyi" class="aw-user-name">godruoyi</a>
                                                <span class="text-color-999">发布于2016-05-11 09:30 • 0 人评论 • 0 人点赞 • 0 人推荐 • 25 次浏览</span>
                                                                                            </p>
                                        </div>
                                    </div>
                                                                                        </div>
                        </div>
                        <div class="navigation text-center">
                                
    <ul class="pagination">
                    <li class="arrow unavailable">
                <a>
                    « Previous
                </a>
            </li>
        
        
                                    <li class="current">
                    <a>1</a>
                </li>
            
                                    <li>
                    <a href="/page/2">
                        2
                    </a>
                </li>
            
                                    <li>
                    <a href="/page/3">
                        3
                    </a>
                </li>
            
        
        
                    <li class="arrow">
                <a href="/page/2">
                    Next &nbsp;»
                </a>
            </li>
            </ul>

                        </div>
                                            </div>
                </div>

                <!-- 侧边栏 -->
                <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm">
                    <div class="aw-mod aw-text-align-justify">
                        <div class="mod-head">
                            <a href="#topic/channel-hot" class="pull-right">更多 &gt;</a>
                            <h3>热门分类</h3>
                        </div>
                        <div class="mod-body">
                                                                                                                                                                                                       <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/laravel">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/laravel" class="text" data-id="38">LARAVEL</a>
                                                 </span>
                                             </p>
                                             <p><b>4</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                             <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/symfony">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/symfony" class="text" data-id="38">SYMFONY</a>
                                                 </span>
                                             </p>
                                             <p><b>3</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                             <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/javascript">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/javascript" class="text" data-id="38">JAVASCRIPT</a>
                                                 </span>
                                             </p>
                                             <p><b>1</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                             <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/mysql">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/mysql" class="text" data-id="38">MYSQL</a>
                                                 </span>
                                             </p>
                                             <p><b>6</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                             <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/life">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/life" class="text" data-id="38">LIFE</a>
                                                 </span>
                                             </p>
                                             <p><b>3</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                             <dl>
                                         <dt class="pull-left aw-border-radius-5">
                                             <a href="/category/network">
                                                <img alt="" src="/images/topic-mid-img.png">
                                             </a>
                                         </dt>
                                         <dd class="pull-left">
                                             <p class="clearfix">
                                                 <span class="topic-tag">
                                                     <a href="/category/network" class="text" data-id="38">NETWORK</a>
                                                 </span>
                                             </p>
                                             <p><b>7</b> 篇文章, <b>0</b> 人收藏</p>
                                        </dd>
                                     </dl>
                                                                                                                                                                                                                                                                                                                                  </div>
                    </div>
                    <div class="aw-mod aw-text-align-justify">
                        <div class="mod-head">
                            <a href="#people/" class="pull-right">更多 &gt;</a>
                            <h3>热门用户</h3>
                        </div>
                        <div class="mod-body">
                                                                                                                                                                                                                                                                                                                                                                                                                            <dl>
                                <dt class="pull-left aw-border-radius-5">
                                    <a href="/users/godruoyi"><img alt="" src="/images/avatar-mid-img.png"></a>
                                </dt>
                                <dd class="pull-left">
                                    <a href="/users/godruoyi" data-id="7" class="aw-user-name">godruoyi</a>
                                    <p class="signature"></p>
                                    <p>发布<b>24</b> 篇文章, <b>0</b> 次赞同</p>
                                </dd>
                                </dl>
                                                                                                                          
                        </div>
                    </div>              
                </div>
                <!-- end 侧边栏 -->
            </div>
        </div>
    </div>
</div>
        
            <div class="aw-footer-wrap">
	<div class="aw-footer">
		<a target="_blank" href="http://www.godruoyi.com">Godruoyi</a>
		<span class="hidden-xs"> · Copyright 2015 www.godruoyi.com All Rights Reserved</span>
		<p>渝ICP备16003970号</p>
	</div>
</div>
</body></html>
`;


aaa.indexOf(a);







// var reg_href = a.match(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g);
// var aaa = a.match(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g);
// var reg_href = /<a([\s]+|[\s]+[^<>]+[\s]+)href=(\"([^<>"\']*)\"|\'([^<>"\']*)\')>/gi;
// // // var reg_title = /<title([\s]+|[\s]+[^<>]+[\s]+)[^<>]*>/gi;
// var aaa = a.toLowerCase().match(reg_href);
// for(var x of aaa){
//     x = x.replace(new RegExp("\"",'gm'), "");
//     x = x.replace(/(^\s+)|(\s+$)/g, "");
//     x = x.replace(/\s/g, "")
//     x = x.slice(x.indexOf('href')+5);
//     x = x.replace(">", "");
//     if(x.startsWith("/") || x.startsWith('#')){
//         x = 'http://godruoyi.com' + x;
//     }
//     console.log(x);
// }
// var arr = [];
// while(reg_href.exec(a)!=null)
// {
// arr.push(RegExp.$2);//如果是RegExp.$1那么匹配的就是href里的属性了!
// }
// console.log(arr);
// if (aaa.length > 0)
// {
//   for(var aa of aaa)
//   {
    
//   }
// }


// //<title>Godruoyi</title>
// var title = a.match(/<title[^>]*(.*?)<\/title?/g);
// console.log(title.length);
// for(var t of title)
// {
//     console.log(t);
// }

// var title = a.match(/\<title\>*(.*?)\<\/title\>/g);
// var meat = a.match(/\<meta\s(.*?)\/?\>/g);

// console.log(title.length);

// console.log(meat.length);
// var xxx = a.replace(/<[^>]+>/g,"")
