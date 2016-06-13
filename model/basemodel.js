import mongoose from "mongoose";

export default class BaseModel
{

  constructor(tableName, mongooseSchema)
  {
    this.tableName = tableName;
    this.mongooseSchema = mongooseSchema;
    this.config = require('./../config/config.js');

    this._init();
  }

  _init()
  {
  	this.db = mongoose.createConnection(`mongodb://${this.config.mongodb.host}/${this.config.mongodb.dbname}`);
  	this.Schema = mongoose.Schema;
  	var mongooseSchema2 = new mongoose.Schema(this.mongooseSchema);
	  this.mongooseModel = this.db.model(this.tableName, mongooseSchema2);
  }

  async save(doc, callback)
  {
    var _db = this.db;
    var _id = this.Schema.Types.ObjectId;
    await this.mongooseModel.create(doc, function(error){
      if(error) {
        // console.log(error);
        callback(error);
      } else {
        // console.log('save ok');
        callback(null, _id);
      }
    });
    _db.close();
  	
  }

  update(where, update, callback)
  {
    var _db = this.db;
    update = {$set: update};
    var options = {upsert : true};
    this.mongooseModel.update(where, update, options, function(error){
    if(error) {
        // callback('update error .... '+error);
    } else {
        // console.log('update ok!');
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
        // callback('find data error .... ');
      	callback(err);
      } else {
      	callback(null, result); 
      }
    });
    _db.close();
  }


  async findOne(where, callback)
  {
    var _db = this.db;
    await this.mongooseModel.findOne(where, function(err, doc){
      if(err){
        callback('mongodb find one error ...');
      } else {
        callback(null, doc);
      }
    });
    _db.close();
  }

  async count(where, callback)
  {
    var _db = this.db;
    await this.mongooseModel.count(where, function(err, c) {
      if(err){
        callback(err);
      } else {
        // console.log('DB COUNT OK :' + c);
        callback(null, c);
      }
    });
    _db.close();
    
  }

  delete(where, callback)
  {
    var _db = this.db;
  	this.mongooseModel.remove(where, function(err, docs){
  	  if(err){
        callback('delete shi bai ....');
  	  } else {
  	  	// console.log('delete SUCCESS ....');
  	  }
      _db.close();
  	});
  }



}