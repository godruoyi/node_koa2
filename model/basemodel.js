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

 async update(where, update, callback)
  {
    var _db = this.db;
    // update = { $set: update};
    var options = {};
    await this.mongooseModel.update(where, update, function(error, numAffected){
      if(error) {
          callback('update error .... '+error);
      } else {
          console.log('update ok!' + numAffected);
          callback(null, 'true');
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


  async findByPage(options, callback)
  {
    let page = options.page ? options.page : 0;
    let page_size = options.page_size ? options.page_size : 15;
    let _db = this.db;
    await this.mongooseModel.find(options.where, options.fields, {skip: page, limit: page_size} , function(err, result) {
      if(err) {
        console.log(err);
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
        callback(new Error('mongodb find one error ...'));
      } else {
        callback(null, doc);
      }
    });
    _db.close();
  }

  async findById(id, callback)
  {
    var _db = this.db;
    await this.mongooseModel.findById(id, function(err, doc){
      if(err){
        callback(new Error('mongodb find By Id error ...'));
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
        console.log('Count error : ',err);
        callback(err);
      } else {
        console.log('DB COUNT OK :' + c);
        callback(null, c);
      }
    });
    _db.close();
  }

  async delete(where, callback)
  {
    var _db = this.db;
  	await this.mongooseModel.remove(where, function(err, docs){
  	  if(err){
        callback('delete shi bai ....');
  	  } else {
  	  	// console.log('delete SUCCESS ....');
        callback(null, 'SUCCESS'); 
  	  }
    });
    _db.close();
  }

  async findByIdAndRemove(id, callback){
    var _db = this.db;
    await this.mongooseModel.findByIdAndRemove(id, callback);
    _db.close();
  }

  /**
   * 
   */
  close()
  {
    var _db = this.db;
    _db.close();
    // this = null;
  }



}