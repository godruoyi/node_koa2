import mongoose from "mongoose";

export default class BaseModel
{

  constructor(tableName, mongooseSchema)
  {
    this.tableName = tableName;
    this.mongooseSchema = mongooseSchema;
    this.config = require('./../config/mongodb_config.js');

    this._init();
  }

  _init()
  {
  	this.db = mongoose.createConnection(`mongodb://${this.config.host}/${this.config.dbname}`);
  	this.Schema = mongoose.Schema;
  	var mongooseSchema2 = new mongoose.Schema(this.mongooseSchema);
	  this.mongooseModel = this.db.model(this.tableName, mongooseSchema2);
  }

  async save(doc, callback)
  {
  	var _db = this.db;
  	var _id = this.Schema.ObjectId;
  	await this.mongooseModel.create(doc, function(error){
	    if(error) {
        console.log(error);
        callback(error);
	    } else {
        console.log('save ok');
        callback(null, _id);
	    }
	    _db.close();
  	});
  	
  }

  async update(where, update, callback)
  {
  	update = {$set: update};
  	var options = {upsert : true};
    var _db = this.db;
  	await this.mongooseModel.update(where, update, options, function(error){
    if(error) {
        callback('update error .... '+error);
    } else {
        console.log('update ok!');
    }
    _db.close();
    });
  }

  async find(where, callback)
  {
  	var _db = this.db;
  	var fields = {}, options = {};
    await this.mongooseModel.find(where, fields, options, function(err, result){
      if(err)
      {
      	callback('find data error .... ');
      } else {
      	callback(null, result); 
      }
      _db.close();
    });
  }


  async delete(where, callback)
  {
  	var _db = this.db;
  	await this.mongooseModel.remove(where, function(err, docs){
  	  if(err){
        callback('delete shi bai ....');
  	  } else {
  	  	console.log('delete SUCCESS ....');
  	  }
  	  _db.close();
  	});
  }



}