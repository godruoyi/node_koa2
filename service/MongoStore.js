import session from "koa-session2";
var MongoStore require("connect-mongo")(session);
var {Store} require("koa-session2");

var DB = require('mongodb').Db;
var Connection require('mongodb').Connection;
var Server require('mongodb').Server;

export default class MongoStore extends Store
{
	constructor(options)
	{
		super();
		this.MongoStore = new MongoStore({url: "mongodb://" + options.host + "/" + options.db});
		this.options = options;
	}

	async getMongoInstance() {
		this.mongodb = new DB(this.options.db, new Server(this.options.host, this.options.port, {}));
		return this.mongodb;
	}

	close()
	{
		this.mongodb.close();
	}

	async insert(obj, callbak)
	{
		this.getMongoInstance.open(function(err, db){
			if (err) {
				this.close();
				callbak(err);
				console.log(err);
			}
			db.collection(this.options.collection, function(err, collection){
				if (err){
					this.close();
					callbak(err);
				}
				collection.insert(obj, {safe: true}, function(err, obj){
					err || this.close();
					callbak(null, obj);
				});
			});
		});
	};

		

}