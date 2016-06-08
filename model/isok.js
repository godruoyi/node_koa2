import BaseModel from './basemodel.js';

export default class extends BaseModel{

  constructor()
  {
  	let mongooseSchema = {
      domain : {type : String}, 
      isok : {type : String},
      date : {type : Date, default: Date.now}
  	};
  	super('ISOK', mongooseSchema);
  }

}