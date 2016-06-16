export default class {
	
	constructor()
	{
		this.queue = [];
		this.queue_p = [];
		this.config = require('./../../config/config.js');
		this.noallowsuifx = [
			'.js',
			'.jpg',
			'.jpeg',
			'.png',
			'.apk',
			'.gif',
			'.exe'
		];

	}

	push (data)
	{
		if(!data) return false;
		let l = data.length;
		if( (l + this.getLength()) >= this.config.urlqueueMaxLength)
		{
			data = data.slice(0, (this.config.urlqueueMaxLength - this.getLength()));
		}
		for(let a of data){
			if( !a ) continue;
			let isbreak = 0;
			for(let sufix of this.noallowsuifx)
			{
				if (a.endsWith(sufix)){
					isbreak = 1;
					break;
				}
			}
			if(isbreak) continue;

			if( this.queue.indexOf(a) === -1 ){
				this.queue.push(a);
				this.queue_p.push(a);
			}
		}
	}

	next()
	{
		let done = this.queue_p.shift();
		if( typeof(done) === 'undefined')
		{
			return false;
		}
		return done;
	}


	getData()
	{
		return this.queue;
	}

	getLength()
	{
		return this.queue.length;
	}

	isEmpty()
	{
		return this.queue.length === 0;
	}
}