var regular_aherf = /<a([\s]+|[\s]+[^<>]+[\s]+)href=(\"([^<>"\']*)\"|\'([^<>"\']*)\')>/gi;
var str = `

<!DOCTYPE html>
<html>
    <head>
                                <meta charset="utf-8" />
        <meta name ="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <meta property="qc:admins" content="251034410766174610006636" />
        <meta property="wb:webmaster" content="98f31a051ed51991" />

        <title>
            OneNET-中国移动物联网开放平台
        </title>
        <meta name="description" content="OneNET-中国移动物联网开放平台是由中国移动打造的PaaS物联网开放平台。平台能够帮助开发者轻松实现设备接入与设备连接， 快速完成产品开发部署，为智能硬件、智能家居、可穿戴式设备等消费电子产品，无线抄表、智慧能源等行业物联网应用，提供综合性的物联网解决方案，实现物联网设备的数据获取，数据存储，数据展现。">
        <meta name="keywords" content="中国移动 OneNET 智慧城市 物联网开放平台 物联网应用 可穿戴式 物联网云平台 物联网解决方案 物联网 创客 智能硬件 开发者 车联网 设备接入 智能家居 设备云">
        <link rel="shortcut icon" href="http://open.iot.10086.cn/static/files/favicon.ico" type="image/x-icon"/>

        <link type="text/css" rel="stylesheet" href="/static/common/css/global_42c6033.css">

        
<link type="text/css" rel="stylesheet" href="/static/index/css/index_684ecdf.css">

        
            
        
        <script>


            var IOT = {
                userData: {
                    nickname: '',
                    avatar: ''
                },
                staticUrl: 'http://open.iot.10086.cn/static',
                host: 'open.iot.10086.cn',
                imageUrl: 'http://upfiles.heclouds.com',
                defaultAvatar: 'http://open.iot.10086.cn/static/files/image_cliper/default-200.jpg',
                i18n: 'zh_CN',
                i18nS: ''
            };
        </script>
        <script>
            <!-- 百度统计 -->
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?fb3a66a8ee8dcd5e16c7cae035393beb";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        </script>
    </head>
    <body>
        <!--[if lte IE 7]>
        <div class="alert-box alert header-alert">
            你正在使用本平台<strong>不支持</strong>的IE低级浏览器，<br />为了更好的使用中国移动物联网开放平台，请您立即<a class="blue" href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank">升级IE浏览器</a>或者用更快更安全的<a class="blue" href="https://www.google.com/chrome/browser/desktop/index.html?hl=zh-CN&standalone=1" target="_blank">谷歌浏览器Chrome</a> 。
        </div>
        <![endif]-->
        
            
<div class="header">
    <div class="h-top grid">
        <a href ="/" class="logo fl " title="首页"></a>
        <div class="info fr clearfix ">
            <!-- <div class="search fl">
                <span><input type="text"/></span>
                <span class="po-img"><a href="#"><img src="/static/common/img/search.png" alt=""/></a></span>
            </div> -->
            <a href="/about" class="a-style fl">关于我们</a>
            <a href="/about/contact" class="a-style fl">联系我们</a>
                        <a href="http://ioteams.com" target="_blank" class="a-style fl">加入我们</a>
                                        <a href="/reg/tel" class="a-style fl">注册</a>
                <div class="e5 fl">|</div>
                <a href="/login" class="a-style fl">登录</a>
            
            <div class="a-style fl select-lang">
                <a><span class="selected-lang">Language</span><i class="icon-angle-down"></i></a>
                <div class="ul-select-lang">
                    <a href="/" class="">中文</a>
                    <a href="/en/" class="">English</a>
                    <a href="/ru/" class="">русский</a>
                    <a href="/de/" class="">Deutsch</a>
                    <a href="/ko/" class="">한국의</a>
                    <a href="/jp/" class="">日本語</a>
                </div>
            </div>


            <!--<a href="javascript:;" class="a-style fl" onclick="IOT.setI18n('en_US', '/');">English</a>
            <div class="e5 fl">|</div>
            <a href="javascript:;" class="a-style fl" onclick="IOT.setI18n('zh_CN', '/');">中文</a>
            -->
        </div>
    </div>
</div>        

        
<h1 class="hide">物联网设备数据托管,首选中国移动物联网开放平台</h1>

<div class="nav grid">
    <div class="menu fl ">
                    <div class="mv-underline index"></div>
                <ul class="clearfix">
            <li><a href="/" class="title1 active" title="Home">首页</a></li>
            <li><a href="/case" class="title2 " title="Case">案例</a></li>
            <li><a href="/discover" class="title3 " title="Discover">发现</a></li>
            <li><a href="/try" class="title4 " title="Experience">体验</a></li>
            <li><a href="/develop" class="title5 " title="Develop">开发者中心</a></li>
                            <li><a href="/trend" class="title7 " title="trend" >动态</a></li>
                        <li><a href="/bbs" class="title6 " title="BBS" target="_blank">社区</a></li>
        </ul>
    </div>
    <div class="link fr">
        <div class="access fl">
            <a href="/device/add">
                <span class="icon-plug"></span>
                                                                                    <img src ="/static/files/index/m_device.png" alt="">
                <span class="icon-right-open"></span>
            </a>
        </div>
        <div class="e5 fl">|</div>
        <div class="develop fl clearfix">
            <a href="/project/index">
                <span class="icon-desktop"></span>
                                                                                    <img src="/static/files/index/m_pro.png" alt="">
                <span class="icon-right-open"></span>
            </a>
        </div>
    </div>
</div><div class="content" data-lang="zh_CN">
    <div class="c-outer">
        <div class="sliders"></div>
    </div>
    <div class="c-experience">
        <div class="c-e-layout grid ">
            <p>手机扫一扫，体验中移物联网开放平台的神奇</p>

            <div>
                <a href="/try">
                    <button>体验&nbsp;中移物联网开放平台<i class="icon-right-open"></i></button>
                </a>
            </div>
        </div>
    </div>
    <div class="c-line"></div>
    <div class="c-function ">
        <div class="grid">
                                                            <div class="title"><img src="/static/files/index/i_bf0108.png" alt=""/></div>
            <div class="c-f-li clearfix">
                <ul>
                    <li>
                        <div class="link-container">
                            <div class="remain">
                                <h2>泛连接</h2>

                                <p>开放平台，从连接开始</p>
                            </div>
                            <div class="after">
                                <img src="/static/files/index/bg_link.jpg"/>

                                <div class="char">
                                    <div class="bg"></div>
                                    <p>中移物联网开放平台支持多种网络接入协议，轻松接入各种物体、智能家居、汽车、穿戴设备、行业终端</p>
                                </div>
                            </div>
                            <i class="icon-link"></i>
                        </div>
                    </li>
                    <li>
                        <div class="cloud">
                            <div class="cloud-wrap">
                                <div class="cloud-info">
                                    <div class="front">
                                        <i class="icon-cloud"></i>

                                        <h2>云平台</h2>

                                        <p>无处不在，自由拓展</p>
                                    </div>
                                    <div class="back">
                                        <i class="icon-cloud-1"></i>

                                        <p>专注物联网PaaS云服务，满足原型开发、产品商用和运营管理</p>
                                    </div>
                                </div>
                                <div class="cloud-info-forIE">
                                    <div class="bottom"><img src="/static/files/index/bg_cloud.jpg" alt=""/></div>
                                    <div class="word">
                                        <i class="icon-cloud-1"></i>

                                        <p>专注物联网PaaS云服务，满足原型开发、产品商用和运营管理</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="app">
                            <div class="inner">
                                <div class="front">
                                    <i class="icon-paper-plane inner-front"></i>

                                    <h2>轻应用</h2>

                                    <p>快速生成，变现创意</p>
                                </div>
                                <div class="bg-app"></div>
                                <div class="bg-flight"></div>
                                <div class="flight-path">
                                    <i class="icon-paper-plane"></i>
                                </div>
                                <div class="bg-word">
                                    <p>借助中移物联网开放平台提供的轻应用业务孵化平台，5分钟即可搭建并分发您的快平台应用</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="data">
                            <div class="front">
                                <h2>大数据</h2>

                                <p>海量数据，洞悉未来</p>
                            </div>
                            <div class="chart">
                                <div class="part1"></div>
                                <div class="part2"></div>
                                <div class="part3"></div>
                                <div class="part4"></div>
                            </div>
                            <div class="data-word">
                                <p>中移物联网开放平台提供海量大数据分析引擎，助您从海量数据中遇见未来</p>
                            </div>
                            <i class="icon-chart-bar-outline"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="c-contact unslider-wrapper grid ">
        <ul>
            <li class="grid-contact">
                <p>您可以直接联系我们进行合作，物联网平台值得你信赖；您也可以尝试接入设备，体验平台无穷魅力</p>

                <div>
                    <a href="/about/contact">
                        <button class="contact-us">联系我们</button>
                    </a>
                    <a href="/device/add">
                        <button class="access-device">接入设备</button>
                    </a>
                </div>
            </li>
            <li class="grid-zcdb">
                <a target="_blank"
                   href="http://www.huodongxing.com/event/5298509816500?utm_source=%E6%90%9C%E7%B4%A2%E9%A1%B5&utm_medium=&utm_campaign=searchpage"></a>
            </li>
        </ul>
    </div>

    <div class="c-case">
        <div class="grid">
            <div class="title">
                                                                                <img src="/static/files/index/i_ae0108.png" alt=""/>

                <div><a href="/case">更多案例<i class="icon-angle-double-right"></i></a></div>
            </div>

            <div class="c-c-li clearfix">
                                <ul>
                                        <li>
                        <h3><a href="/case/detail?id=29">智能女鞋健康管理系统...</a></h3>

                        <p class="gray mb20">案例作者：<a
                                    href="/discover/user?id=10441">OneNET</a></p>
                                                                                                <a href="/case/detail?id=29">

                            <img src="http://upfiles.heclouds.com/123/case/2016/03/21/06c1427f9b7b7a62e6a8aa1c40f1cc59.jpg" alt=""/>
                        </a>

                        <p class="mt20">让智能女鞋成为解决女性体态健康管理并为其提供服务的载体。</p>
                    </li>
                                        <li>
                        <h3><a href="/case/detail?id=32">iKair空气胶囊...</a></h3>

                        <p class="gray mb20">案例作者：<a
                                    href="/discover/user?id=10441">OneNET</a></p>
                                                                                                <a href="/case/detail?id=32">

                            <img src="http://upfiles.heclouds.com/123/case/2016/04/12/6c14efe1857c5317590d0ee0680e9f90.png" alt=""/>
                        </a>

                        <p class="mt20">24小时持续监测室内环境的变化，还可以对数据进行人性化解读和反向控制。</p>
                    </li>
                                        <li>
                        <h3><a href="/case/detail?id=53">物联网+智慧农业系统...</a></h3>

                        <p class="gray mb20">案例作者：<a
                                    href="/discover/user?id=10441">OneNET</a></p>
                                                                                                <a href="/case/detail?id=53">

                            <img src="http://upfiles.heclouds.com/123/case/2016/05/19/e6eb9f2562b7379dfc1cb81da9017fbf.jpg" alt=""/>
                        </a>

                        <p class="mt20">本项目着眼于农业现代化，并瞄准其中的设施自动化细分市场发力，主要包括水肥一体机市场、环境控制自动化及烤烟自动化市场，和未来的植物工厂。</p>
                    </li>
                                    </ul>
                            </div>
            <div class="mb135"></div>
        </div>
    </div>

    <div class="c-news ">
        <div class="grid">
            <div class="title">
                                                                                <img src="/static/files/index/news0301.png" alt=""/>
                <div><a href="/trend?type=news">更多新闻<i class="icon-angle-double-right"></i></a></div>
            </div>

            <div class="c-c-li clearfix">
                <ul>
                                        <li>
                        <h3><a href="/trend/details?id=38" target="_blank" title="中国移动开发者俱乐部第76期主题沙龙“和MM共创卓越——互联网创业篇”">OneNET和MM共创卓越</a></h3>
                        <p class="gray mb20">新闻作者：OneNET</p>
                        <a href="/trend/details?id=38" target="_blank">
                            <img src="http://upfiles.heclouds.com/123/activity/2016/06/02/1c13f74a986607165605d23503efac13.png" alt=""/>
                        </a>

                        <p class="mt20">5月26日，由移动MM主办的中国移动开发者俱乐部第76期主题沙龙开赴云南，OneNET参与了该活动并发表了主题演讲。</p>
                    </li>
                                        <li>
                        <h3><a href="/trend/details?id=37" target="_blank" title="OneNET走进启迪之星创业营">OneNET走进启迪之星创业营</a></h3>
                        <p class="gray mb20">新闻作者：OneNET</p>
                        <a href="/trend/details?id=37" target="_blank">
                            <img src="http://upfiles.heclouds.com/123/activity/2016/06/01/92253e8e4b5e0e2acb14b129a648a464.png" alt=""/>
                        </a>

                        <p class="mt20">5月25日，启迪之星·2016 创业营（天津站）在滨海信息安全产业园举行了数字产业与信息安全创业论坛，OneNET受邀参与了该论坛。</p>
                    </li>
                                        <li>
                        <h3><a href="/trend/details?id=36" target="_blank" title="寻找最IN造物者！OneNET杯浙大物联网创新大赛启幕">OneNET杯浙大物联网创新大赛启幕</a></h3>
                        <p class="gray mb20">新闻作者：OneNET</p>
                        <a href="/trend/details?id=36" target="_blank">
                            <img src="http://upfiles.heclouds.com/123/activity/2016/05/30/4f40a571cf78f5d65463b63fcd3d4ce5.png" alt=""/>
                        </a>

                        <p class="mt20">5月26日，第二届“中移OneNET杯”物联网应用创新大赛在浙江大学正式启幕。</p>
                    </li>
                                    </ul>
            </div>
            <div class="mb135"></div>
        </div>
    </div>
            <div class="c-chips">
            <div class="grid">
                <div class="title">
                                                                                                    <img src="/static/files/index/chips_title.png" alt=""/>
                </div>
                <div class="c-c-chips clearfix">

                    <ul class="j_chips ">
                                                                                                                            <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips01.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">联盛德</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips02.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">乐鑫</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips03.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">新岸线</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips04.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">庆科</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips05.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">汉枫</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips06.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">安信可</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips07.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">阳光照明</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/chips/index" target="_blank">
                                <img src="/static/files/index/chips08.png" alt="">
                                <div class="identifier">
                                    <div class="shade"></div>
                                    <span class="number">江波龙电</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="c-partner">
        <div class="grid">
                                                            <div class="title"><img src="/static/files/index/i_cp0108.png" alt=""/></div>
            <div class="c-p-logo">
                <ul>
                    <li class="ibm"></li>
                    <li class="zhongyuan"></li>
                    <li class="ieslab"></li>
                    <li class="docomo"></li>
                    <li class="kt"></li>
                    <li class="aotu"></li>
                    <li class="chubang"></li>
                    <li class="grand"></li>
                    <li class="ench"></li>
                    <li class="honey"></li>
                </ul>
            </div>
        </div>
    </div>
</div>

        
            <div class="footer clearfix ">
    <div class="f-info grid clearfix">
        <ul class ="clearfix">
            <li class="mr50">
                <h3>关于我们</h3>
                <div class="u-l-red"></div>
                <p class="mb15"><a href="/about">我们是谁</a></p>
                <p class="mb15"><a href="/case">成功案例</a></p>
                <p class="mb15"><a href="/try">体验产品</a></p>
                <p><a target="_blank" href="http://ioteams.com/">加入我们</a></p>
            </li>
            <li class="mr50">
                <h3>开发者</h3>
                <div class="u-l-red"></div>
                <p class="mb15"><a href="/develop">快速接入设备</a></p>
                <p class="mb15"><a href="/apidoc">API文档</a></p>
                <p class="mb15"><a href="/help">接入文档</a></p>
                <p class="mb15"><a href="/debugtool">调试工具</a></p>
                                    <p class="mb15"><a href="/index/serviceprot" target="_blank">服务协议</a></p>
                            </li>
            <li class="mr180">
                <h3>友情链接</h3>
                <div class="u-l-red"></div>
                <p class="mb15"><a href="http://iot.10086.cn/" target="_blank">中移物联网</a></p>
                <p class="mb15"><a href="http://iot.10086.cn/2013-12-20/1387367454797.html" target="_blank">物联网专网</a></p>
                <p class="mb15"><a href="http://www.arduino.cn/forum-94-1.html" target="_blank">arduino中文社区</a></p>
                <p class="mb15"><a href="http://www.hemax.net" target="_blank">智能硬件</a></p>
                <p class="mb15"><a href="http://ec.iot.10086.cn" target="_blank">物联网业务管理平台</a></p>
                                    <p class="mb15"><a href="http://www.qwulian.cn/" target="_blank">Q物联</a></p>
                                
            </li>
            <li class="multi-lang">
                <h3>APP下载</h3>
                <div class="u-l-red"></div>
                <div class="q-code">
                    <img src="/qrcodeapk/getQrcode" />
                    <p class="q-code-p"><a href="https://itunes.apple.com/cn/app/she-bei-yun/id1014369166?l=en&amp;mt=8" target="_blank">iOS</a> / <a href="http://upfiles.heclouds.com/other_files/shebeiyun.apk" target="_blank">Android</a></p>
                </div>
            </li>
            <li class="clearfix">
                <h3>联系方式</h3>
                <div class="u-l-red"></div>
                <p class="mb15"><a href="javascript:;" class="j_contact">15998996696(李经理)</a></p>
                <p class="mb15"><a href="javascript:;">QQ交流群: 244899442</a></p>
                <p class="mb15"><a href="mailto:onenet_service@iot.chinamobile.com">onenet_service@iot.chinamobile.com</a></p>
                <p><a href="http://j.map.baidu.com/RyXtk" target="_blank">重庆市南岸区玉马路8号</a></p>
            </li>
        </ul>
        <div class="grid f-line">
            <span><img src="/static/files/index/u_l_half.png" alt=""/></span>
            <span class="fr"><img src="/static/files/index/u_l_half.png" alt=""/></span>
        </div>
                                            <div class="f-logo"><img src="/static/files/index/logo_footer.png" alt=""/></div>
        <p class="f-signature">
            <span><a href="http://iot.10086.cn/">中移物联网</a></span>
            <span>版权所有 (c)</span>
            <span> 2016 </span>
            <!-- <span><a href="http://www.heclouds.com">www.heclouds.com</a></span> -->
        </p>
    </div>
</div>        

                                                <script type="text/javascript" charset="utf-8" src="/static/pkg/auto_combine_01264_42fc65f.js"></script>

                    
            <script type="text/javascript" charset="utf-8" src="/static/common/js/lib/parsley.i18n_52b6c6e.js"></script>

                
<script type="text/javascript" charset="utf-8" src="/static/pkg/auto_combine_dd8ff_e51d303.js"></script>


        <script>
            try {
                monitor.setConf({
                    trackUrl : '//monitor.fe.ioteams.com/monitor/s.htm',
                    clickUrl : '//monitor.fe.ioteams.com/monitor/c.htm',
                    wpoUrl : '//monitor.fe.ioteams.com/monitor/p.htm'
                });
                monitor.setProject("onenet_portal").getTrack().getClickAndKeydown();

                window.monitor && function(){
                    window.onerror = function(m, f, l, c, e){
                        var data = {
                            m: m,
                            f: f,
                            l: l,
                            c: c
                        };
                        if (e && e.stack) {
                            data.e = e.stack;
                        }
                        monitor.log({
                            type: 'error',
                            data: JSON.stringify(data)
                        }, 'wpo');
                    }
                }();
            } catch(e){}
        </script>
    </body>

</html>
`;

var domain = 'http://open.iot.10086.cn';
var data = str.match(regular_aherf);
console.log(data);
console.log('-------------------------------');
var data2 = [];
for(var x of data){
    x = x.replace(new RegExp("\"",'gm'), "");
    x = x.replace(new RegExp("'",'gm'), "");
    x = x.replace(/(^\s+)|(\s+$)/g, "");
    x = x.replace(/\s/g, "")
    x = x.slice(x.indexOf('href')+5);
    x = x.replace(">", "");
    if(x.startsWith("/") || x.startsWith('#')){
        x = domain + x;
    }
    if(x.startsWith(domain)){

    	data2.push(x);
    }
}
console.log(data2);

console.log('--------------------------------------');
var wocao = 'http://open.iot.10086.cn/';
if(!wocao.startsWith('http')){
    wocao = 'http://' + wocao;
}
var t = wocao.indexOf('/', 8);
wocao = wocao.substring(0, t)
console.log(wocao);