module.exports = {

	//
	phantom : {
		saveimgpath: "F:/tmp/imgs/1/",
		imagesuffix: ".jpg",
		zoomFactor: 1,
		viewportSize: {
			width: 1024, 
			height: 768
		},
	},

	//最大爬取的URL队列长度
	urlqueueMaxLength: 20,

	mongodb: {
		host: "127.0.0.1",
		dbname: "pachong_db_store",
	}
	


};