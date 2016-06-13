import BaseModel from './basemodel.js';


/**
 *  判断爬取是否完成标记Model
 */
export default class extends BaseModel{

  constructor()
  {
  	let mongooseSchema = {
      indexurl : {type : String}, 
      isok : {type : String},
      date : {type : Date, default: Date.now}
  	};
  	super('crawler_success_one', mongooseSchema);
  }

}