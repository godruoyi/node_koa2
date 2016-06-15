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

  async save(doc)
  {
    var _db = this.db;
    var _id = this.Schema.Types.ObjectId;
    var _doc = false;
    await this.mongooseModel.create(doc, function(error){
      if(error) {
        console.log('Save mongodb error: '+error);
      } else {
        _doc = true;
      }
    });
    _db.close();
  	return _doc;
  }

  async update(where, update)
  {
    var _db = this.db;
    update = {$set: update};
    var options = {upsert : true};
    var isok = false;
    await this.mongooseModel.update(where, update, options, function(error){
    if(error) {
        console.log('Update mongodb Error: ' + error);
    } else {
        isok = true;
    }
    });
    _db.close();
    return isok;
  }

  async find(where)
  {
    var _db = this.db;
  	var fields = {}, options = {};
    var _result = false;
    await this.mongooseModel.find(where, fields, options, function(err, result){
      if(err)
      {
        console.log('Find mongodb error: ' + err);
      } else {
        _result = result;
      }
    });
    _db.close();
    return _result;
  }


  async findByPage(options, page = 1, page_size = 10)
  {
    let _db = this.db;
    let data = false;
    await this.mongooseModel.find(options.where, options.fields, {skip: page, limit: page_size} , function(err, result) {
      if(err) {
        console.log(err);
      } else {
        data = result;
      }
    });
    _db.close();
    return data;
  }

  async findOne(where, callback)
  {
    var _db = this.db;
    var _doc = false;
    await this.mongooseModel.findOne(where, function(err, doc){
      if(err){
        callback('FindOne mongodb Error: ' + err);
      } else {
        _doc = doc;
      }
    });
    _db.close();
    return _doc;
  }


  async count(where, callback)
  {
    var _db = this.db;
    var count = 0;
    await this.mongooseModel.count(where, function(err, c) {
      
      if(err){
        console.log('Count mongodb Error: ' + er);
      } else {
        count = c;
      }
    });
    _db.close();
    return count;
  }

  async delete(where, callback)
  {
    var _db = this.db;
    var _isok = false;
  	await this.mongooseModel.remove(where, function(err, docs){
  	  if(err){
        console.log('Delete mongodb Error: ' + err);
  	  } else {
  	  	_isok = true;
  	  }
    });
    _db.close();  
    return _isok;
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