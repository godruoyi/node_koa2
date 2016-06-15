import BaseModel from './basemodel.js';

/**
 * 存储爬取数据Model
 */
export default class extends BaseModel{

  constructor()
  {
  	let mongooseSchema = {
      title : {type : String, default : ''},
      desc    : {type : String},
      url    : {type : String},
      content  : {type : String},
      img     : {type : String},
      indexurl : {type : String}, 
      keyword : {type : String}, 
      data : {type : Date, default: Date.now}
  	};
  	super('crawler_data_one', mongooseSchema);
  }

}