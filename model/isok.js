import BaseModel from './basemodel.js';

export default class extends BaseModel{

  constructor()
  {
  	let mongooseSchema = {
      indexurl : {type : String}, 
      isok : {type : String},
      date : {type : Date, default: Date.now}
  	};
  	super('crawler_success2', mongooseSchema);
  }

}