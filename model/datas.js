import BaseModel from './basemodel.js';

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
      data : {type : Date, default: Date.now}
  	};
  	super('table2', mongooseSchema);
  }

}