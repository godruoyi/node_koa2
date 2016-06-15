

			
		promise.then(function(result){
			whileTag ++;
			let pachomgModel = new model();
			pachomgModel.save({
				title : result.title,
				desc    : result.desc,
				url    : result.currentUrl,
				content  : result.content,
				img     : result.image,
				indexurl : rekouurl,
				keyword : result.keyword
			}, function(err, id){
				if(err){
					console.log('数据库保存失败， 继续下一个。。。。。');
				} else {
					console.log('数据库保存成功， 继续下一个。。。。。');
				}
			});

			let nexturl = UrlQueues.next();
			if(!nexturl){
				console.log('全部解析完成。。。。。');

				if (whileTag === 5 )
				{
					// let pachomgModelcount2 = new model();
					// pachomgModelcount2.count({indexurl: rekouurl}, function(err, c){
					// 	if(err){
					// 		console.log('Find mongodb count error ......');
					// 		console.log(err);
					// 	} else {
					// 		console.log('结果数据长度： ' + c);
					// 	}
					// });
					// console.log('Url队列长度： ' + UrlQueues.getLength());
					// // console.log(UrlQueues.getData());
					
					let isokModel = new isok();
					isokModel.update(
						{ indexurl: rekouurl}, 
						{
							isok: 'SUCCESS'
						}, function(err, id){
							if(err){
								console.log('ISOK表保存出错。1。。。。',err);
								// console.log('ISOK表保存出错。。。。。' + err);
							}
						}
					);
					console.log('完成----------------------------');
				} else {
					console.log('等待其他事件完成调度。。。。。' + whileTag);
				}
				
			} else {
				console.log('下一个URL: ' + nexturl);
				console.log('剩余解析长度： ' + UrlQueues.getNoLength());

				switch(whileTag) {
					case 1: 
						dogoto(nexturl);
						break;
					case 2: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						break;
					case 3: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 4: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 5: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
				}
			}
		}, function(err){
			console.log('Promise 解析出错， 继续下一个......:\n', err);
			whileTag ++;

			let pachomgModel = new model();
			let nexturl = UrlQueues.next();
			if(!nexturl){
				console.log('全部解析完成。。。。。');

				if (whileTag === 5 )
				{
					// pachomgModel.count({indexurl: rekouurl}, function(err, c){
					// 	if(err){
					// 		console.log(err);
					// 	} else {
					// 		console.log('结果数据长度： ' + c);
					// 	}
					// });
					// console.log('Url队列长度： ' + UrlQueues.getLength());
					// // console.log(UrlQueues.getData());
					

					// Oh here , get a error : MongoError: server 127.0.0.1:27017 sockets closed

					let isokModel1 = new isok();
					isokModel1.update(
						{ indexurl: rekouurl}, 
						{
							isok: 'SUCCESS'
						}, function(err, id){
							if(err){
								// console.log('ISOK表保存出错。。。。。' + err);
								console.log('ISOK表保存出错。1。。。。',err);
							}
						}
					);
					console.log('完成----------------------------');
				} else {
					console.log('等待其他事件完成调度。。。。。' + whileTag);
				}

				
			} else {
				console.log('下一个URL: ' + nexturl);
				console.log('剩余解析长度： ' + UrlQueues.getNoLength());
				switch(whileTag) {
					case 1: 
						dogoto(nexturl);
						break;
					case 2: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						break;
					case 3: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 4: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
					case 5: 
						dogoto(nexturl);
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						dogoto(UrlQueues.next());
						break;
				}
			}
		});